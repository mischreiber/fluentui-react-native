import { useMemo } from 'react';
import { NativeEventEmitter } from 'react-native';
import { useSubscription } from 'use-subscription';
import { appearanceAdditions } from './appearanceAdditions';
// import { fontMetrics } from './fontMetrics';
// import NativeFontMetrics from './NativeFontMetrics';
// import { ScaleFactors } from './NativeFontMetrics.types';

import NativeAppearanceAdditions from './NativeAppearanceAdditions';
import { SizeCategory } from './NativeAppearanceAdditions.types';

// const eventEmitter = NativeFontMetrics ? new NativeEventEmitter(NativeFontMetrics as any) : undefined;
const eventEmitter = NativeAppearanceAdditions ? new NativeEventEmitter(NativeAppearanceAdditions as any) : undefined;

// export function useFontMetricsScaleFactors(): ScaleFactors {
//   if (!eventEmitter) {
//     return {};
//   }

//   const subscription = useMemo(
//     () => ({
//       getCurrentValue: () => fontMetrics.scaleFactors,
//       subscribe: (callback) => {
//         const appearanceSubscription = eventEmitter.addListener('onFontMetricsChanged', callback);
//         return () => {
//           appearanceSubscription.remove();
//         };
//       },
//     }),
//     [],
//   );

//   return useSubscription(subscription);
// }

export function getHorizontalSizeCategory(): SizeCategory {
  if (!eventEmitter) {
    return 'regular';
  }

  const subscription = useMemo(
    () => ({
      getCurrentValue: () => appearanceAdditions.horizontalSizeCategory,
      subscribe: (callback) => {
        const appearanceSubscription = eventEmitter.addListener('appearanceChanged', callback);
        return () => {
          appearanceSubscription.remove();
        };
      },
    }),
    [],
  );

  return useSubscription(subscription);
}
