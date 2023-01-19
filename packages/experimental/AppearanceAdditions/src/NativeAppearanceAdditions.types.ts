export interface IAppearanceAdditions {
  readonly horizontalSizeClass: SizeCategory;
  readonly userInterfaceLevel: UserInterfaceLevel;
}

export const HorizontalSizeClassKey = 'horizontalSizeClass';
export type SizeCategory = 'compact' | 'regular';

export const UserInterfaceLevelKey = 'userInterfaceLevel';
export type UserInterfaceLevel = 'base' | 'elevated';
