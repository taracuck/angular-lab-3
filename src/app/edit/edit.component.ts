import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { UserProfile } from '../interfaces/user-profile';
import { ProfileService } from '../profile.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css'],
})
export class EditComponent implements OnInit {
  hover: boolean = false;

  user!: UserProfile;

  constructor(private router: Router, private profileService: ProfileService) {}

  ngOnInit(): void {
    this.user = this.profileService.getUserProfile();
  }

  setUserProfile = (form: NgForm) => {
    console.log(form);
    let user = {
      name: form.form.value.name,
      contact: form.form.value.contact,
      bio: form.form.value.bio,
    };
    this.profileService.setUserProfile(user);
    this.router.navigate(['profile']);
  };
}
