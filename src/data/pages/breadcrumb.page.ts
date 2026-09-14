import type { PageMetadata } from '../../core/models/page-metadata.model';

export const breadcrumbPage: PageMetadata = {
  title: 'Breadcrumb',
  description: `The Breadcrumb component communicates the current page's position within a hierarchical navigation structure.

Use it to provide orientation and a clear path back through parent sections when content is organized across multiple levels.`,
  badges: [
    {
      text: 'Component'
    },
    {
      text: 'Navigation'
    }
  ],
  componentTag: 'eui-breadcrumb',
  element: {
    componentTag: 'eui-breadcrumb'
  }
};
