import type { PageMetadata } from '../../core/models/page-metadata.model';

export const sideNavPage: PageMetadata = {
  title: 'Side Nav',
  description: `The Side Navigation component provides persistent vertical navigation for major sections, tools, or destinations within an application.

It is particularly effective in complex products where users need stable access to multiple areas without leaving the current application context.`,
  badges: [
    {
      text: 'Component'
    },
    {
      text: 'Navigation'
    }
  ],
  componentTag: 'eui-side-nav',
  element: {
    componentTag: 'eui-side-nav'
  }
};
