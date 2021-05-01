import { Component } from '@angular/core';
import { Model, TodoItem } from './model';

@Component({
  selector: 'app-root', //index.html içindeki app-root selectoru buradan gelir
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ToDoApp | Emre Kayacık';
  model = new Model();
  isDisplay =false;

  getName(){
    return this.model.user;
  }
  getItems(){
    if(this.isDisplay){
      return this.model.items;
    }
    return this.model.items.filter(item=>!item.action);
  }

  addItem(value){
    if(value!=""){
      this.model.items.push(new TodoItem(value,false))
    }
  }
}
