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
	error: string;

	constructor(private fb: FormBuilder, private authService: AuthService) { }

	ngOnInit(): void {

		this.registerForm = this.fb.group({
			name: ['', []],
			email: ['', []],
			password: ['', []]
		});

	}

	registerUser(): void {

		const {
			name,
			email,
			password
		} = this.registerForm.value;

		this.authService.registerUser(name, email, password).subscribe(
			user => {
				this.error = null;
				console.log(user);
			},
			error => {
				this.error = error.error.message;
			}
		);

	}

}
