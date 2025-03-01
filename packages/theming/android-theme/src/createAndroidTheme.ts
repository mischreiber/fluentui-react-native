import { ThemeReference } from '@fluentui-react-native/theme';
import { getAndroidTheme } from './androidTheme';
import { Appearance } from 'react-native';
import type { Theme, ThemeOptions } from '@fluentui-react-native/theme-types';

export function createAndroidTheme(options: ThemeOptions = {}): ThemeReference {
  const themeRef = new ThemeReference({} as Theme, () => {
    // Stub out HC and darkElevated on Android
    const current =
      options.appearance === 'dynamic' || options.appearance === 'highContrast' || options.appearance === 'darkElevated'
        ? (Appearance && Appearance.getColorScheme()) || 'light'
        : options.appearance;
    return getAndroidTheme(current);
  });

  if (Appearance && options.appearance === 'dynamic') {
    Appearance.addChangeListener(() => {
      themeRef.invalidate();
    });
  }

  return themeRef;
}
