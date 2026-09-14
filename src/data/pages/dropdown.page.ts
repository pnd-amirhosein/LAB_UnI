import type { PageMetadata } from '../../core/models/page-metadata.model';

export const dropdownPage: PageMetadata = {
  title: 'Dropdown',
  description: `The Dropdown component exposes a list of available choices from a compact trigger or field.

It is suitable for selecting from predefined values while keeping the interface space-efficient and the available options discoverable on demand.`,
  badges: [
    {
      text: 'Component'
    },
    {
      text: 'Form'
    }
  ],
  componentTag: 'eui-dropdown',
  element: {
    componentTag: 'eui-dropdown'
  }
};
