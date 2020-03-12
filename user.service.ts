import { Injectable } from '@angular/core';
import { User } from '../models/user.model';

@Injectable()
export class UserService {
    private listUsers: User[] = [];
    
    save(item: User): void{
      this.listUsers.push(item);

    }
}