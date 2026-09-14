import type { PageMetadata } from '../../core/models/page-metadata.model';

export const textareaPage: PageMetadata = {
  title: 'Textarea',
  description: `The Textarea component collects multi-line text and is intended for longer free-form input than a standard single-line field.

Use it for comments, descriptions, notes, messages, and other content where users need additional space to write and review their input.`,
  badges: [
    {
      text: 'Component'
    },
    {
      text: 'Form'
    }
  ],
  componentTag: 'eui-textarea',
  element: {
    componentTag: 'eui-textarea'
  }
};
