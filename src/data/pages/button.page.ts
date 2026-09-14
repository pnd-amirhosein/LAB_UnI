import type { PageMetadata } from '../../core/models/page-metadata.model';

export const buttonPage: PageMetadata = {
  title: 'Button',
  description: `The Button component represents a primary interactive action and is designed for commands, form submission, confirmations, and other user-triggered operations.

Its variants, sizes, and visual modes allow the same interaction pattern to adapt to different levels of emphasis and context.`,
  badges: [
    {
      text: 'Component'
    },
    {
      text: 'Action'
    }
  ],
  componentTag: 'eui-button',
  element: {
    componentTag: 'eui-button'
  }
};
