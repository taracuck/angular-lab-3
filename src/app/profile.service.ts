import { Injectable } from '@angular/core';
import { UserProfile } from './interfaces/user-profile';

@Injectable({
  providedIn: 'root',
})
export class ProfileService {
  user: UserProfile = {
    name: 'Tara Cuckovich',
    contact: 'taracuck@umich.edu',
    bio: 'Loves baking and going to the gym',
  };

  constructor() {}

  getUserProfile = (): UserProfile => {
    return this.user;
  };

  setUserProfile = (userData: UserProfile) => {
    this.user.name = userData.name;
    this.user.contact = userData.contact;
    this.user.bio = userData.bio;
  };
}
