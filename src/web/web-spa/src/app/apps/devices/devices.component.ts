import { DeviceService } from './../../core/services/device.service';
import { DatePipe } from '@angular/common';
import { HttpEventType } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-devices',
  templateUrl: './devices.component.html',
  styleUrls: ['./devices.component.css']
})
export class DevicesComponent implements OnInit {


  deviceList: any[] = [];
  filterArray: any[] = [];
  userDetail: any | null = null;

  config: any;
  editUser: FormGroup | null = null;
  editDevice: any;

  joiningDate: string | null = null;


  page = 1;
  pageSize = 7;

  _searchTerm = '';



  constructor(private fb: FormBuilder, private modalService: NgbModal, 
              private datePipe: DatePipe, private deviceService: DeviceService) {

      this.deviceService.findAllDevices().subscribe((data) => {
        if (data.type === HttpEventType.Response) {
            console.log(data.body);
          this.deviceList = data.body;
        }
      })
      this.filterArray = this.deviceList;
  }

  ngOnInit() {
    this.editDevice = this.fb.group({
      name: [''],
      Id: [''],
      template: ['']
    });
  }

  //search...
  get searchTerm(): string {
      return this._searchTerm;
  }
  set searchTerm(val: string) {
      this._searchTerm = val;
      this.filterArray = this.filter(val);
  }

  filter(v: string) {
      return this.deviceList.filter(x => x.name.toLowerCase().
          indexOf(v.toLowerCase()) !== -1 || x.Id.toLowerCase().indexOf(v.toLowerCase()) !== -1);
  }


  // validation...
  ValidationMessage =
      [
          {
              name: { required: 'Device name is required.' }
          }, {
              Id: { required: 'Device id is required.' }
          }, {
              template: { required: 'Device template is required.' }
          }
      ];

  formsErrors = [];


  logValidationErrors(group: FormGroup) {

  }

  // delete user...
  deleteDevice(id: number): void {
      if (this.filterArray) {
          this.filterArray = this.filterArray.filter(device => device.Id !== id);
      }
  }


  // open model...
  openModal(targetModal: NgbModal, user: any | null) {
      this.modalService.open(targetModal, {
          centered: true,
          backdrop: 'static'
      });


      if (user != null) {

          if (user.DateOfJoining) {
              this.joiningDate = this.datePipe.
                  transform(new Date(user.DateOfJoining), 'yyyy-MM-dd');
          }
          this.userDetail = user;
          this.editUser?.patchValue({
              Name: user.Name,
              Position: user.Position,
              Email: user.Email,
              Mobile: user.Mobile,
              DateOfJoining: user.DateOfJoining,
              Salary: user.Salary,
              Projects: user.Projects,
          });
      }

  }

  // on submit data rom model...
  onSubmit() {
    this.deviceService.create(this.editDevice.value).subscribe(data => {

    });
  }

  // close model...
  closeBtnClick() {
      this.modalService.dismissAll();
      this.ngOnInit();
  }

  get Id() {
    return this.editDevice?.get('Id');
  }

  get name() {
    return this.editDevice?.get('name');
  }

  get template() {
    return this.editDevice?.get('template');
  }

}
