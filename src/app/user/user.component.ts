import { Component, computed, signal } from '@angular/core';
import { DUMMY_USERS } from '../dummy-users';


@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
  randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);
  // selectedUser = DUMMY_USERS[this.randomIndex] ; //old way
  selectedUser = signal(DUMMY_USERS[this.randomIndex]); //signal way
  imagePath = computed(() => {
    return '/assets/users/' + this.selectedUser().avatar;
  });



  // imagePath = computed(() => '/assets/users/' + this.selectedUser().avatar);

  // get imagePath(){ //Because of the 'get' keyword, it acts like a property
  //   return '/assets/users/' + selectedUser().get(imagePath);
  // }

  changeRandomIndex() {
    this.randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);
  }

  onSelectUser() {
    this.changeRandomIndex();
    // this.selectedUser = DUMMY_USERS[this.randomIndex];
    this.selectedUser.set(DUMMY_USERS[this.randomIndex]);
  }
}
