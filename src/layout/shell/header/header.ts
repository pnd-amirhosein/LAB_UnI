import { Component, OnInit } from '@angular/core';
import { EuiBadge, EuiIcon } from 'ensemble-ui/angular';

@Component({
    selector: 'eui-header',
    templateUrl: './header.html',
    styleUrls: ['./header.scss'],
    imports: [EuiBadge, EuiIcon]
})
export class HeaderComponent implements OnInit {
    constructor() { }

    ngOnInit(): void { }
}
