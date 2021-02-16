import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/Services/data.service';

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

  constructor( private service: DataService) { }

  onSubmit(){
    this.service.signup(this.form).subscribe(
      data => console.log(data),
      error => this.handleError(error)
    );
  }

  handleError(error){
    this.error = error.error.errors;
  }

  ngOnInit(): void {
  }

}
