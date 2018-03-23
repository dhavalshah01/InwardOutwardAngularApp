import { Component, OnInit } from '@angular/core';
import {InwardDataService} from '../../shared/services/inward-data.service';
import { Router } from '@angular/router';
import {ToastrService} from 'ngx-toastr'
import {Inward} from '../../shared/models/inward';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-inwardlist',
  templateUrl: './inwardlist.component.html',
  styleUrls: ['./inwardlist.component.scss']
})
export class InwardlistComponent implements OnInit {

  constructor(private router: Router,private inwardDataService : InwardDataService, private toastr : ToastrService) { }
  inwards : Inward[];
  ngOnInit() {
    this.getAllInwards();
  }
  getAllInwards() {
    return this.inwardDataService.getInwards().subscribe(inwards=>this.inwards=inwards);
    //return this.inwardDataService.getInwards();
   // return this
  //    .inwardDataService
   //   .getInwards();
    //.subscribe(inwards => this.inwards = inwards);
  }
  showForEdit(inw : Inward){
    console.log('Id of inword at Edit:' + inw.Id);
    this.inwardDataService.selectedInward = Object.assign({}, inw);
    
  }
  
  onDelete(id:number){
    if(confirm('Are you sure to delete this record ? ') == true){
      this.inwardDataService.DeleteInward(id)
      .subscribe(x =>{
        this.getAllInwards();
        this.toastr.warning("Deleted successfully!", "Inward Register" );
      })
    }

    //this.router.navigate(['/inwardList']);
  }
}
