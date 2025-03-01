import type { ViewProps, ColorValue } from 'react-native';
import type { IconPropsV1 as IconProps } from '@fluentui-react-native/icon';
import type { LayoutTokens } from '@fluentui-react-native/tokens';
import type { TextProps } from '@fluentui-react-native/text';

export const dividerName = 'Divider';

export const DividerInsetSizes = [0, 16, 56, 68, 72, 108] as const;
export type DividerInsetSize = (typeof DividerInsetSizes)[number];
export type DividerAlignment = 'start' | 'center' | 'end';
export type DividerAppearance = 'default' | 'subtle' | 'brand' | 'strong';

export interface DividerProps {
  /**
   * If a text or icon is passed, this dictates where content appears in the divider: at the start, centered, or towards the end.
   * @default 'center'
   * Note: This prop is not supported on mobile platforms(Android & iOS).
   */
  alignContent?: DividerAlignment;
  /**
   * If no color is passed, the divider and its content are colored using different theme tokens depending on the value of this prop.
   * @default 'default'
   * Note: This prop is not supported on mobile platforms(Android & iOS).
   */
  appearance?: DividerAppearance;
  /**
   * Pass an icon source to render an icon as content in the divider. Mutually exclusive with passing text as a child.
   * Note: This prop is not supported on mobile platforms(Android & iOS).
   */
  icon?: IconProps;
  /**
   * The size of the Divider inset - the margin before the start and after the end of the divider.
   * @default 0
   * Note : For mobile platforms, the insetSize prop is only applied to start of the component.
   */
  insetSize?: DividerInsetSize;
  /**
   * Whether the divider is rendered as a horizontal line or a vertical line.
   * @default false
   * Note: This prop is not supported on mobile platforms(Android & iOS).
   */
  vertical?: boolean;
}

export interface DividerTokens extends LayoutTokens {
  /**
   * The color of the content passed into the divider. This is overriden if the `color` prop is set.
   */
  contentColor?: ColorValue;
  /**
   * The padding of divider content between the start and end lines.
   * @default 12
   */
  contentPadding?: string | number;
  /**
   * The flex value of the line after content, set to 0 if `alignContent` = `end`.
   * @default 1
   */
  flexAfter?: number;
  /**
   * The flex value of the line before content, set to 0 if `alignContent` = `start`.
   * @default 1
   */
  flexBefore?: number;
  /**
   * Color of the divider lines. This is overriden if the `color` prop is set.
   */
  lineColor?: ColorValue;
  /**
   * The minimum size of a line shrunken by a non-centered divider.
   * @default 8
   */
  minLineSize?: number;
  /**
   * The thickness of the Divider lines
   * @default 1
   */
  thickness?: number;
}

export interface DividerSlotProps {
  root: ViewProps;
  beforeLine: ViewProps;
  afterLine: ViewProps;
  wrapper: ViewProps;
  text: TextProps;
  icon: IconProps;
}

export interface DividerType {
  props: DividerProps;
  tokens: DividerTokens;
  slotProps: DividerSlotProps;
}
