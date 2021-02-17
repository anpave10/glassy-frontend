import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/Services/data.service';
import { TokenService } from 'src/app/Services/token.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  public form = {
    first_name: null,
    last_name: null,
    email: null,
    password: null,
    password_confirmation: null,
    phone_number: null
  }

  public error = null;

  constructor( private service: DataService,
               private token: TokenService,
               private router: Router) { }

  onSubmit(){
    this.service.signup(this.form).subscribe(
      data => this.handleResponse(data),
      error => this.handleError(error)
    );
  }

  handleResponse(data){
    this.token.handle(data.token);
    this.router.navigateByUrl('/profile');
  }

  handleError(error){
    this.error = error.error.errors;
  }

  ngOnInit(): void {
  }

}
