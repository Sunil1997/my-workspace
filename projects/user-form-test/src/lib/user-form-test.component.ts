import { Component, EventEmitter, Input, Output } from '@angular/core';
import { UserFormTestService } from './user-form-test.service';

@Component({
  selector: 'lib-user-form-test',
  templateUrl: './user-from-test.component.html',
  styleUrls: ['./user-from-test.component.css']
})
export class UserFormTestComponent {

  @Input() username: string | undefined;
  @Input() email: string | undefined;
  @Input() dob: Date | undefined;

  @Output() responseEvent = new EventEmitter<any>();


  constructor(private _userService: UserFormTestService) {

  }

  submitForm(form: any) {
    if (form.valid) {
      const userData = {
        username: this.username,
        email: this.email,
        dob: this.dob
      }

      this._userService.fetchFormData(userData)
        .subscribe((res) => {
          this.responseEvent.emit(userData);
        })
    }
  }
}
