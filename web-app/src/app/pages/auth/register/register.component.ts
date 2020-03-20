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

	submitForm(): void {
		this.authService.registerUser(this.registerForm.value).subscribe(user => {
			console.log(user);
		});
	}

}
