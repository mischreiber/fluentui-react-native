import { styleFunction } from '@uifabricshared/foundation-tokens';
import type { TextProps } from 'react-native';
import type { IPersonaCoinTokens } from './PersonaCoin.types';
import type { Theme } from '@fluentui-react-native/framework';
import { calculateEffectiveSizes } from './PersonaCoin.helpers';

const _initialsKeyProps: (keyof IPersonaCoinTokens)[] = ['coinSize', 'initialsSize', 'size'];

function _buildInitialsStyles(tokenProps: IPersonaCoinTokens /*, theme: ITheme */): TextProps {
  const { initialsSize } = calculateEffectiveSizes(tokenProps);

  return {
    style: {
      fontSize: initialsSize,
    },
  };
}

export const buildInitialsStyles = styleFunction<TextProps, IPersonaCoinTokens, Theme>(_buildInitialsStyles, _initialsKeyProps);
