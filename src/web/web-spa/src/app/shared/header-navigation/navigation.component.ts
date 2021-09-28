import { MenuConfigService } from './../../core/services/menu-config.service';
import { Component, AfterViewInit, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
import {
  NgbModal,
} from '@ng-bootstrap/ng-bootstrap';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';
declare var $: any;

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html'
})
export class NavigationComponent implements AfterViewInit {
  @Output() toggleSidebar = new EventEmitter<void>();

  public config: PerfectScrollbarConfigInterface = {};
  public province = 'Gauteng';
  public selectedDistrict = 'District';
  public showSearch = false;
  public email: string | null = '';
  public organizationName: string | null = '';
  public menuItems: any;

  constructor(
    private modalService: NgbModal, 
    private menuConfigService: MenuConfigService,
    // private translate: TranslateService,
    private router: Router) {

   // translate.setDefaultLang('en');

  }

  ngOnInit() {
    this.email = sessionStorage.getItem('email');
    this.organizationName = sessionStorage.getItem('name');

    this.menuItems = this.menuConfigService.portalMenuItems;
  }

  // This is for Notifications
  notifications: Object[] = [
    {
      btn: 'btn-danger',
      icon: 'ti-link',
      title: 'Luanch Admin',
      subject: 'Just see the my new admin!',
      time: '9:30 AM'
    },
    {
      btn: 'btn-success',
      icon: 'ti-calendar',
      title: 'Event today',
      subject: 'Just a reminder that you have event',
      time: '9:10 AM'
    },
    {
      btn: 'btn-info',
      icon: 'ti-settings',
      title: 'Settings',
      subject: 'You can customize this template as you want',
      time: '9:08 AM'
    },
    {
      btn: 'btn-primary',
      icon: 'ti-user',
      title: 'Pavan kumar',
      subject: 'Just see the my admin!',
      time: '9:00 AM'
    }
  ];

  // This is for Mymessages
  mymessages: Object[] = [
    {
      useravatar: 'assets/images/users/1.jpg',
      status: 'online',
      from: 'Pavan kumar',
      subject: 'Just see the my admin!',
      time: '9:30 AM'
    },
    {
      useravatar: 'assets/images/users/2.jpg',
      status: 'busy',
      from: 'Sonu Nigam',
      subject: 'I have sung a song! See you at',
      time: '9:10 AM'
    },
    {
      useravatar: 'assets/images/users/2.jpg',
      status: 'away',
      from: 'Arijit Sinh',
      subject: 'I am a singer!',
      time: '9:08 AM'
    },
    {
      useravatar: 'assets/images/users/4.jpg',
      status: 'offline',
      from: 'Pavan kumar',
      subject: 'Just see the my admin!',
      time: '9:00 AM'
    }
  ];

  help: Object = [
    {
      name: 'Get Started',
      page: 'get started'
    },
    {
      name: 'Documentation',
      page: 'documentation'
    },
    {
      name: 'Community',
      page: 'community'
    },
    {
      name: 'Contact a partner',
      page: 'contact-partner'
    },
    {
      name: 'Technical support',
      page: 'technical-support'
    },
    {
      name: 'Give feedback',
      page: 'give-feedback'
    }
]
  public selectedLanguage: any = {
    province: 'Gauteng',
    code: 'en',
    type: 'US',
    icon: 'za'
  }

  public districts = ['Ekuruleni', 'Johannesburg South', 'Johannesburg North', 'Sidibeng', 'Tswane'];

  public provinces: any[] = [{
    province: 'Kwa Zulu Natal',
    code: 'en',
    type: 'ZA',
    icon: 'za'
  },
  {
    province: 'Limpopo',
    code: 'es',
    icon: 'es'
  },
  {
    province: 'Western Cape',
    code: 'fr',
    icon: 'fr'
  },
  {
    province: 'Northern Cape',
    code: 'de',
    icon: 'de'
  }]

  ngAfterViewInit() { }

  changeDistrict(district: any) {
    this.selectedDistrict = district;
  }

  changeProvince(province: any) {
    this.province = province.province
  }

  logout() {
    sessionStorage.clear();
    this.router.navigate(['/authentication/login']);
  }
}
