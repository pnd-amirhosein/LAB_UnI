import type { PageMetadata } from '../../core/models/page-metadata.model';

export const progressBarPage: PageMetadata = {
  title: 'Progress Bar',
  description: `The Progress Bar component visualizes the completion state of an ongoing task or process.

It can communicate determinate progress when a measurable value is available and provide clear feedback during longer-running operations.`,
  badges: [
    {
      text: 'Component'
    },
    {
      text: 'Feedback'
    }
  ],
  componentTag: 'eui-progress-bar',
  element: {
    componentTag: 'eui-progress-bar'
  }
};
