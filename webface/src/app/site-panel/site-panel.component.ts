import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-site-panel',
  templateUrl: './site-panel.component.html',
  styleUrls: ['./site-panel.component.scss']
})
export class SitePanelComponent implements OnInit {
    @Input() title: string

    constructor() { }

    ngOnInit(): void {
    }

}
