import { autocompletePage } from './autocomplete.page';
import { badgePage } from './badge.page';
import { breadcrumbPage } from './breadcrumb.page';
import { buttonPage } from './button.page';
import { calendarsPage } from './calendars.page';
import { cardPage } from './card.page';
import { checkboxPage } from './checkbox.page';
import { chipsPage } from './chips.page';
import { colorPickerPage } from './color-picker.page';
import { datepickerPage } from './datepicker.page';
import { dialoguePage } from './dialogue.page';
import { dropdownPage } from './dropdown.page';
import { emptyStatePage } from './empty-state.page';
import { feedPage } from './feed.page';
import { iconPage } from './icon.page';
import { inputPage } from './input.page';
import { knobPage } from './knob.page';
import { paginatorPage } from './paginator.page';
import { progressBarPage } from './progress-bar.page';
import { radioGroupPage } from './radio-group.page';
import { sideNavPage } from './side-nav.page';
import { sliderPage } from './slider.page';
import { snackbarPage } from './snackbar.page';
import { statPage } from './stat.page';
import { stepperPage } from './stepper.page';
import { tabPage } from './tab.page';
import { textareaPage } from './textarea.page';
import { togglePage } from './toggle.page';
import { treePage } from './tree.page';

import type { PageMetadata } from '../../core/models/page-metadata.model';

export const pageMetadata = {
  'autocomplete': autocompletePage,
  'badge': badgePage,
  'breadcrumb': breadcrumbPage,
  'button': buttonPage,
  'calendars': calendarsPage,
  'card': cardPage,
  'checkbox': checkboxPage,
  'chips': chipsPage,
  'color-picker': colorPickerPage,
  'datepicker': datepickerPage,
  'dialogue': dialoguePage,
  'dropdown': dropdownPage,
  'empty-state': emptyStatePage,
  'feed': feedPage,
  'icon': iconPage,
  'input': inputPage,
  'knob': knobPage,
  'paginator': paginatorPage,
  'progress-bar': progressBarPage,
  'radio-group': radioGroupPage,
  'side-nav': sideNavPage,
  'slider': sliderPage,
  'snackbar': snackbarPage,
  'stat': statPage,
  'stepper': stepperPage,
  'tab': tabPage,
  'textarea': textareaPage,
  'toggle': togglePage,
  'tree': treePage,
} satisfies Record<string, PageMetadata>;
