import { NativeEventEmitter } from 'react-native';
import NativeAppearanceAdditions from './NativeAppearanceAdditions.ios';
import {
  HorizontalSizeClassKey,
  IAppearanceAdditions,
  SizeClass,
  UserInterfaceLevel,
  UserInterfaceLevelKey,
} from './NativeAppearanceAdditions.types';

class AppearanceAdditionsImpl implements IAppearanceAdditions {
  _horizontalSizeClass: SizeClass;
  _userInterfaceLevel: UserInterfaceLevel;

  get horizontalSizeClass(): SizeClass {
    return this._horizontalSizeClass;
  }

  get userInterfaceLevel(): UserInterfaceLevel {
    return this._userInterfaceLevel;
  }

  constructor() {
    // const eventEmitter = new NativeEventEmitter(NativeFontMetrics as any);
    // eventEmitter.addListener('onFontMetricsChanged', ({ newScaleFactors }) => {
    //   this._scaleFactors = newScaleFactors;
    // });
    const eventEmitter = new NativeEventEmitter(NativeAppearanceAdditions as any);
    eventEmitter.addListener('appearanceChanged', (newValue) => {
      console.log(
        'Got new events for AppearanceAdditionsImpl: ' +
          HorizontalSizeClassKey +
          ' = ' +
          newValue[HorizontalSizeClassKey] +
          ', ' +
          UserInterfaceLevelKey +
          ' = ' +
          newValue[UserInterfaceLevelKey],
      );
      this._horizontalSizeClass = newValue[HorizontalSizeClassKey];
      this._userInterfaceLevel = newValue[UserInterfaceLevelKey];
    });
  }
}

// export const fontMetrics = new FontMetricsImpl() as FontMetrics;
export const appearanceAdditions = new AppearanceAdditionsImpl() as IAppearanceAdditions;
