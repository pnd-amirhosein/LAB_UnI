import type { PageMetadata } from '../../core/models/page-metadata.model';

export const emptyStatePage: PageMetadata = {
  title: 'Empty State',
  description: `The Empty State component communicates that a view currently contains no data, results, or configured content.

A good empty state should explain the situation clearly and, when appropriate, guide the user toward the next useful action.`,
  badges: [
    {
      text: 'Component'
    },
    {
      text: 'Feedback'
    }
  ],
  componentTag: 'eui-empty-state',
  element: {
    componentTag: 'eui-empty-state'
  }
};
