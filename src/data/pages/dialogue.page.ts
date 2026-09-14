import type { PageMetadata } from '../../core/models/page-metadata.model';

export const dialoguePage: PageMetadata = {
  title: 'Dialogue',
  description: `The Dialogue component presents focused content in an overlay that temporarily sits above the main interface.

Use it for confirmations, focused tasks, important decisions, or contextual workflows that should temporarily interrupt the underlying page.`,
  badges: [
    {
      text: 'Component'
    },
    {
      text: 'Overlay'
    }
  ],
  componentTag: 'eui-dialogue',
  element: {
    componentTag: 'eui-dialogue'
  }
};
