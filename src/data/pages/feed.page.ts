import type { PageMetadata } from '../../core/models/page-metadata.model';

export const feedPage: PageMetadata = {
  title: 'Feed',
  description: `The Feed component presents a structured sequence of content items, updates, or activity records.

Use it for chronological or continuously growing information streams where each entry follows a consistent visual and semantic pattern.`,
  badges: [
    {
      text: 'Component'
    },
    {
      text: 'Data Display'
    }
  ],
  componentTag: 'eui-feed',
  element: {
    componentTag: 'eui-feed'
  }
};
