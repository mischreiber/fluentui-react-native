import type { Theme } from '@fluentui-react-native/framework';
import type { TokenSettings } from '@fluentui-react-native/use-styling';
import type { SpinnerTokens } from './Spinner.types';
import { globalTokens } from '@fluentui-react-native/theme-tokens';
import { Appearance } from 'react-native';
export const defaultSpinnerTokens: TokenSettings<SpinnerTokens, Theme> = () =>
  ({
    trackColor: Appearance.getColorScheme() === 'light' ? globalTokens.color.grey56 : globalTokens.color.grey72,
    lineThickness: 'medium',
    size: 'medium',
  } as SpinnerTokens);
