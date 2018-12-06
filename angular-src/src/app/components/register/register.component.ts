import { Component, OnInit } from '@angular/core';
import { ValidateService} from '../../services/validate.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  name: String;
  username: String;
  email: String;
  password: String;

  //====================
  //we need to inject validateService into constructor anytime we use the service in a component
  constructor(private validateService: ValidateService) { }

  ngOnInit() {
  }

  onRegisterSubmit(){
    const user = {
      name : this.name,
      email: this.email,
      username: this.username,
      password: this.password
    }

    //Required Fields
  if (!this.validateService.validateRegister(user)){
    console.log("Please fill all fields");
    return false;
}
//Validate Email
if (!this.validateService.validateEmail(user.email)){
    console.log("Please  use a valid email");
    return false;
}
  }

  
}
