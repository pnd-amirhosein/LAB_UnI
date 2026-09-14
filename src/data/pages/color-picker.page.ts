import type { PageMetadata } from '../../core/models/page-metadata.model';

export const colorPickerPage: PageMetadata = {
  title: 'Color Picker',
  description: `The Color Picker component provides an interface for selecting and editing color values.

Use it in design, theming, personalization, and configuration workflows where users need direct control over a color rather than choosing from a small fixed set.`,
  badges: [
    {
      text: 'Component'
    },
    {
      text: 'Form'
    }
  ],
  componentTag: 'eui-color-picker',
  element: {
    componentTag: 'eui-color-picker'
  }
};
