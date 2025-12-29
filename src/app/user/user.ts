import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IUser } from './user.model';

@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.html',
  styleUrl: './user.scss',
})
export class User {
  @Input({ required: true }) user!: IUser;
  @Input() selected!: boolean;
  @Output() selectUser = new EventEmitter<number>();

  onSelect() {
    this.selectUser.emit(this.user.id);
  }
}
