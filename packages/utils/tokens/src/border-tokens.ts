import type { ViewStyle, ColorValue } from 'react-native';
import type { OperationSet } from './token.types';
import type { Theme } from '@fluentui-react-native/theme-types';
import { getPaletteFromTheme } from './color-tokens';
import { tokenBuilder } from './tokenBuilder';

export interface IBorderTokens {
  borderColor?: ColorValue;
  borderWidth?: number;
  borderRadius?: number;
  borderStyle?: ViewStyle['borderStyle'];
}

export const borderTokens: OperationSet<IBorderTokens, Theme> = [
  { source: 'borderColor', lookup: getPaletteFromTheme },
  { source: 'borderWidth' },
  { source: 'borderRadius' },
  { source: 'borderStyle' },
];

export const borderStyles = tokenBuilder<IBorderTokens>('borderColor', 'borderRadius', 'borderStyle', 'borderWidth');
