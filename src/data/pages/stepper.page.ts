import type { PageMetadata } from '../../core/models/page-metadata.model';

export const stepperPage: PageMetadata = {
  title: 'Stepper',
  description: `The Stepper component represents progress through a sequence of ordered stages or tasks.

It is useful for onboarding, forms, checkout flows, and other multi-step processes where users need to understand both their current position and the remaining stages.`,
  badges: [
    {
      text: 'Component'
    },
    {
      text: 'Navigation'
    }
  ],
  componentTag: 'eui-stepper',
  element: {
    componentTag: 'eui-stepper'
  }
};
