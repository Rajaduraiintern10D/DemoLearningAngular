import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-forms',
  templateUrl: './reactive-forms.component.html',
  styleUrls: ['./reactive-forms.component.css']
})
export class ReactiveFormsComponent implements OnInit{
  myform !:FormGroup;

  constructor(private fb: FormBuilder){}

  ngOnInit(): void {
    this.myform=this.fb.group({
      name:['',[Validators.required, Validators.minLength(3)]],
      email:['',[Validators.required,Validators.email]],
      password:['',[Validators.required,Validators.minLength(6)]]
    });
  }
  onSubmit(): void{
    if(this.myform.valid){
      console.log('form submitted',this.myform.value)
    }
  }
} 
