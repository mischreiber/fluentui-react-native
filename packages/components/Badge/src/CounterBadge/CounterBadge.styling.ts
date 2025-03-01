import type { CounterBadgeTokens, CounterBadgeProps, CounterBadgeSlotProps } from './CounterBadge.types';
import { counterBadgeName } from './CounterBadge.types';
import type { UseStylingOptions, Theme } from '@fluentui-react-native/framework';
import { buildProps } from '@fluentui-react-native/framework';
import { borderStyles } from '@fluentui-react-native/tokens';
import { defaultBadgeTokens } from '../BadgeTokens';
import { defaultBadgeColorTokens } from '../BadgeColorTokens';
import { badgeStates, getBadgePosition } from '../Badge.styling';
import { counterBadgeTokens } from './CounterBadgeTokens';

export const counterBadgeStates: (keyof CounterBadgeTokens)[] = [...badgeStates, 'dot'];
const tokensThatAreAlsoProps: (keyof CounterBadgeTokens)[] = ['shadowToken'];

export const stylingSettings: UseStylingOptions<CounterBadgeProps, CounterBadgeSlotProps, CounterBadgeTokens> = {
  tokens: [defaultBadgeTokens, defaultBadgeColorTokens, counterBadgeName, counterBadgeTokens],
  states: counterBadgeStates,
  tokensThatAreAlsoProps,
  slotProps: {
    root: buildProps(
      (tokens: CounterBadgeTokens, theme: Theme) => ({
        style: {
          ...getBadgePosition(tokens),
          alignItems: 'center',
          flexDirection: 'row',
          alignSelf: 'flex-start',
          justifyContent: 'center',
          minHeight: tokens.minHeight,
          width: tokens.width,
          paddingHorizontal: tokens.paddingHorizontal,
          backgroundColor: tokens.backgroundColor,
          ...borderStyles.from(tokens, theme),
        },
      }),
      ['backgroundColor', 'width', 'minHeight', 'paddingHorizontal', 'bottom', 'right', 'top', 'left', ...borderStyles.keys],
    ),
    icon: buildProps(
      (tokens: CounterBadgeTokens) => ({
        color: tokens.iconColor || tokens.color,
        height: tokens.iconSize,
        width: tokens.iconSize,
      }),
      ['iconSize', 'iconColor', 'color'],
    ),
    text: buildProps(
      (tokens: CounterBadgeTokens) => ({
        variant: tokens.variant,
        color: tokens.color,
      }),
      ['variant', 'color'],
    ),
    shadow: buildProps(
      (tokens: CounterBadgeTokens) => ({
        shadowToken: tokens.shadowToken,
      }),
      ['shadowToken'],
    ),
  },
};
