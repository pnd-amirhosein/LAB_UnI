import { Component } from '@angular/core';
import { AsyncPipe } from '@angular/common';

import { map } from 'rxjs';

import { PageRegistryService } from '../../../../core/services/page-registry.service';

@Component({
    selector: 'eui-properties',
    templateUrl: './properties.html',
    styleUrls: ['./properties.scss'],
    imports: [AsyncPipe]
})
export class PropertiesComponent {

    readonly props$;

    constructor(
        private readonly pageService: PageRegistryService
    ) {
        this.props$ = this.pageService.currentPage$.pipe(
            map(page => page?.manifest.props ?? [])
        );
    }
}