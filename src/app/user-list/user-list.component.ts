import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output,
  SimpleChange, SimpleChanges
} from '@angular/core';
import { User } from '../model';
import { List } from 'immutable';

@Component({
  selector: 'app-user-list',
  template: `

    <div class="group">{{ group }}</div>

    <app-name-input (createUser)="create.emit($event)"></app-name-input>

    <app-list [users]="users" (delete)="delete.emit($event)"></app-list>
  `,
  styleUrls: ['./user-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserListComponent implements OnChanges{

  @Input()
  users!: List<User>;

  @Input()
  group!: string;

  @Output() create: EventEmitter<string> = new EventEmitter<string>();

  @Output() delete: EventEmitter<User> = new EventEmitter<User>();

  ngOnChanges(changes: SimpleChanges) {
    console.log('--Changes: ', changes['users'].currentValue);
  }
}
