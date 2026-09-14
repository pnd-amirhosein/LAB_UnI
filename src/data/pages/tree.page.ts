import type { PageMetadata } from '../../core/models/page-metadata.model';

export const treePage: PageMetadata = {
  title: 'Tree',
  description: `The Tree component displays hierarchical data as nested, expandable, and collapsible nodes.

It is suitable for file structures, category hierarchies, navigation models, and other datasets where parent-child relationships are central to understanding the content.`,
  badges: [
    {
      text: 'Component'
    },
    {
      text: 'Data Display'
    }
  ],
  componentTag: 'eui-tree',
  element: {
    componentTag: 'eui-tree'
  }
};
