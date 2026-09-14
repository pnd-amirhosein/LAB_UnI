import type { PageMetadata } from '../../core/models/page-metadata.model';

export const paginatorPage: PageMetadata = {
  title: 'Paginator',
  description: `The Paginator component provides navigation controls for moving through content that has been divided into discrete pages.

Use it for tables, result sets, feeds, or large collections where loading or displaying all items at once would reduce usability or performance.`,
  badges: [
    {
      text: 'Component'
    },
    {
      text: 'Navigation'
    }
  ],
  componentTag: 'eui-paginator',
  element: {
    componentTag: 'eui-paginator'
  }
};
