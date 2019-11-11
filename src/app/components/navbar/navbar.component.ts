import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import{ voteCount} from 'src/app/Services/countService';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private _router:Router,private voteObj:voteCount) { }

  ngOnInit() {
  }
  reset(){
    this.voteObj.count1=null;
    this.voteObj.count2=null;
    this.voteObj.count3=null;
    this.voteObj.count4=null;
    this._router.navigate(['/vote-page']);
  }
  refresh(){
    this.voteObj.count1=null;
    this.voteObj.count2=null;
    this.voteObj.count3=null;
    this.voteObj.count4=null;
  }
}
