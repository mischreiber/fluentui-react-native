import type { Theme, UseStylingOptions } from '@fluentui-react-native/framework';
import { buildProps } from '@fluentui-react-native/framework';
import { layoutStyles } from '@fluentui-react-native/tokens';
import { defaultMenuListTokens } from './MenuListTokens';
import type { MenuListProps, MenuListTokens, MenuListSlotProps } from './MenuList.types';
import { menuListName } from './MenuList.types';

export const menuListStates: (keyof MenuListTokens)[] = ['hasMaxHeight'];

export const stylingSettings: UseStylingOptions<MenuListProps, MenuListSlotProps, MenuListTokens> = {
  tokens: [defaultMenuListTokens, menuListName],
  states: menuListStates,
  slotProps: {
    root: buildProps(
      (tokens: MenuListTokens, theme: Theme) => ({
        style: {
          backgroundColor: tokens.backgroundColor,
          display: 'flex',
          ...layoutStyles.from(tokens, theme),
        },
        gap: tokens.gap,
      }),
      ['backgroundColor', 'gap', ...layoutStyles.keys],
    ),
  },
};
