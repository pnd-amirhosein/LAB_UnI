import type { PageMetadata } from '../../core/models/page-metadata.model';

export const knobPage: PageMetadata = {
  title: 'Knob',
  description: `The Knob component provides a rotary-style control for adjusting a value within a defined range.

It is best suited to interfaces where continuous adjustment and an instrument-like interaction model are more appropriate than a conventional text input.`,
  badges: [
    {
      text: 'Component'
    },
    {
      text: 'Form'
    }
  ],
  componentTag: 'eui-knob',
  element: {
    componentTag: 'eui-knob'
  }
};
