import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { voteCount} from 'src/app/Services/countService';
import {result} from 'src/app/Models/result';
@Component({
  selector: 'app-result-page',
  templateUrl: './result-page.component.html',
  styleUrls: ['./result-page.component.css']
})
export class ResultPageComponent implements OnInit {
  nameList:Array<result>=new Array<result>();//Array of (result class) whose Array's name is nameList.
  writerName: result;//[class (result)] assign in a variable
  name1:String;
  name2:String;
  name3:String;
  name4:String;
  c1:number;
  c2:number;
  c3:number;
  c4:number;
  authrName: String;
  count:number=1;
  
  constructor(private _router:Router,private _countService:voteCount) { 
    debugger;
    this.c1=this._countService.count1;
    this.c2=this._countService.count2;
    this.c3=this._countService.count3;
    this.c4=this._countService.count4;
    this.nameList.push({aName:"Miguel de Cervantes",counts:this.c1}as result);
    this.nameList.push({aName:"Charles Dickens",counts:this.c2}as result);
    this.nameList.push({aName:"J.R.R. Tolkien",counts:this.c3}as result);
    this.nameList.push({aName:"Antoine de Saint-Exuper",counts:this.c4}as result);
    this.getmaxVote(this.nameList);
  }
  getmaxVote(arr_names:result[]):void{
    debugger;
    for(var i=0;i<arr_names.length;i++)
    {
      console.log(this.nameList[i].counts);
    }
    let max:number=0;       
    for(let i:number=0;i<4;i++) 
    {
       if(this.nameList[i].counts>max)
        {
          max=this.nameList[i].counts;
        }
    }
    for(let i:number=0;i<4;i++)
    {
      if(this.nameList[i].counts==max)
      {
        let name=this.nameList;
        if(name!=null && name.length>0)
        {
          this.writerName=name[i];
          if(this.count==1)
          {
            this.name1=this.writerName.aName;
            this.count++;
          }
          else if(this.count==2){
          this.name2=this.writerName.aName;
          this.count++;
          }
          else if(this.count==3){
            this.name3=this.writerName.aName;
            this.count++;
          }
          else if(this.count==4){
            this.name4=this.writerName.aName;
            this.count++;
          }
        }
      }
    }
  }
  ngOnInit(){   
  }
}
