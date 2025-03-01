import type { Theme } from '@fluentui-react-native/framework';
import type { TokenSettings } from '@fluentui-react-native/use-styling';
import type { ButtonTokens } from './Button.types';

export const defaultButtonColorTokens: TokenSettings<ButtonTokens, Theme> = (t: Theme) =>
  ({
    backgroundColor: t.colors.neutralBackground1,
    color: t.colors.neutralForeground1,
    borderColor: t.colors.neutralStroke1,
    iconColor: t.colors.neutralForeground1,
    disabled: {
      backgroundColor: t.colors.neutralBackgroundDisabled,
      color: t.colors.neutralForegroundDisabled,
      borderColor: t.colors.neutralStrokeDisabled,
      iconColor: t.colors.neutralForegroundDisabled,
    },
    hovered: {
      backgroundColor: t.colors.neutralBackground1Hover,
      color: t.colors.neutralForeground1Hover,
      borderColor: t.colors.neutralStroke1,
      iconColor: t.colors.neutralForeground1Hover,
    },
    pressed: {
      backgroundColor: t.colors.neutralBackground1Pressed,
      color: t.colors.neutralForeground1Pressed,
      borderColor: t.colors.neutralStroke1,
      iconColor: t.colors.neutralForeground1Pressed,
    },
    focused: {
      backgroundColor: t.colors.neutralBackground1Hover,
      color: t.colors.neutralForeground1Hover,
      borderColor: t.colors.transparentStroke,
      iconColor: t.colors.neutralForeground1Hover,
    },
    primary: {
      backgroundColor: t.colors.brandBackground,
      color: t.colors.neutralForegroundOnBrand,
      borderColor: t.colors.brandStroke1,
      iconColor: t.colors.neutralForegroundOnBrand,
      disabled: {
        backgroundColor: t.colors.neutralBackgroundDisabled,
        color: t.colors.neutralForegroundDisabled,
        borderColor: t.colors.neutralStrokeDisabled,
        iconColor: t.colors.neutralForegroundDisabled,
      },
      hovered: {
        backgroundColor: t.colors.brandBackgroundHover,
        color: t.colors.neutralForegroundOnBrandHover,
        borderColor: t.colors.brandBackgroundHover,
        iconColor: t.colors.neutralForegroundOnBrandHover,
      },
      pressed: {
        backgroundColor: t.colors.brandBackgroundPressed,
        color: t.colors.neutralForegroundOnBrandPressed,
        borderColor: t.colors.brandBackgroundPressed,
        iconColor: t.colors.neutralForegroundOnBrandPressed,
      },
      focused: {
        backgroundColor: t.colors.brandBackgroundHover,
        color: t.colors.neutralForegroundOnBrandHover,
        borderColor: t.colors.transparentStroke,
        iconColor: t.colors.neutralForegroundOnBrandHover,
      },
    },
    subtle: {
      backgroundColor: t.colors.subtleBackground,
      color: t.colors.neutralForeground1,
      borderColor: t.colors.transparentStroke,
      iconColor: t.colors.neutralForeground2,
      disabled: {
        backgroundColor: t.colors.subtleBackground,
        color: t.colors.neutralForegroundDisabled,
        borderColor: t.colors.transparentStroke,
        iconColor: t.colors.neutralForegroundDisabled,
      },
      hovered: {
        backgroundColor: t.colors.subtleBackgroundHover,
        color: t.colors.neutralForeground1Hover,
        borderColor: t.colors.subtleBackgroundHover,
        iconColor: t.colors.neutralForeground2BrandHover,
      },
      pressed: {
        backgroundColor: t.colors.subtleBackgroundPressed,
        color: t.colors.neutralForeground1Pressed,
        borderColor: t.colors.subtleBackgroundPressed,
        iconColor: t.colors.neutralForeground2BrandPressed,
      },
      focused: {
        backgroundColor: t.colors.subtleBackgroundHover,
        color: t.colors.neutralForeground1Hover,
        borderColor: t.colors.transparentStroke,
        iconColor: t.colors.neutralForeground1Hover,
      },
    },
  } as ButtonTokens);
