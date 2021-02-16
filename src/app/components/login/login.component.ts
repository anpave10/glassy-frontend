import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/Services/data.service';
import { TokenService } from 'src/app/Services/token.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public form = {
    email:null,
    password: null
  }

  public error = null;

  constructor(private service: DataService,
              private token: TokenService
              ) { }

  onSubmit(){
    this.service.login(this.form).subscribe(
      data => this.handleResponse(data),
      error => this.handleError(error)
    );
  }

  handleResponse(data){
    this.token.handle(data.token);
  }

  handleError(error){
    this.error = error.error.message;
  }

  ngOnInit(): void {
  }

}
