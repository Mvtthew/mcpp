import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { Error404Component } from './pages/error404/error404.component';
import { AuthComponent } from './pages/auth/auth.component';
import { RegisterComponent } from './pages/auth/register/register.component';

const routes: Routes = [
	{ path: '', component: HomeComponent },

	// Auth routes
	{
		path: 'auth', component: AuthComponent,
		children: [
			{ path: 'register', component: RegisterComponent }
		]
	},

	{ path: '404', component: Error404Component },
	{ path: '**', redirectTo: '404' }
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }
