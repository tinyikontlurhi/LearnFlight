import { MenuConfigService } from '../../core/services/menu-config.service';
import { SidebarService } from './../../core/services/sidebar.service';
import { Component, OnInit, Output, EventEmitter, OnDestroy } from '@angular/core';
import { NgbPanelChangeEvent } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-managment-console',
  templateUrl: './managment-console.component.html',
  styleUrls: ['./managment-console.component.css']
})
export class ManagmentConsoleComponent implements OnInit, OnDestroy {
  disabled = false;
  sidebarOption = "overlay";
  menuItems: any;

  @Output() messageEvent = new EventEmitter<string>();
  constructor(
    private sidebarSevice: SidebarService,
    private menuConfigService: MenuConfigService
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
    this.menuItems = this.menuConfigService.portalMenuItems;

    console.log(this.menuItems);
  }

  beforeChange($event: NgbPanelChangeEvent) {
      if ($event.panelId === 'preventchange-2') {
          $event.preventDefault();
      }

      if ($event.panelId === 'preventchange-3' && $event.nextState === false) {
          $event.preventDefault();
      }
  }

  /**
   * update the the sidebar settings when exiting the main console component
   * The sidebar should be set to full when exiting this component
   */
  ngOnDestroy() {
    this.sidebarSevice.setSidebarOptions({
      theme: 'light', // two possible values: light, dark
      dir: 'ltr', // two possible values: ltr, rtl
      layout: 'vertical', // fixed value. shouldn't be changed.
      sidebartype: 'full', // four possible values: full, iconbar, overlay, mini-sidebar
      sidebarpos: 'fixed', // two possible values: fixed, absolute
      headerpos: 'fixed', // two possible values: fixed, absolute
      boxed: 'full', // two possible values: full, boxed
      navbarbg: 'skin1', // six possible values: skin(1/2/3/4/5/6)
      sidebarbg: 'skin6', // six possible values: skin(1/2/3/4/5/6)
      logobg: 'skin6' // six possible values: skin(1/2/3/4/5/6)
    });
  }
}
