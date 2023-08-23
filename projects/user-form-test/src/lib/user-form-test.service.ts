import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserFormTestService {

  constructor() { }

  
  fetchFormData(user: any): Observable<any> {
    return of(user);
  }
}
