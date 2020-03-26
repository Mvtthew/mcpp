import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
	selector: 'app-navigation',
	templateUrl: './navigation.component.html',
	styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

	menuVisible: boolean = false;

	constructor(private router: Router) { }

	ngOnInit(): void {
		this.router.events.subscribe(() => {
			this.menuVisible = false;
		});
	}

	toggleMenu(): void {
		this.menuVisible = !this.menuVisible;
	}

}
