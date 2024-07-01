import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FirstServiceService {

  messages:Array<any>=[];
  
  constructor(){
    this.init();
  }
  init(){  
    
  }

  insert(message:{name:string,email:string,message:string}){
    this.messages.push(message);
  }

  getAllMessages(){
    return this.messages;
  }

  deleteMessage(index:number){
    this.messages.splice(index,1);
  }
}
