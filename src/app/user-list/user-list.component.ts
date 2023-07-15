import { Component, EventEmitter, Input, Output } from '@angular/core';
import { User } from '../model';

const fibonacci = (num: number): number => {
  if (num === 1 || num === 2) {
    return 1;
  }
  return fibonacci(num - 1) + fibonacci(num - 2);
};

@Component({
  selector: 'app-user-list',
  template: `

    <section class="input">
      <input placeholder="Enter name" [(ngModel)]="label" (keydown)="onKeyDown($event)"/>
    </section>

    <section class="user-list">
      <div *ngIf="users.length === 0">Empty list</div>

      <div class="user-item" *ngFor="let user of users">
        <span class="user-data">
          <span class="name">{{ user.name }}</span>
          <span class="num">{{ user.num }}</span>
        </span>

        <button class="delete-item" (click)="onDeleteUser(user)">
          Delete
        </button>
      </div>
    </section>
  `,
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent {

  @Input()
  users!: User[];

  @Input()
  group!: string;

  label!: string;

  @Output() create: EventEmitter<string> = new EventEmitter<string>();

  @Output() delete: EventEmitter<User> = new EventEmitter<User>();

  onKeyDown(event: any) {
    if (event.keyCode === 13) {
      this.create.emit(this.label);
      this.label = '';
    }
  }

  calculate(num: number) {
    return fibonacci(num);
  }

  onDeleteUser(user: User) {
    this.delete.emit(user);
  }
}
