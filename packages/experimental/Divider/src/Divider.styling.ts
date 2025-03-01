import { useMemo } from 'react';
import type { ViewProps, ColorValue } from 'react-native';
import { Platform } from 'react-native';
import type { Theme } from '@fluentui-react-native/framework';
import type { IconPropsV1 as IconProps } from '@fluentui-react-native/icon';
import type { TextProps } from '@fluentui-react-native/text';
import type { DividerTokens, DividerProps, DividerAppearance } from './Divider.types';

const isMobile = Platform.OS === 'android' || Platform.OS === 'ios';

const getIconProps = (contentColor: ColorValue, icon: IconProps): IconProps => {
  if (icon.fontSource) {
    return {
      fontSource: {
        ...icon.fontSource,
        color: contentColor,
      },
    };
  } else if (icon.svgSource) {
    return {
      svgSource: {
        ...icon.svgSource,
        color: contentColor,
      },
    };
  } else {
    throw new Error('IconProps require either a fontSource or svgSource; neither has been passed.');
  }
};

export const useDividerSlotProps = (props: DividerProps, tokens: DividerTokens) => {
  const rootProps: ViewProps = useMemo(
    () => ({
      style: {
        alignItems: 'center',
        justifyContent: 'center',
        display: 'flex',
        minWidth: tokens.minWidth,
        maxWidth: tokens.maxWidth,
        minHeight: tokens.minHeight,
        maxHeight: tokens.maxHeight,
        padding: tokens.padding,
        paddingStart: tokens.paddingStart,
        paddingEnd: tokens.paddingEnd,
        paddingHorizontal: tokens.paddingHorizontal,
        paddingVertical: tokens.paddingVertical,
        ...(props.vertical
          ? {
              flexDirection: 'column',
              paddingVertical: props.insetSize,
              height: '100%',
            }
          : {
              flexDirection: 'row',
              ...(isMobile ? { paddingStart: props.insetSize } : { paddingHorizontal: props.insetSize }), // insetSize on iOS and Android is on start only.
            }),
      },
    }),
    [
      props.vertical,
      props.insetSize,
      tokens.minHeight,
      tokens.maxHeight,
      tokens.minWidth,
      tokens.maxWidth,
      tokens.padding,
      tokens.paddingHorizontal,
      tokens.paddingVertical,
      tokens.paddingStart,
      tokens.paddingEnd,
    ],
  );

  const beforeLineProps: ViewProps = useMemo(
    () => ({
      style: {
        flexBasis: tokens.minLineSize,
        flex: tokens.flexBefore,
        borderColor: tokens.lineColor,
        borderStyle: 'solid',
        ...(props.vertical
          ? { borderLeftWidth: tokens.thickness, minHeight: tokens.minLineSize }
          : { borderTopWidth: tokens.thickness, minWidth: tokens.minLineSize }),
      },
    }),
    [tokens.flexBefore, tokens.lineColor, tokens.minLineSize, tokens.thickness, props.vertical],
  );

  const afterLineProps: ViewProps = useMemo(
    () => ({
      style: {
        flexBasis: tokens.minLineSize,
        flex: tokens.flexAfter,
        borderColor: tokens.lineColor,
        borderStyle: 'solid',
        ...(props.vertical
          ? { borderLeftWidth: tokens.thickness, minHeight: tokens.minLineSize }
          : { borderTopWidth: tokens.thickness, minWidth: tokens.minLineSize }),
      },
    }),
    [tokens.flexAfter, tokens.lineColor, tokens.minLineSize, tokens.thickness, props.vertical],
  );

  const wrapperProps: ViewProps = useMemo(
    () => ({
      style: {
        flex: 0,
        ...(props.vertical ? { paddingVertical: tokens.contentPadding } : { paddingHorizontal: tokens.contentPadding }),
      },
    }),
    [tokens.contentPadding, props.vertical],
  );

  const textProps: TextProps = useMemo(
    () => ({
      style: {
        color: tokens.contentColor,
        textAlign: 'center',
      },
    }),
    [tokens.contentColor],
  );

  const iconProps: IconProps = useMemo(
    () => (props.icon ? getIconProps(tokens.contentColor, props.icon) : {}),
    [props.icon, tokens.contentColor],
  );

  return { rootProps, beforeLineProps, afterLineProps, wrapperProps, textProps, iconProps };
};

/**
 * Helper function to set color tokens on divider. If no color tokens are passed in, then the appearance prop will be used to provide colors
 * for the line and content
 */
export const colorsFromAppearance = (
  appearance: DividerAppearance,
  tokens: DividerTokens,
  theme: Theme,
): Pick<DividerTokens, 'contentColor' | 'lineColor'> => {
  switch (appearance) {
    case 'default':
      return {
        contentColor: tokens.contentColor ?? theme.colors.neutralForeground2,
        lineColor: tokens.lineColor ?? theme.colors.neutralStroke2,
      };
    case 'subtle':
      return {
        contentColor: tokens.contentColor ?? theme.colors.neutralForeground3,
        lineColor: tokens.lineColor ?? theme.colors.neutralStroke3,
      };
    case 'brand':
      return {
        contentColor: tokens.contentColor ?? theme.colors.brandForeground1,
        lineColor: tokens.lineColor ?? theme.colors.brandStroke1,
      };
    case 'strong': {
      return {
        contentColor: tokens.contentColor ?? theme.colors.neutralForeground1,
        lineColor: tokens.lineColor ?? theme.colors.neutralStroke1,
      };
    }
  }
};
