// import { TextStyle } from './NativeFontMetrics.types';

import { SizeCategory } from './NativeAppearanceAdditions.types';

// const NativeFontMetrics = {
//   // eslint-disable-next-line @typescript-eslint/no-empty-function
//   addListener: (_: string) => {},
//   // eslint-disable-next-line @typescript-eslint/no-empty-function
//   removeListeners: (_: number) => {},
//   currentScaleFactors: () => {
//     console.warn('NativeFontMetrics is only available on iOS');
//     return {};
//   },
//   scaleFactorForStyle: (_: TextStyle) => {
//     console.warn('NativeFontMetrics is only available on iOS');
//     return 1;
//   },
// };

export const NativeAppearanceAdditions = {
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  addListener: (_: string) => {},
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  removeListeners: (_: number) => {},
  horizontalSizeCategory: () => {
    console.warn('NativeAppearanceAdditions is only available on iOS');
    return 'regular' as SizeCategory;
  },
};

// export default NativeFontMetrics;
export default NativeAppearanceAdditions;
