import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, FormArray, FormControl } from '@angular/forms';

@Component({
  selector: 'app-update-image',
  templateUrl: './update-image.component.html',
  styleUrls: ['./update-image.component.scss']
})
export class UpdateImageComponent implements OnInit {

  
  @Input() imgList: string[];
  @Output() bindToParent = new EventEmitter<string[]>();
  form: FormGroup;

  constructor(
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    this.form = this.fb.group({
      list: this.fb.array([])
    });

    const formArray = this.form.get('list') as FormArray;
    this.imgList.forEach(x => formArray.push(new FormControl(false)));
  }

  submit() {
    const result = Object.assign({},
      this.form.value, {
        list: this.imgList
          .filter((x, i) => !!this.form.value.list[i])
      });
    this.bindToParent.emit(result.list);
  }

  sendUrls() {
    this.bindToParent.emit();
  }

  onChange(event) {
    const list = <FormArray>this.form.get('list') as FormArray;
  
    if(event.checked) {
      list.push(new FormControl(event.source.value))
    } else {
      const i = list.controls.findIndex(x => x.value === event.source.value);
      list.removeAt(i);
    }

    this.submit();
  }
}
