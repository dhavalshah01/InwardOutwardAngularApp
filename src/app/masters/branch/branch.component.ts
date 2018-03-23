import { Component, OnInit } from '@angular/core';
import {Branch} from '../../shared/models/branch';
import { Router } from '@angular/router';
import {ToastrService} from 'ngx-toastr'
import {BranchService} from '../../shared/services/branch.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-branch',
  templateUrl: './branch.component.html',
  styleUrls: ['./branch.component.scss']
})
export class BranchComponent implements OnInit {

  constructor(private router: Router,private branchService : BranchService, private toastr : ToastrService) { }
branches:Branch[];

  ngOnInit() {
    this.getAllBranches();
  }
  getAllBranches() {
    return this.branchService.getBranches().subscribe(branches=>this.branches=branches);
    //return this.inwardDataService.getInwards();
   // return this
  //    .inwardDataService
   //   .getInwards();
    //.subscribe(inwards => this.inwards = inwards);
  }

onSubmit(form : NgForm){
  if(form.value.Id == null){
    console.log('Branch value:' + form.value.BranchName);
    //Insert
    this.branchService.PostBranch(form.value)
    .subscribe(data =>{
      this.branches=data;
      this.resetForm(form);
      this.getAllBranches();
      this.toastr.success('New Record Added Successfully','Branch Register');
    })
   }
  else{
    //update
   // console.log('Date in edit :' + form.value.InwardDate);
    this.branchService.PutBranch(form.value.BranchId, form.value)
    .subscribe(data=>{
      this.branches=this.branches;
      this.resetForm(form);
      this.getAllBranches();
      this.toastr.success('Record Updated Successfully','Branch Register');
    })
  }
}
resetForm(form? : NgForm){
  if(form != null)
    form.reset();
  this.branchService.selectedBranch={
   BranchId :null,
   BranchName :'',
   BranchDesciption : '',
   Deleted: false, 
  }

}
showForEdit(br : Branch){
 // console.log('Id of inword at Edit:' + inw.Id);
 //console.log('Date value in form:' + inw.InwardDate);
  this.branchService.selectedBranch = Object.assign({}, br);

}

onDelete(id:number){
  if(confirm('Are you sure to delete this record ? ') == true){
    this.branchService.DeleteBranch(id)
    .subscribe(x =>{
      this.getAllBranches();
      this.toastr.warning("Deleted successfully!", "Branch Register" );
    })
  }
}

}
