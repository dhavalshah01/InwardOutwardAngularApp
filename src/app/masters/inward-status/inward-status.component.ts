import { Component, OnInit } from '@angular/core';
import {InwardStatus} from '../../shared/models/inward-status';
import { Router } from '@angular/router';
import {ToastrService} from 'ngx-toastr'
import {InwardStatusService} from '../../shared/services/inward-status.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-inward-status',
  templateUrl: './inward-status.component.html',
  styleUrls: ['./inward-status.component.scss']
})
export class InwardStatusComponent implements OnInit {

  constructor(private router: Router,private inwardStatusService : InwardStatusService, private toastr : ToastrService) { }
  inwardStatus:InwardStatus[];
  ngOnInit() {
  }
  getAllInwardStatus() {
    return this.inwardStatusService.getInwardStatus().subscribe(inwardStatus=>this.inwardStatus=inwardStatus);
    //return this.inwardDataService.getInwards();
   // return this
  //    .inwardDataService
   //   .getInwards();
    //.subscribe(inwards => this.inwards = inwards);
  }
}
