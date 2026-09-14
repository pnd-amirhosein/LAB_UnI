import { ManifestComponent } from 'ensemble-ui/metadata'

export interface PageMetadata {
  title: string;
  description?: string;
  badges?: PageBadge[];
  element: ElementStructure;
  componentTag: string;
}

export interface ElementStructure {
  componentTag: string;
  componentClass?: string;
  children?: ElementStructure[];
}

export interface PageBadge {
  text: string;
  icon?: string;
}

export interface ResolvedPageMetadata extends PageMetadata {
  manifest: ManifestComponent;
}