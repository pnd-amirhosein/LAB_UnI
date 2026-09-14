import type { PageMetadata } from '../../core/models/page-metadata.model';

export const datepickerPage: PageMetadata = {
  title: 'Datepicker',
  description: `The Datepicker component combines a date input workflow with calendar-based selection.

It helps users choose valid dates efficiently while preserving a compact form control footprint for common scheduling and data-entry scenarios.`,
  badges: [
    {
      text: 'Component'
    },
    {
      text: 'Date & Time'
    }
  ],
  componentTag: 'eui-datepicker',
  element: {
    componentTag: 'eui-datepicker'
  }
};
