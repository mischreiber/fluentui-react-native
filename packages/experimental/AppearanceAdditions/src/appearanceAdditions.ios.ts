// import { NativeEventEmitter } from 'react-native';
// import NativeFontMetrics from './NativeFontMetrics';
// import { FontMetrics, ScaleFactors } from './NativeFontMetrics.types';
import { NativeEventEmitter } from 'react-native';
import NativeAppearanceAdditions from './NativeAppearanceAdditions.ios';
import { IAppearanceAdditions, SizeCategory } from './NativeAppearanceAdditions.types';

// class FontMetricsImpl implements FontMetrics {
//   _scaleFactors: ScaleFactors;

//   constructor() {
//     if (NativeFontMetrics) {
//       this._scaleFactors = NativeFontMetrics.currentScaleFactors();
//       const eventEmitter = new NativeEventEmitter(NativeFontMetrics as any);
//       eventEmitter.addListener('onFontMetricsChanged', ({ newScaleFactors }) => {
//         this._scaleFactors = newScaleFactors;
//       });
//     } else {
//       this._scaleFactors = {};
//     }
//   }

//   get scaleFactors(): ScaleFactors {
//     return this._scaleFactors;
//   }
// }

class AppearanceAdditionsImpl implements IAppearanceAdditions {
  _horizontalSizeCategory: SizeCategory;

  get horizontalSizeCategory(): SizeCategory {
    return this._horizontalSizeCategory;
  }

  constructor() {
    // const eventEmitter = new NativeEventEmitter(NativeFontMetrics as any);
    // eventEmitter.addListener('onFontMetricsChanged', ({ newScaleFactors }) => {
    //   this._scaleFactors = newScaleFactors;
    // });
    const eventEmitter = new NativeEventEmitter(NativeAppearanceAdditions as any);
    eventEmitter.addListener('appearanceChanged', ({ newSizeClass }) => {
      this._horizontalSizeCategory = newSizeClass;
    });
  }
}

// export const fontMetrics = new FontMetricsImpl() as FontMetrics;
export const appearanceAdditions = new AppearanceAdditionsImpl() as IAppearanceAdditions;
