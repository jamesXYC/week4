import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email = "123@123.com"
  password = "123";
  constructor(private router:Router) { }

  ngOnInit() {
  }
  
}
