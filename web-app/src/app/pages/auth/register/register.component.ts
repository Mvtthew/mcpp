import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';

@Component({
	selector: 'app-register',
	templateUrl: './register.component.html',
	styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

	registerForm: FormGroup;

	constructor(private fb: FormBuilder, private authService: AuthService) { }

	ngOnInit(): void {

		this.registerForm = this.fb.group({
			name: ['', []],
			email: ['', []],
			password: ['', []],
			birthdate: ['', []],
			gender: ['', []]
		});

	}

	registerUser(): void {

		const {
			name,
			email,
			password,
			birthdate,
			gender
		} = this.registerForm.value;

		this.authService.registerUser(name, email, password, birthdate, gender).subscribe(
			user => {

				console.log(user);
			},
			error => {
			}
		);

	}

}
