import { Injectable } from '@angular/core';
import manifestJson from 'ensemble-ui/metadata/manifest.json';
import type { EnsembleUIManifest, ManifestComponent } from 'ensemble-ui/metadata';
import { BehaviorSubject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class PageRegistryService {

    private readonly manifest = manifestJson as EnsembleUIManifest;

    private readonly currentComponentSubject =
        new BehaviorSubject<ManifestComponent | null>(null);

    readonly currentComponent$ =
        this.currentComponentSubject.asObservable();

    setCurrentComponent(componentTag: string): void {
        const component =
            this.manifest.components["eui-" + componentTag];

        this.currentComponentSubject.next(
            component ?? null
        );
    }
}