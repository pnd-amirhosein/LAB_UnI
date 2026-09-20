import { AfterViewInit, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { PageRegistryService } from '../../core/services/page-registry.service';
import { Observable, skip } from 'rxjs';
import { ResolvedPageMetadata } from '../../core/models/page-metadata.model';
import { AsyncPipe } from '@angular/common';
import { EuiBadge } from 'ensemble-ui/angular';
import { PropertiesComponent } from './components/properties/properties';
import { TokensComponent } from './components/tokens/tokens';

@Component({
    selector: 'eui-playground',
    templateUrl: './playground.html',
    styleUrls: ['./playground.scss'],
    imports: [AsyncPipe, EuiBadge, PropertiesComponent, TokensComponent]
})
export class PlaygroundComponent implements OnInit, AfterViewInit {

    readonly currentPage$: Observable<ResolvedPageMetadata | null>;

    constructor(
        private readonly route: ActivatedRoute,
        private readonly router: Router,
        private readonly pageService: PageRegistryService
    ) {
        this.currentPage$ = this.pageService.currentPage$;

        this.pageService.currentPage$.pipe(skip(1)).subscribe(x => {
            if (!x) { this.router.navigate(['/not-found']); return; }
            console.log(x);
        })
    }
    ngAfterViewInit(): void {
        this.currentPage$.subscribe(x => {
            if (!x) return;

            console.log(x);


            const element = document.createElement(x.element.componentTag)
            if (x.element.componentClass) element.classList.add(x.element.componentClass)

            const elementContainer = document.querySelector(".element-container")
            elementContainer?.appendChild(element)

        })
    }

    ngOnInit(): void {
        this.route.paramMap.subscribe(params => {
            const pageRoute = params.get('slug');

            if (!pageRoute) {
                this.router.navigate(['/not-found']);
                return;
            }

            this.pageService.setCurrentComponent(pageRoute);
        });
    }
}