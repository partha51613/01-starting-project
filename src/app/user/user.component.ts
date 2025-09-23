import { Component, EventEmitter, Input, Output } from '@angular/core';

// type User = {
//     id: string;
//     avatar: string;
//     name: string;
//   }; //Using 'type' we can define object and other different types

interface User {
    id: string;
    avatar: string;
    name: string;
  }; //Using Interface  we can define object types only

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
  @Input({required: true}) user!:User;


  @Output() select = new EventEmitter<string>();

  get imagePath(){
    return '/assets/users/' + this.user.avatar;
  }

  onSelectUser() {
    this.select.emit(this.user.id);
  }
}