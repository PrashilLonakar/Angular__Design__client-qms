import { Component, OnInit, ElementRef } from "@angular/core";
import { FormGroup, Validators, FormBuilder } from "@angular/forms";
import { MasterService } from "../../../core/service/master.service";
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { ToastrService } from 'ngx-toastr';
import { Router, ActivatedRoute } from "@angular/router";
import { Location } from "@angular/common";
import { MessageConstant } from '../../../utils/message-constant';
import { ResponseModel } from '../../../utils/models/response';
import { ErrorModel } from '../../../utils/models/error';

@Component({
  selector: 'app-add-edit',
  templateUrl: './add-edit.component.html',
  styleUrls: ['./add-edit.component.scss']
})
export class AddEditComponent implements OnInit {
  CompanyForm: FormGroup;
  public messageConstant = MessageConstant;
  isSubmitted : boolean = false;
  isEdit = this.route.snapshot.data.type === "edit" ? true : false;
  isActive : boolean = true;
  title : string = '';
  button : string = '';
  constructor(
    private fb: FormBuilder,
    private masterService : MasterService,
    private router: Router,
    private route: ActivatedRoute,
    private _location: Location,
    private loaderService: NgxUiLoaderService,
    private toastrService: ToastrService,
    private el: ElementRef
  ) { }

  ngOnInit(): void {
    this.title = this.isEdit ? "Update Kiosk" : "Create Kiosk";
    this.button = this.isEdit ? "Update Kiosk" : "Add Kiosk";
    this.CompanyForm = this.fb.group({
      id: [],
      kioskName: ["", Validators.required],
      kioskNo: ["", Validators.required],
      macAddress: ["", Validators.required],
      ipAddress: ["", Validators.required],
      isActive: ['false'],
      userId: [1]
    });

    if (this.isEdit) {
      const id = this.route.snapshot.paramMap.get("id");
      this.masterService.getKioskWithId(id).subscribe(res => {
        const data = res;
        console.log('data',data);
        this.CompanyForm.patchValue({
          id: data.id,
          kioskName:  data.kioskName,
          kioskNo:  data.kioskNo,
          macAddress:  data.macAddress,
          ipAddress:  data.ipAddress,
          isActive:  String(data.isActive),
          userId: 1
        });
      });
    }
  }

  public hasError = (controlName: string, errorName: string) => {
    return this.CompanyForm.controls[controlName].hasError(errorName);
  };

  submitForm(){
    this.isSubmitted = true;
    if(this.CompanyForm.invalid){
      return;
    }
    console.log('this.CompanyForm',this.CompanyForm.value);
    let obj = {
      ...this.CompanyForm.value,
      isActive : Boolean(this.CompanyForm.value.isActive)
    };

    if (!this.isEdit) {
      this.loaderService.start();
      delete obj['id'];
      this.masterService.createKiosk(obj).subscribe(
        (response: ResponseModel) => {
          if (response) {
            let data = response;
            this.router.navigate(['/master/kiosk']);
            this.loaderService.stop();
            this.toastrService.success(
              this.messageConstant.kioskAddedSuccess
            );
          }
        },
        (err) => {
          this.loaderService.stop();
          if (err.error) {
            const error: ResponseModel = err.error;
            this.toastrService.error(error.message, '');
          } else {
            this.toastrService.error(this.messageConstant.unknownError, '');
          }
        }
      );
    } else {
      this.loaderService.stop();
      this.masterService.modifyKiosk(obj).subscribe(
        (response: ResponseModel) => {
          if (response) {
            let data = response;
            this.router.navigate(['/master/kiosk']);
            this.loaderService.stop();
            this.toastrService.success(
              this.messageConstant.kioskUpdatedSuccess
            );
          }
        },
        (err) => {
          this.loaderService.stop();
          if (err.error) {
            const error: ResponseModel = err.error;
            this.toastrService.error(error.message, '');
          } else {  
            this.toastrService.error(this.messageConstant.unknownError, '');
          }
        }
      );
    }
  }
}
