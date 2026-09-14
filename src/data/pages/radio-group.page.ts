import type { PageMetadata } from '../../core/models/page-metadata.model';

export const radioGroupPage: PageMetadata = {
  title: 'Radio Group',
  description: `The Radio Group component organizes mutually exclusive radio options and manages selection as a single logical control.

Use it when users must choose exactly one value from a small, visible set of alternatives.`,
  badges: [
    {
      text: 'Component'
    },
    {
      text: 'Form'
    }
  ],
  componentTag: 'eui-radio-group',
  element: {
    componentTag: 'eui-radio-group',
    children: [
      {
        componentTag: 'eui-radio'
      }
    ]
  }
};
