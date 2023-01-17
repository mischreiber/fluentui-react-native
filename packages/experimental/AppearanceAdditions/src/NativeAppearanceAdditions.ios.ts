import { NativeModules } from 'react-native';
// import { ScaleFactors, TextStyle } from './NativeFontMetrics.types';

// export const NativeFontMetrics = NativeModules.FRNFontMetrics;
export const NativeAppearanceAdditions = NativeModules.FRNAppearanceAdditions;

// interface NativeFontMetricsInterface {
//   currentScaleFactors(): ScaleFactors;
//   scaleFactorForStyle(style: TextStyle): number;
// }

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface NativeAppearanceAdditionsInterface {}

// export default NativeFontMetrics as NativeFontMetricsInterface;
export default NativeAppearanceAdditions as NativeAppearanceAdditionsInterface;
