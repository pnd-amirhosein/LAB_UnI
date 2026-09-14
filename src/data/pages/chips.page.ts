import type { PageMetadata } from '../../core/models/page-metadata.model';

export const chipsPage: PageMetadata = {
  title: 'Chips',
  description: `The Chips component displays compact values that can represent tags, filters, selections, entities, or short pieces of metadata.

Depending on configuration, chips can be purely informational or support interactive behaviors such as selection and removal.`,
  badges: [
    {
      text: 'Component'
    },
    {
      text: 'Data Display'
    }
  ],
  componentTag: 'eui-chips',
  element: {
    componentTag: 'eui-chips'
  }
};
