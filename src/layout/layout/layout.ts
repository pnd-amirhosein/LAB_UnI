import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from '../shell/header/header';

@Component({
    selector: 'eui-layout',
    templateUrl: './layout.html',
    styleUrls: ['./layout.scss'],
    imports: [HeaderComponent]
})
export class LayoutComponent implements OnInit {
    constructor() { }

    ngOnInit(): void { }
}
