import { Component} from '@angular/core';
import { Router } from "@angular/router";
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private router:Router) { }

   username: string;
   password: string;
   showError: Boolean = false;
   knownUsers = [
    {username: 'qwe', password: '123'},
    {username: 'asd', password: '222'},
    {username: 'zxc', password: '333'}
  ];

   login(){
    
    let user = {username: this.username, password: this.password};

    // if the user matches a known user
    for (let knownUser of this.knownUsers){
      if (JSON.stringify(user) === JSON.stringify(knownUser)){
        // navigate to account page
        this.router.navigateByUrl('/account');
        
      }
    }
    // else display error message
    this.showError = true;
    
  }
  
}
