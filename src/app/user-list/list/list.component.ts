import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output, SimpleChanges } from '@angular/core';
import { User } from '../../model';
import { List } from 'immutable';

@Component({
  selector: 'app-list',
  template: `
    <section class="user-list">
      <div *ngIf="users.size === 0">Empty list</div>

      <div class="user-item" *ngFor="let user of users">
        <span class="user-data">
          <span class="name">{{ user.name }}</span>
          <span class="num">{{ user.num | calculate }}</span>
        </span>

        <button class="delete-item" (click)="onDeleteUser(user)">
          Delete
        </button>
      </div>
    </section>
  `,
  styleUrls: ['./list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ListComponent {

  @Input()
  users!: List<User>;

  @Output() delete: EventEmitter<User> = new EventEmitter<User>();

  ngOnChanges(changes: SimpleChanges) {
    console.log('--Changes: ', changes['users'].currentValue);
  }

  onDeleteUser(user: User) {
    this.delete.emit(user);
  }
}
