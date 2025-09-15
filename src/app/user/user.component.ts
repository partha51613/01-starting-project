import { Component } from '@angular/core';
import { DUMMY_USERS } from '../dummy-users';


@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  randomIndex = Math.floor(Math.random()*DUMMY_USERS.length)
  selectedUser = DUMMY_USERS[this.randomIndex];
  
  get imagePath(){ //Because of the 'get' keyword, it acts like a property
    return '/assets/users/' + this.selectedUser.avatar;
  }


  changeRandomIndex(){
    this.randomIndex = Math.floor(Math.random()*DUMMY_USERS.length)
  }

  onSelectUser(){
    console.log("test");
    this.changeRandomIndex()
    this.selectedUser = DUMMY_USERS[this.randomIndex];
    
  }

}
