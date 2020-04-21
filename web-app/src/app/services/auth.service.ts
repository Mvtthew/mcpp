import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/User';

@Injectable({
	providedIn: 'root'
})
export class AuthService {

	apiUrl: string = 'http://localhost:3000/';
	httpOptions: object = {
		headers: new HttpHeaders({
			'Content-Type': 'application/json'
		})
	};

	constructor(private htttp: HttpClient) { }

	registerUser(name: string, email: string, password: string, birthdate: Date, gender: string): Observable<User> {
		return this.htttp.post<User>(`${this.apiUrl}user/register`, { name, email, password, birthdate, gender }, this.httpOptions);
	}

}
