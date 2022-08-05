import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
useremail:any;
  constructor() { }

  ngOnInit(): void {
    debugger;
    this.useremail=localStorage.getItem("loginEmail");
  }

}
