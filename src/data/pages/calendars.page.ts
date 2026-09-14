import type { PageMetadata } from '../../core/models/page-metadata.model';

export const calendarsPage: PageMetadata = {
  title: 'Calendars',
  description: `The Calendar component presents dates in a structured calendar view and supports date-oriented selection and navigation.

Use it as the visual foundation for scheduling, browsing dates, or building richer date and time workflows.`,
  badges: [
    {
      text: 'Component'
    },
    {
      text: 'Date & Time'
    }
  ],
  componentTag: 'eui-calendar',
  element: {
    componentTag: 'eui-calendar'
  }
};
