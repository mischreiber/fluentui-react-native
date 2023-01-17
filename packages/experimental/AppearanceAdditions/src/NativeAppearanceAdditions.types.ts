// export interface FontMetrics {
//   readonly scaleFactors: ScaleFactors;
// }

export interface IAppearanceAdditions {
  readonly horizontalSizeCategory: SizeCategory;
}

// export type ScaleFactors = { [K in TextStyle]?: number };

// export type TextStyle =
//   | 'caption2'
//   | 'caption1'
//   | 'footnote'
//   | 'subheadline'
//   | 'callout'
//   | 'body'
//   | 'headline'
//   | 'title3'
//   | 'title2'
//   | 'title1'
//   | 'largeTitle';

export type SizeCategory = 'compact' | 'regular';
