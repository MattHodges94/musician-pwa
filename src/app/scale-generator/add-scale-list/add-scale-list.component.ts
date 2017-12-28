import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormArray, Validators } from '@angular/forms';
import { NgForm } from '@angular/forms/src/directives/ng_form';

import { AngularFireList } from 'angularfire2/database/interfaces';
import { AngularFireDatabase } from 'angularfire2/database';
import * as firebase from 'firebase/app';

import { AuthService } from '../../services/auth.service';

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

  constructor(private db: AngularFireDatabase, private authService: AuthService, private fb: FormBuilder) {
    authService.user.subscribe(user => {
      if(user){
        this.user = user;
        this.newScaleListRef = this.db.list('/customScales/' + this.user.uid);
      }
    })
    this.createForm()
  }

  createForm(){
    this.scaleListForm = this.fb.group({
      name: ['', Validators.required],
      scales: this.fb.array([this.initScales()])
    });
    this.scaleListForm.setControl('scales', this.fb.array([]));
  }

  initScales() {
    return this.fb.group({
        scalename: ['', Validators.required]
    });
  }

  addNewRow() {
    // control refers to your formarray
    const control = <FormArray>this.scaleListForm.controls['scales'];
    // add new formgroup
    control.push(this.initScales());
  }

  deleteRow(index: number) {
      // control refers to your formarray
      const control = <FormArray>this.scaleListForm.controls['scales'];
      // remove the chosen row
      control.removeAt(index);
  }

  ngOnInit() {

  }

  public addNewScaleEntry(){
    this.scales.push("")
    console.log(this.scales)
  }

  trackByIndex(index: number, obj: any): any {
    return index;
  }

  onSubmit(){
    console.log(this.scaleListForm)
    console.log(<FormArray>this.scaleListForm.controls['scales'])
    
    if(this.scaleListForm.valid){
      this.newScaleList['name'] = this.scaleListForm.value.name;
      this.newScaleList['scales'] = this.scaleListForm.value.scales;
      this.newScaleListRef.push( this.newScaleList );
      
      //reset form
      const scalesArray = <FormArray>this.scaleListForm.controls['scales']
      scalesArray.controls = []
      this.scaleListForm.reset()
    }
  }

}
