import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { nanoid } from 'nanoid'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  public newFormGroup: FormGroup  = new FormGroup ( {
    name: new FormControl('', [Validators.required, Validators.minLength(4)]),
    price: new FormControl(null, [Validators.required, Validators.min(0)]),
    id: new FormControl(nanoid()),
    categories: new FormControl([])
  })

  public generateButtonClick(): void {
     this.newFormGroup.get('id')?.setValue(nanoid());
  }

  public onSubmitButtonClick(): void {
    if (this.newFormGroup.invalid === true) {
      alert('This form is not valid!')
    } else {
      console.log(this.newFormGroup);
      
    }
  }
}
