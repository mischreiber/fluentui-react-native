import { NativeAppearanceAdditions } from '@fluentui-react-native/experimental-appearance-additions';
import { ThemeReference } from '@fluentui-react-native/theme';
import { Theme } from '@fluentui-react-native/theme-types';
import { Appearance, NativeEventEmitter } from 'react-native';
import { getBaseAppleThemeIOS } from './appleTheme.ios';

export function createAppleTheme(): ThemeReference {
  const appleThemeReference = new ThemeReference({} as Theme, () => {
    const isLightMode = Appearance.getColorScheme() === 'light';
    const isElevated = NativeAppearanceAdditions.userInterfaceLevel() === 'elevated';
    console.log('requesting getBaseAppleThemeIOS using isLightMode === ' + isLightMode + ', isElevated === ' + isElevated);
    return getBaseAppleThemeIOS(isLightMode, isElevated);
  });

  Appearance.addChangeListener(() => {
    appleThemeReference.invalidate();
  });

  const NotificationManagerEmitter = new NativeEventEmitter(NativeAppearanceAdditions);
  NotificationManagerEmitter.addListener('appearanceChanged', (newValue) => {
    for (const prop in newValue) {
      console.log('"NativeAppearanceAdditions" just fired: ' + prop + ' = ' + newValue[prop]);
    }
    appleThemeReference.invalidate();
  });

  return appleThemeReference;
}
