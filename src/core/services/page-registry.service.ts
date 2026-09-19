import { Injectable } from '@angular/core';
import manifestJson from 'ensemble-ui/metadata/manifest.json';
import type { EnsembleUIManifest } from 'ensemble-ui/metadata';
import { BehaviorSubject } from 'rxjs';
import { pageMetadata } from '../../data/pages';
import type { PageMetadata, ResolvedPageMetadata } from '../models/page-metadata.model';

@Injectable({
  providedIn: 'root'
})
export class PageRegistryService {

  private readonly manifest = manifestJson as EnsembleUIManifest;

  private readonly currentPageSubject =
    new BehaviorSubject<ResolvedPageMetadata | null>(null);

  readonly currentPage$ = this.currentPageSubject.asObservable();

  setCurrentComponent(route: string): void {

    const metadata: PageMetadata = Object(pageMetadata)[route];

    if (!metadata) {
      this.currentPageSubject.next(null);
      return;
    }

    const component =
      this.manifest.components[metadata.componentTag];

    if (!component) {
      this.currentPageSubject.next(null);
      return;
    }

    const resolvedPage: ResolvedPageMetadata = {
      ...metadata,
      manifest: component
    };

    this.currentPageSubject.next(resolvedPage);
  }
}