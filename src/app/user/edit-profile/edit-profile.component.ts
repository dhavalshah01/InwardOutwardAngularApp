import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr'
import { User } from '../../shared/user.model';
import { UserService } from '../../shared/user.service';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent implements OnInit {

  userClaims: any;

  constructor(private router: Router, private userService: UserService, private toastr: ToastrService) { }

  ngOnInit() {


    this.userService.getUserClaims().subscribe((data: any) => {
      this.userClaims = data;

    });
  
  }

}
