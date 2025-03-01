import { Appearance } from 'react-native';
import { AppTheme } from 'react-native-windows';
import type { AppearanceOptions, ThemeOptions } from '@fluentui-react-native/theme-types';

export function getCurrentAppearance(appearance: ThemeOptions['appearance'], fallback: AppearanceOptions): AppearanceOptions {
  if (appearance === undefined) {
    return fallback;
  }

  const isDynamic = appearance === 'dynamic';

  if (isDynamic) {
    if (!AppTheme || !Appearance) {
      return fallback;
    }

    if (AppTheme.isHighContrast) {
      return 'highContrast' as AppearanceOptions;
    } else {
      return Appearance.getColorScheme(); // light or dark
    }
  } else {
    return appearance as AppearanceOptions;
  }
}
