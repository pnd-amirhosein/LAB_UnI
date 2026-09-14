import type { PageMetadata } from '../../core/models/page-metadata.model';

export const inputPage: PageMetadata = {
  title: 'Input',
  description: `The Input component collects a single-line value from the user and serves as a foundational control for form-based data entry.

It can be used for text, numeric values, identifiers, search terms, and other concise user-provided content depending on its configuration.`,
  badges: [
    {
      text: 'Component'
    },
    {
      text: 'Form'
    }
  ],
  componentTag: 'eui-input',
  element: {
    componentTag: 'eui-input'
  }
};
