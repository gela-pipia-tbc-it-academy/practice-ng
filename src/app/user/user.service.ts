import { Injectable } from "@angular/core";
import { IUser } from "./user.model";

@Injectable({providedIn: 'root'})
export class UserService {
    users: IUser[] = [
      {
        id: 1,
        name: 'Alice',
        avatar: 'https://ui-avatars.com/api/?name=Alice&background=random&size=128',
      },
      {
        id: 2,
        name: 'Bob',
        avatar: 'https://ui-avatars.com/api/?name=Bob&background=random&size=128',
      },
      {
        id: 3,
        name: 'Charlie',
        avatar: 'https://ui-avatars.com/api/?name=Charlie&background=random&size=128',
      },
      {
        id: 4,
        name: 'Diana',
        avatar: 'https://ui-avatars.com/api/?name=Diana&background=random&size=128',
      },
    ];
}