import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-name-input',
  template: `
    <section class="input">
      <input placeholder="Enter name" [(ngModel)]="name" (keydown)="onKeyDown($event)"/>
    </section>
  `,
  styleUrls: ['./name-input.component.scss']
})
export class NameInputComponent {

  @Input()
  name!: string;

  @Output()
  createUser: EventEmitter<string> = new EventEmitter<string>();

  onKeyDown(event: any) {
    if (event.keyCode === 13) {
      this.createUser.emit(this.name);
      this.name = '';
    }
  }
}
