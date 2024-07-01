import { Component } from '@angular/core';
import { count } from 'console';
import { FirstServiceService } from '../services/first-service.service';

@Component({
  selector: 'app-first-comp',
  templateUrl: './first-comp.component.html',
  styleUrl: './first-comp.component.css'
})
export class FirstCompComponent {

  name:string='';
  email:string='';
  message:string='';
  isSubmitted:boolean=false;
  messages:Array<any>=[];

  constructor(private service:FirstServiceService) { 
    this.messages=this.service.getAllMessages();
    this.isSubmitted=this.messages.length>0;
  }

  onSubmit(){
    this.isSubmitted=true;
    this.service.insert({
      'name':this.name, 
      'email':this.email,
      'message':this.message
    })
  }

  deleteMessage(index:number){
    this.service.deleteMessage(index);
  }
}
