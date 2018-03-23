import {Component, OnInit} from '@angular/core';
import {Inward} from '../../shared/models/inward';
import {Router} from '@angular/router';
import {ToastrService} from 'ngx-toastr'
import {InwardDataService} from '../../shared/services/inward-data.service';
import {NgForm} from '@angular/forms';
import {BranchService} from '../../shared/services/branch.service';
import {Branch} from '../../shared/models/branch';
import {RefInwardsService} from '../../shared/services/ref-inwards.service';
import {RefInwards} from '../../shared/models/ref-inwards';
import {PurposeofinwService} from '../../shared/services/purposeofinw.service';
import {Purposeofinw} from '../../shared/models/purposeofinw';

declare var $ : any;
@Component({selector: 'app-inward', templateUrl: './inward.component.html', styleUrls: ['./inward.component.css'], providers: [InwardDataService]})
export class InwardComponent implements OnInit {

  optionsSelect : Array < any >;
  optionsRefInward : Array < any >;
  optionsSocietyType : Array < any >;
  optionsOfficeType : Array < any >;
  optionsBranch : Array < any >;

  constructor(private router : Router,private purposeofinwService: PurposeofinwService, private branchService : BranchService, private refInwardsService : RefInwardsService, private inwardDataService : InwardDataService, private toastr : ToastrService) {}
  refInwards : RefInwards[];
  branches : Branch[];
  purposeofinw :Purposeofinw[];
  inwards : Inward[];

  ngOnInit() {
    this.getAllInwards();
    this.resetForm();
    /* $(function () {
      $("#InwardDate").datepicker();
    });
 */
  $('.datepicker').datepicker();
  $('.datepicker_Ref').datepicker();
    this.getAllBranches();
    this.getAllReftoInward();
    this.getAllPurposeofinw();
  }

  getAllBranches() {
    return this.branchService.getBranches().subscribe(branches => this.branches = branches);
    // return this.inwardDataService.getInwards(); return this    .inwardDataService
    //   .getInwards(); .subscribe(inwards => this.inwards = inwards);
  }
  
  getAllReftoInward() {
    console.log("in inward component");
    return this
      .refInwardsService
      .getRefInwards()
      .subscribe(refInwards => this.refInwards = refInwards);
  }
  getAllPurposeofinw() {
    return this.purposeofinwService.getPurposeofinw().subscribe(purposeofinw => this.purposeofinw = purposeofinw);
    // return this.inwardDataService.getInwards(); return this    .inwardDataService
    //   .getInwards(); .subscribe(inwards => this.inwards = inwards);
  }
  getAllInwards() {
    return this
      .inwardDataService
      .getInwards()
      .subscribe(inwards => this.inwards = inwards);
    // return this.inwardDataService.getInwards(); return this    .inwardDataService
    //   .getInwards(); .subscribe(inwards => this.inwards = inwards);
  }

  onSubmit(form : NgForm) {
    if (form.value.Id == null) {
      console.log('Date value:' + form.value.InwardDate);
      //Insert
      this
        .inwardDataService
        .PostInwards(form.value)
        .subscribe(data => {
          this.inwards = data;
          this.resetForm(form);
          this.getAllInwards();
          this
            .toastr
            .success('New Record Added Successfully', 'Inward Register');
        })
    } else {
      //update
      console.log('Date in edit :' + form.value.InwardDate);
      this
        .inwardDataService
        .PutInwards(form.value.Id, form.value)
        .subscribe(data => {
          this.inwards = this.inwards;
          this.resetForm(form);
          this.getAllInwards();
          this
            .toastr
            .success('Record Updated Successfully', 'Inward Register');
        })
    }
  }
  resetForm(form
    ?
    : NgForm) {
    if (form != null) 
      form.reset();
    this.inwardDataService.selectedInward = {
      Id: null,
      InwardDate: null,
      InwardNumber: null,
      ReferenceNumber: null,
      RefInwardDate: null,
      Subject: '',
      CreatedBy: '',
      Deleted: false,
      CreatedOnUtc: '',
      UpdatedOnUtc: '',

      PurposeId: null,
      Purposeofinw: [],

      BrId: null,
      Branch: [],

      RefeId: null,
      RefInwards: [],

      InwStatusId: null,
      InwardStatus: []
    }

  }
  showForEdit(inw : Inward) {
    // console.log('Id of inword at Edit:' + inw.Id);
    console.log('Date value in form:' + inw.InwardDate);
    this.inwardDataService.selectedInward = Object.assign({}, inw);

  }

 
  onDelete(id : number) {
    if (confirm('Are you sure to delete this record ? ') == true) {
      this
        .inwardDataService
        .DeleteInward(id)
        .subscribe(x => {
          this.getAllInwards();
          this
            .toastr
            .warning("Deleted successfully!", "Inward Register");
        })
    }
  }

}