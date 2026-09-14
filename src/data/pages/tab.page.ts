import type { PageMetadata } from '../../core/models/page-metadata.model';

export const tabPage: PageMetadata = {
  title: 'Tab',
  description: `The Tab component organizes related content into multiple switchable views that share the same page context.

Use tabs when users need to move quickly between peer sections without navigating to an entirely different destination.`,
  badges: [
    {
      text: 'Component'
    },
    {
      text: 'Navigation'
    }
  ],
  componentTag: 'eui-tab',
  element: {
    componentTag: 'eui-tab'
  }
};
