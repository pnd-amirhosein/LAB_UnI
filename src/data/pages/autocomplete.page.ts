import type { PageMetadata } from '../../core/models/page-metadata.model';

export const autocompletePage: PageMetadata = {
  title: 'Autocomplete',
  description: `The Autocomplete component combines free-form text input with a list of suggested values that can be filtered as the user types.

Use it when users benefit from guided selection without being restricted to a traditional dropdown, especially for large or searchable option sets.`,
  badges: [
    {
      text: 'Component'
    },
    {
      text: 'Form'
    }
  ],
  componentTag: 'eui-auto-complete',
  element: {
    componentTag: 'eui-auto-complete'
  }
};
