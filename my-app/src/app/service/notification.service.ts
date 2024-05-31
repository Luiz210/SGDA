import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  constructor() { }

  private messageSubject = new BehaviorSubject<string>('');
  message$ = this.messageSubject.asObservable();
  private timeoutHandle: any;

  showMessage(message: string) {
    this.messageSubject.next(message);
    if (this.timeoutHandle) {
      clearTimeout(this.timeoutHandle);
    }
    this.timeoutHandle = setTimeout(() => {
      this.messageSubject.next('');
    }, 3000);
  }
}
