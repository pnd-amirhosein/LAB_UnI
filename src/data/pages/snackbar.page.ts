import type { PageMetadata } from '../../core/models/page-metadata.model';

export const snackbarPage: PageMetadata = {
  title: 'Snackbar',
  description: `The Snackbar component displays brief, temporary feedback in response to user actions or system events.

It is intended for lightweight notifications that do not require a blocking interruption and may optionally expose a short follow-up action.`,
  badges: [
    {
      text: 'Component'
    },
    {
      text: 'Feedback'
    }
  ],
  componentTag: 'eui-snackbar',
  element: {
    componentTag: 'eui-snackbar'
  }
};
