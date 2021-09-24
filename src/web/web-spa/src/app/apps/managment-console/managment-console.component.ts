import { SidebarService } from './../../core/services/sidebar.service';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { NgbPanelChangeEvent } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-managment-console',
  templateUrl: './managment-console.component.html',
  styleUrls: ['./managment-console.component.css']
})
export class ManagmentConsoleComponent implements OnInit {
  disabled = false;
  sidebarOption = "overlay";

  @Output() messageEvent = new EventEmitter<string>();
  constructor(
    private sidebarSevice: SidebarService
  ) { 
    this.sidebarSevice.setSidebarOptions({
      theme: 'light', // two possible values: light, dark
      dir: 'ltr', // two possible values: ltr, rtl
      layout: 'vertical', // fixed value. shouldn't be changed.
      sidebartype: 'overlay', // four possible values: full, iconbar, overlay, mini-sidebar
      sidebarpos: 'fixed', // two possible values: fixed, absolute
      headerpos: 'fixed', // two possible values: fixed, absolute
      boxed: 'full', // two possible values: full, boxed
      navbarbg: 'skin1', // six possible values: skin(1/2/3/4/5/6)
      sidebarbg: 'skin6', // six possible values: skin(1/2/3/4/5/6)
      logobg: 'skin6' // six possible values: skin(1/2/3/4/5/6)
    });
  }

  ngOnInit(): void {
  }

  sendMessage() {
    this.messageEvent.emit(this.sidebarOption);
  }

  beforeChange($event: NgbPanelChangeEvent) {
      if ($event.panelId === 'preventchange-2') {
          $event.preventDefault();
      }

      if ($event.panelId === 'preventchange-3' && $event.nextState === false) {
          $event.preventDefault();
      }
  }
}
