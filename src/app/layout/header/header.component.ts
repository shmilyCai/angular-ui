import { Component, OnInit } from '@angular/core';

import { MessageService } from '../../service/message.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  nums:any

  constructor(private messageService: MessageService) {}

  ngOnInit() {
    this.getNums();
  }

  getNums():void{
    this.nums =  this.messageService.get();
  }

 
}
