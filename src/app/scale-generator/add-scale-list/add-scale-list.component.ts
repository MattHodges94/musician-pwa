import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormArray, Validators } from '@angular/forms';
import { Router } from '@angular/router'
import { NgForm } from '@angular/forms/src/directives/ng_form';

import { AngularFireList } from 'angularfire2/database/interfaces';
import { AngularFireDatabase } from 'angularfire2/database';
import * as firebase from 'firebase/app';

import { AuthService } from '../../services/auth.service';
import { NotificationsService } from '../../services/notifications.service'

@Component({
  selector: 'app-add-scale-list',
  templateUrl: './add-scale-list.component.html',
  styleUrls: ['./add-scale-list.component.scss']
})
export class AddScaleListComponent implements OnInit {

  public newScaleList: Object = {};
  public scales: String[] = [""];
  private newScaleListRef: AngularFireList<Object>;
  public user: firebase.User;
  public scaleListForm: FormGroup;
  public submitted: boolean = false;

  constructor(private router: Router, private db: AngularFireDatabase, private authService: AuthService, private fb: FormBuilder, private notifications: NotificationsService) {
    authService.user.subscribe(user => {
      if(user){
        this.user = user;
        this.newScaleListRef = this.db.list('/customScales/' + this.user.uid);
      }else{
        this.router.navigateByUrl('/')
      }
    })
    this.createForm()
  }

  createForm(){
    this.scaleListForm = this.fb.group({
      name: ['', Validators.required],
      scales: this.fb.array([this.initScales()])
    });
    this.scaleListForm.setControl('scales', this.fb.array([this.initScales()]));
  }

  initScales() {
    return this.fb.group({
        scalename: ['', Validators.required]
    });
  }

  addNewRow() {
    const control = <FormArray>this.scaleListForm.controls['scales'];
    // add new formgroup
    control.push(this.initScales());
  }

  deleteRow(index: number) {
      const control = <FormArray>this.scaleListForm.controls['scales'];
      // remove the chosen row
      control.removeAt(index);
  }

  ngOnInit() {

  }

  public addNewScaleEntry(){
    this.scales.push("")
  }

  trackByIndex(index: number, obj: any): any {
    return index;
  }

  onSubmit(){
    this.submitted = true;
    console.log(this.scaleListForm)
    if(this.scaleListForm.valid){
      this.newScaleList['name'] = this.scaleListForm.value.name;
      this.newScaleList['scales'] = this.scaleListForm.value.scales;
      this.newScaleListRef.push( this.newScaleList );
      this.notifications.openToast('Scale list successfully added!', 'success')
      
      //reset form
      this.submitted = false;
      const scalesArray = <FormArray>this.scaleListForm.controls['scales']
      scalesArray.controls = []
      scalesArray.push(this.initScales())
      this.scaleListForm.reset()
    }
  }

}
