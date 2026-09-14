import type { PageMetadata } from '../../core/models/page-metadata.model';

export const badgePage: PageMetadata = {
  title: 'Badge',
  description: `The Badge component presents short, compact pieces of contextual information such as status, classification, counts, or labels.

It is intended for lightweight emphasis and should complement surrounding content rather than replace primary text or actions.`,
  badges: [
    {
      text: 'Component'
    },
    {
      text: 'Data Display'
    }
  ],
  componentTag: 'eui-badge',
  element: {
    componentTag: 'eui-badge'
  }
};
