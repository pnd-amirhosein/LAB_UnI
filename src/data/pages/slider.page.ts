import type { PageMetadata } from '../../core/models/page-metadata.model';

export const sliderPage: PageMetadata = {
  title: 'Slider',
  description: `The Slider component allows users to select or adjust a numeric value across a defined range.

Use it when relative position and quick visual adjustment are more important than entering an exact value directly.`,
  badges: [
    {
      text: 'Component'
    },
    {
      text: 'Form'
    }
  ],
  componentTag: 'eui-slider',
  element: {
    componentTag: 'eui-slider'
  }
};
