import { NativeAppearanceAdditions } from '@fluentui-react-native/experimental-appearance-additions';
import { ThemeReference } from '@fluentui-react-native/theme';
import { Theme } from '@fluentui-react-native/theme-types';
import { Appearance, NativeEventEmitter } from 'react-native';
import { getBaseAppleThemeIOS } from './appleTheme.ios';

export function createAppleTheme(): ThemeReference {
  const appleThemeReference = new ThemeReference({} as Theme, () => {
    const isLightMode = Appearance.getColorScheme() === 'light';
    const isCompact = NativeAppearanceAdditions.horizontalSizeCategory() === 'compact';
    console.log('isCompact: ' + isCompact);
    return getBaseAppleThemeIOS(isLightMode, isCompact);
  });

  Appearance.addChangeListener(() => {
    appleThemeReference.invalidate();
  });

  const NotificationManagerEmitter = new NativeEventEmitter(NativeAppearanceAdditions);
  NotificationManagerEmitter.addListener('appearanceChanged', (newValue) => {
    // console.log('"NativeAppearanceAdditions" just fired: ' + newValue.va);
    for (const prop in newValue) {
      console.log('"NativeAppearanceAdditions" just fired: ' + prop + ' = ' + newValue[prop]);
    }
    appleThemeReference.invalidate();
  });

  // NativeAppearanceAdditions.addListener('appearanceChanged');

  // NativeAppearanceAdditions.addListener('appearanceChanged', () => {
  //   appleThemeReference.invalidate();
  // });

  return appleThemeReference;
}
