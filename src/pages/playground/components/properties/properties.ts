import {
  Component,
  DestroyRef,
  inject
} from '@angular/core';

import {
  FormControl,
  FormRecord,
  ReactiveFormsModule
} from '@angular/forms';

import {
  map,
  Observable
} from 'rxjs';

import {
  takeUntilDestroyed
} from '@angular/core/rxjs-interop';

import type {
  ManifestProp
} from 'ensemble-ui/metadata';

import {
  PageRegistryService
} from '../../../../core/services/page-registry.service';


type PropertyControlType =
  | 'text'
  | 'select'
  | 'radio';


interface PropertyOption {
  label: string;
  value: unknown;
}


interface PropertyField {
  prop: ManifestProp;
  controlType: PropertyControlType;
  options: PropertyOption[];
}


@Component({
  selector: 'eui-properties',
  templateUrl: './properties.html',
  styleUrls: ['./properties.scss'],
  imports: [
    ReactiveFormsModule
  ]
})
export class PropertiesComponent {

  private readonly destroyRef = inject(DestroyRef);

  readonly props$: Observable<ManifestProp[]>;

  readonly form =
    new FormRecord<FormControl<unknown | null>>({});

  fields: PropertyField[] = [];


  constructor(
    private readonly pageService: PageRegistryService
  ) {

    this.props$ = this.pageService.currentPage$.pipe(
      map(page => page?.manifest.props ?? [])
    );

    this.props$
      .pipe(
        takeUntilDestroyed(this.destroyRef)
      )
      .subscribe(props => {
        this.buildForm(props);
      });
  }


  private buildForm(
    props: ManifestProp[]
  ): void {

    /*
     * Clear controls from the previous component.
     *
     * Example:
     * button -> input
     */
    for (const name of Object.keys(this.form.controls)) {
      this.form.removeControl(name);
    }

    this.fields = props.map(prop => {

      const field = this.createField(prop);

      this.form.addControl(
        prop.name,
        new FormControl<unknown | null>(
          this.parseDefaultValue(prop)
        )
      );

      return field;
    });
  }


  private createField(
    prop: ManifestProp
  ): PropertyField {

    const options =
      this.extractOptions(prop);

    /*
     * boolean
     *
     * true / false
     */
    if (prop.type.normalized === 'boolean') {

      return {
        prop,
        controlType: 'radio',
        options: [
          {
            label: 'True',
            value: true
          },
          {
            label: 'False',
            value: false
          }
        ]
      };
    }


    /*
     * Union
     *
     * 'light' | 'dark'
     *       ↓
     *     radio
     *
     * 'sm' | 'md' | 'lg'
     *       ↓
     *     select
     */
    if (prop.type.normalized === 'union') {

      return {
        prop,
        controlType:
          options.length === 2
            ? 'radio'
            : 'select',

        options
      };
    }


    /*
     * Array
     *
     * If the manifest gives us enumerable literal values,
     * it can become a select.
     *
     * Otherwise we cannot know the legal choices,
     * so fall back to text for now.
     */
    if (prop.type.normalized === 'array') {

      return {
        prop,
        controlType:
          options.length
            ? 'select'
            : 'text',

        options
      };
    }


    /*
     * string
     * number
     * object
     * custom
     * unknown
     * etc.
     */
    return {
      prop,
      controlType: 'text',
      options: []
    };
  }


  private extractOptions(
    prop: ManifestProp
  ): PropertyOption[] {

    const raw = prop.type.raw;

    if (!raw.includes('|')) {
      return [];
    }

    return raw
      .split('|')
      .map(value => value.trim())
      .map(value => {

        const parsed =
          this.parseLiteral(value);

        return {
          label: String(parsed),
          value: parsed
        };
      });
  }


  private parseDefaultValue(
    prop: ManifestProp
  ): unknown {

    if (prop.defaultValue === undefined) {
      return '';
    }

    return this.parseLiteral(
      prop.defaultValue
    );
  }


  private parseLiteral(
    value: string
  ): unknown {

    const trimmed = value.trim();

    /*
     * Strings
     */
    if (
      (trimmed.startsWith("'") &&
        trimmed.endsWith("'")) ||

      (trimmed.startsWith('"') &&
        trimmed.endsWith('"'))
    ) {
      return trimmed.slice(1, -1);
    }


    /*
     * Boolean
     */
    if (trimmed === 'true') {
      return true;
    }

    if (trimmed === 'false') {
      return false;
    }


    /*
     * null
     */
    if (trimmed === 'null') {
      return null;
    }


    /*
     * Number
     */
    const numberValue =
      Number(trimmed);

    if (
      trimmed !== '' &&
      !Number.isNaN(numberValue)
    ) {
      return numberValue;
    }


    /*
     * Anything we don't understand yet
     */
    return trimmed;
  }
}