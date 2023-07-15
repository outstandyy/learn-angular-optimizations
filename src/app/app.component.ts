import { Component, OnInit } from '@angular/core';
import { User } from './model';
import { UserListGenerator } from './user-list-generator';
import { Names } from './names';

const NumRange: [number, number] = [23, 28];

@Component({
  selector: 'app-root',
  template: `
    <app-user-list [users]="list1"
                   group="group1"
                   (create)="createUser(list1, $event)"
                   (delete)="deleteUser(list1, $event)">
    </app-user-list>

    <app-user-list [users]="list2"
                   group="group1"
                   (create)="createUser(list2, $event)"
                   (delete)="deleteUser(list2, $event)">
    </app-user-list>

  `,
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  list1!: User[];
  list2!: User[];

  constructor(private listGenerator: UserListGenerator) {
  }

  ngOnInit() {
    this.list1 = this.listGenerator.generate(Names, NumRange, 10);
    this.list2 = this.listGenerator.generate(Names, NumRange, 10);
  }

  createUser(list: User[], name: string) {
    list.unshift({ name, num: this.listGenerator.generateNumber(NumRange) });
  }

  deleteUser(list: User[], user: User) {
    list.splice(list.indexOf(user), 1);
  }
}
