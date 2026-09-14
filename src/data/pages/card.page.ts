import type { PageMetadata } from '../../core/models/page-metadata.model';

export const cardPage: PageMetadata = {
  title: 'Card',
  description: `The Card component groups related content, metadata, and actions within a visually contained surface.

It is useful for presenting self-contained pieces of information in dashboards, collections, feeds, and responsive layouts.`,
  badges: [
    {
      text: 'Component'
    },
    {
      text: 'Layout'
    }
  ],
  componentTag: 'eui-card',
  element: {
    componentTag: 'eui-card'
  }
};
