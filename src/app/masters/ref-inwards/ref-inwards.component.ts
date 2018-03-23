import { Component, OnInit } from '@angular/core';
import {RefInwards} from '../../shared/models/ref-inwards';
import { Router } from '@angular/router';
import {ToastrService} from 'ngx-toastr'
import {RefInwardsService} from '../../shared/services/ref-inwards.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-ref-inwards',
  templateUrl: './ref-inwards.component.html',
  styleUrls: ['./ref-inwards.component.scss']
})
export class RefInwardsComponent implements OnInit {

  constructor(private router: Router,private refInwardsService : RefInwardsService, private toastr : ToastrService) { }
  refInwards:RefInwards[];

  ngOnInit() {
  }
  getAllInwardStatus() {
    return this.refInwardsService.getRefInwards().subscribe(refInwards=>this.refInwards=refInwards);
    //return this.inwardDataService.getInwards();
   // return this
  //    .inwardDataService
   //   .getInwards();
    //.subscribe(inwards => this.inwards = inwards);
  }
}
