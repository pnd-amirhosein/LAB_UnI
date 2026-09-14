import type { PageMetadata } from '../../core/models/page-metadata.model';

export const statPage: PageMetadata = {
  title: 'Stat',
  description: `The Stat component highlights a key metric, value, or summarized measurement in a compact format.

Use it in dashboards and overview surfaces where important numerical information needs stronger visual prominence than surrounding content.`,
  badges: [
    {
      text: 'Component'
    },
    {
      text: 'Data Display'
    }
  ],
  componentTag: 'eui-stat',
  element: {
    componentTag: 'eui-stat'
  }
};
