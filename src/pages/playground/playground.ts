import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { PageRegistryService } from '../../core/services/page-registry.service';
import { skip } from 'rxjs';

@Component({
    selector: 'eui-playground',
    templateUrl: './playground.html',
    styleUrls: ['./playground.scss']
})
export class PlaygroundComponent implements OnInit {

    constructor(
        private readonly route: ActivatedRoute,
        private readonly router: Router,
        private readonly pageService: PageRegistryService
    ) {
        this.pageService.currentComponent$.pipe(skip(1)).subscribe(x => {
            if (!x) { this.router.navigate(['/not-found']); return; }

            console.log(x);



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