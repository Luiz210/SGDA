import { Component } from '@angular/core';
import { NotificationService } from '../service/notification.service';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.scss']
})
export class NotificationComponent {
message: string = '';

constructor(private notificationService: NotificationService){}

ngOnInit(): void{
  this.notificationService.message$.subscribe(
    message => this.message = message
  );
}
}
