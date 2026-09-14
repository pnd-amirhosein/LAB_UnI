import type { PageMetadata } from '../../core/models/page-metadata.model';

export const checkboxPage: PageMetadata = {
  title: 'Checkbox',
  description: `The Checkbox component allows users to independently enable or disable one or more options.

Use it for non-exclusive selections, boolean preferences, consent states, and form controls where multiple values may be selected at the same time.`,
  badges: [
    {
      text: 'Component'
    },
    {
      text: 'Form'
    }
  ],
  componentTag: 'eui-checkbox',
  element: {
    componentTag: 'eui-checkbox'
  }
};
