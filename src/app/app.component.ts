import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

import { User } from './model';
import { UserListGenerator } from './user-list-generator';
import { Names } from './names';

import { List } from 'immutable';

const NumRange: [number, number] = [23, 28];

@Component({
  selector: 'app-root',
  template: `
    <app-user-list [users]="list1"
                   group="group1"
                   (create)="list1 = createUser(list1, $event)"
                   (delete)="list1 = deleteUser(list1, $event)">
    </app-user-list>

    <app-user-list [users]="list2"
                   group="group2"
                   (create)="list2 = createUser(list2, $event)"
                   (delete)="list2 = deleteUser(list2, $event)">
    </app-user-list>

  `,
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent implements OnInit {

  list1!: List<User>;
  list2!: List<User>;

  constructor(private listGenerator: UserListGenerator) {
  }

  ngOnInit() {
    this.list1 = List(this.listGenerator.generate(Names, NumRange, 10));
    this.list2 = List(this.listGenerator.generate(Names, NumRange, 10));
  }

  createUser(list: List<User>, name: string) {
    console.log('--Create user: ', name);
    return list.unshift({ name, num: this.listGenerator.generateNumber(NumRange) });
  }

  deleteUser(list: List<User>, user: User) {
    console.log('--Delete user: ', user.name);
    return list.splice(list.indexOf(user), 1);
  }
}
