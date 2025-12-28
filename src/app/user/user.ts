import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.html',
  styleUrl: './user.scss',
})
export class User {
  @Input({ required: true }) id!: number;
  @Input({ required: true }) name!: string;
  @Input({ required: true }) avatar!: string;
  @Output() selectUser = new EventEmitter<number>();

  onSelect() {
    this.selectUser.emit(this.id);
  }
}
