import { Injectable } from '@angular/core';
import { User } from '../models/User';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Config } from 'src/config/Config';
import { Observable } from 'rxjs';

@Injectable({
	providedIn: 'root'
})
export class AuthService {

	httpOptions = {
		headers: new HttpHeaders({
			'content-type': 'application/json',
			'Access-Control-Allow-Origin': '*'
		})
	}

	constructor(private http: HttpClient, private cfg: Config) { }

	registerUser(userToRegister: any): Observable<User> {
		return this.http.post<User>(`${this.cfg.apiUrl}user/register`, userToRegister, this.httpOptions);
	}
}
