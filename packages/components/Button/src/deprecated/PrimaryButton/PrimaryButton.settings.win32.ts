import type { IButtonType } from '../Button.types';
import type { IComposeSettings } from '@uifabricshared/foundation-compose';

export const settings: IComposeSettings<IButtonType> = [
  {
    tokens: {
      backgroundColor: 'primaryButtonBackground',
      color: 'primaryButtonText',
      borderColor: 'primaryButtonBorder',
    },
    // TODO - #728: neutralForegroundOnBrand is not working for icon color.
    endIcon: {
      color: '#ffffff',
    },
    startIcon: {
      color: '#ffffff',
    },
    _overrides: {
      disabled: {
        tokens: {
          backgroundColor: 'primaryButtonBackgroundDisabled',
          color: 'primaryButtonTextDisabled',
          borderColor: 'primaryButtonBackgroundDisabled',
        },
      },
      hovered: {
        tokens: {
          backgroundColor: 'primaryButtonBackgroundHovered',
          color: 'primaryButtonTextHovered',
          borderColor: 'primaryButtonBorderHovered',
        },
      },
      pressed: {
        tokens: {
          backgroundColor: 'primaryButtonBackgroundPressed',
          color: 'primaryButtonTextPressed',
          borderColor: 'primaryButtonBorderPressed',
        },
      },
      focused: {
        tokens: {
          borderColor: 'primaryButtonBorderFocused',
          backgroundColor: 'primaryButtonBackgroundHovered',
          color: 'primaryButtonTextHovered',
        },
      },
    },
  },
  'PrimaryButton',
];
