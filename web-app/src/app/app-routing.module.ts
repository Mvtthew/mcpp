import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AuthComponent } from './pages/auth/auth.component';
import { RegisterComponent } from './pages/auth/register/register.component';
import { LoginComponent } from './pages/auth/login/login.component';


const routes: Routes = [
	{ path: '', component: HomeComponent },
	{
		path: 'auth', component: AuthComponent,
		children: [
			{ path: 'register', component: RegisterComponent },
			{ path: 'login', component: LoginComponent }
		]
	}
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }
