#import "FRNAppearanceAdditions.h"

#import <React/RCTBridgeModule.h>
#import <React/RCTConstants.h>
#import <React/RCTUtils.h>

NSString *const FRNAppearanceSizeClassCompact = @"compact";
NSString *const FRNAppearanceSizeClassRegular = @"regular";

NSString *RCTHorizontalSizeClassPreference(UITraitCollection *traitCollection) {
    static NSDictionary *sizeClasses;
    static dispatch_once_t onceToken;

    dispatch_once(&onceToken, ^{
        sizeClasses = @{
        @(UIUserInterfaceSizeClassCompact) : FRNAppearanceSizeClassCompact,
        @(UIUserInterfaceSizeClassRegular) : FRNAppearanceSizeClassRegular
      };
    });

    traitCollection = traitCollection ?: [UITraitCollection currentTraitCollection];

    traitCollection = traitCollection ?: [UITraitCollection currentTraitCollection];
    NSString *sizeClass = sizeClasses[@(traitCollection.horizontalSizeClass)];
    if (sizeClass == nil) {
        sizeClass = [traitCollection userInterfaceIdiom] == UIUserInterfaceIdiomPhone ? FRNAppearanceSizeClassCompact : FRNAppearanceSizeClassRegular;
    }
    return sizeClass;
}

@implementation FRNAppearanceAdditions {
    BOOL _hasListeners;
    NSString *_horizontalSizeClass;
}

+ (BOOL)requiresMainQueueSetup {
    return YES;
}

#pragma mark - RCTEventEmitter

- (NSArray<NSString *> *)supportedEvents {
    return @[ @"appearanceChanged" ];
}

RCT_EXPORT_BLOCKING_SYNCHRONOUS_METHOD(horizontalSizeCategory)
{
    return _horizontalSizeClass;
}

- (void)startObserving {
    _hasListeners = YES;
    _horizontalSizeClass = RCTHorizontalSizeClassPreference(nil);
    [[NSNotificationCenter defaultCenter] addObserver:self
                                             selector:@selector(appearanceChanged:)
                                                 name:RCTUserInterfaceStyleDidChangeNotification
                                               object:nil];
}

- (void)stopObserving {
    _hasListeners = NO;
    [[NSNotificationCenter defaultCenter] removeObserver:self];
}

#pragma mark - Event processing

- (void)appearanceChanged:(NSNotification *)notification {
    if (_hasListeners) {
        NSString *horizontalSizeClass = RCTHorizontalSizeClassPreference(nil);
        if (![horizontalSizeClass isEqualToString:_horizontalSizeClass]) {
            _horizontalSizeClass = horizontalSizeClass;
            [self sendEventWithName:@"appearanceChanged"
                               body:@{@"horizontalSizeClass": _horizontalSizeClass}];
        }
    }
}

RCT_EXPORT_MODULE();

@end
