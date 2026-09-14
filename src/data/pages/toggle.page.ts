import type { PageMetadata } from '../../core/models/page-metadata.model';

export const togglePage: PageMetadata = {
  title: 'Toggle',
  description: `The Toggle component represents an immediate switch between two opposing states, typically enabled and disabled.

Use it for settings that take effect directly and whose current state should remain visually obvious at a glance.`,
  badges: [
    {
      text: 'Component'
    },
    {
      text: 'Form'
    }
  ],
  componentTag: 'eui-toggle',
  element: {
    componentTag: 'eui-toggle'
  }
};
