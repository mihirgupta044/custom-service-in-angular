import {Injectable} from '@angular/core';
import {author} from '../Models/author';
import {result} from '../Models/result';
@Injectable({
    providedIn:'root'
})
export class voteCount{
    AuthorList: Array<author>= new Array<author>();
    nameList:Array<result>=new Array<result>();
    writerList: author;
    votedList:result;
    count1:number=null;
    count2:number=null;
    count3:number=null;
    count4:number=null;
    writerName: result;//[class (result)] assign in a variable
    name1:String;
    constructor()
    {
        this.AuthorList.push({aName:"Miguel de Cervantes",role:1}as author);
        this.AuthorList.push({aName:"Charles Dickens",role:2}as author);
        this.AuthorList.push({aName:"J.R.R. Tolkien",role:3}as author);
        this.AuthorList.push({aName:"Antoine de Saint-Exuper",role:4}as author);
    }
    ValidateAuthor=function(author1: String):void{
        let names=this.AuthorList.filter(s=>s.aName==author1);
        debugger;
        if(names!=null && names.length>0)
        {
            this.writerList=names[0];
            let role=this.writerList.role;
            if(role==1)
                this.count1++;
            else if(role==2)
                this.count2++;
            else if(role==3)
                this.count3++;
            else if(role==4)
                this.count4++;
        }
    }
}
