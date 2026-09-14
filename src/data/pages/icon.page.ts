import type { PageMetadata } from '../../core/models/page-metadata.model';

export const iconPage: PageMetadata = {
  title: 'Icon',
  description: `The Icon component provides a consistent way to render symbolic visual elements throughout the interface.

Icons can reinforce actions, states, navigation, and meaning, but should remain accessible and avoid carrying critical information without supporting text when clarity is required.`,
  badges: [
    {
      text: 'Component'
    },
    {
      text: 'Visual'
    }
  ],
  componentTag: 'eui-icon',
  element: {
    componentTag: 'eui-icon'
  }
};
