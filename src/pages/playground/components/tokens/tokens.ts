import { Component } from '@angular/core';
import { AsyncPipe } from '@angular/common';

import { map } from 'rxjs';

import { PageRegistryService } from '../../../../core/services/page-registry.service';

@Component({
    selector: 'eui-tokens',
    templateUrl: './tokens.html',
    styleUrls: ['./tokens.scss'],
    imports: [AsyncPipe]
})
export class TokensComponent {

    readonly tokens$;

    constructor(
        private readonly pageService: PageRegistryService
    ) {
        this.tokens$ = this.pageService.currentPage$.pipe(
            map(page => page?.manifest.tokens ?? [])
        );
    }
}