import { NativeEventEmitter } from 'react-native';
import NativeAppearanceAdditions from './NativeAppearanceAdditions.ios';
import type { AppearanceAdditions, SizeClass, UserInterfaceLevel, AccessibilityContrastOption } from './NativeAppearanceAdditions.types';
import { HorizontalSizeClassKey, UserInterfaceLevelKey, AccessibilityContrastOptionKey } from './NativeAppearanceAdditions.types';
import { memoize } from '@fluentui-react-native/framework';

class AppearanceAdditionsImpl implements AppearanceAdditions {
  _horizontalSizeClass: SizeClass;
  _userInterfaceLevel: UserInterfaceLevel;
  _accessibilityContrastOption: AccessibilityContrastOption;

  get horizontalSizeClass(): SizeClass {
    return this._horizontalSizeClass;
  }

  get userInterfaceLevel(): UserInterfaceLevel {
    return this._userInterfaceLevel;
  }

  get accessibilityContrastOption(): AccessibilityContrastOption {
    return this._accessibilityContrastOption;
  }

  constructor() {
    const eventEmitter = new NativeEventEmitter(NativeAppearanceAdditions as any);
    eventEmitter.addListener('appearanceChanged', (newValue) => {
      this._horizontalSizeClass = newValue[HorizontalSizeClassKey];
      this._userInterfaceLevel = newValue[UserInterfaceLevelKey];
      this._accessibilityContrastOption = newValue[AccessibilityContrastOptionKey];
    });
  }
}

function getAppearanceAdditionsWorker() {
  return new AppearanceAdditionsImpl() as AppearanceAdditions;
}

export const appearanceAdditions = memoize(getAppearanceAdditionsWorker);
