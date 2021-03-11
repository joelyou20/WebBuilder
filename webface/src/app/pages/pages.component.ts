import { Component, OnInit } from '@angular/core';
import { SitePanelComponent } from '../site-panel/site-panel.component';

@Component({
	selector: 'app-pages',
	templateUrl: './pages.component.html',
	styleUrls: ['./pages.component.scss']
})

export class PagesComponent implements OnInit {

    public sites = new Array<SitePanelComponent>();
    private _pageIndex = 0;
    private _numOfPages = 10;

	constructor() { }

	ngOnInit(): void {

		this.generateComponents();
	}

	private generateComponents(): any {
        for (var i = 0; i < this._numOfPages; i++, this._pageIndex++) {
            var site = new SitePanelComponent()
            site.title = i.toString();
            this.sites.push(site)
        }
        this._pageIndex = 0;
	}
}


