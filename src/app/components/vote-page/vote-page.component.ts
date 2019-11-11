import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {voteCount} from 'src/app/Services/countService';
@Component({
  selector: 'app-vote-page',
  templateUrl: './vote-page.component.html',
  styleUrls: ['./vote-page.component.css']
})
export class VotePageComponent implements OnInit {
  nameOfAuthors: any;
  count1:number=1;
  count:number = 0;
  authrs: any=[
    'Miguel de Cervantes',
    'Charles Dickens',
    'J.R.R. Tolkien',
    'Antoine de Saint-Exuper'
  ]; // array of authors name
  constructor(private _router:Router, private _countService:voteCount){ 
    alert("Maximum 10 Visitors can vote.");
  }
  ngOnInit() {
  }

Submit(){
  if(this.count1<=10)
  {
    this._countService.ValidateAuthor(this.nameOfAuthors);
    this.nameOfAuthors=null;
    this.count++;
    this.count1++;
  }
  else
  {
    alert("Vote Limit Exceeded by 10.");
    alert("Please go to the Result Page.");
  }
}
}