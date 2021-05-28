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
  iptvForm: FormGroup;
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
    this.title = this.isEdit ? "Update Iptv" : "Add Iptv";
    this.button = this.isEdit ? "Update Iptv" : "Add Iptv";
    this.iptvForm = this.fb.group({
      id: [],
      iptvName: ["", Validators.required],
      iptvNo: ["", Validators.required],
      macAddress: ["", Validators.required],
      ipAddress: ["", Validators.required],
      isActive: ["false"],
      deskId : ["", Validators.required],
      userId: [1]
    });

    if (this.isEdit) {
      const id = this.route.snapshot.paramMap.get("id");
      this.masterService.getIptvWithId(id).subscribe(res => {
        const data = res;
        console.log('data',data);
        this.iptvForm.patchValue({
          id: data?.id,
          iptvName:  data?.iptvName,
          iptvNo:  data?.iptvNo,
          macAddress:  data?.macAddress,
          ipAddress:  data?.ipAddress,
          isActive:  String(data?.isActive),
          deskId :  data?.deskId,
          userId: 1
        });
      });
    }
  }

  public hasError = (controlName: string, errorName: string) => {
    return this.iptvForm.controls[controlName].hasError(errorName);
  };

  value(ev){
    console.log(ev);
    console.log(ev.target.value)
  }

  submitForm(){
    console.log('this.iptvForm',this.iptvForm.value);
    this.isSubmitted = true;
    if(this.iptvForm.invalid){
      return;
    }
    if(this.iptvForm.value.isActive === 'false'){
      this.iptvForm.value.isActive = false;
    }else{
      this.iptvForm.value.isActive = true;
    }
    let obj = {
      ...this.iptvForm.value,
    };
    console.log('obj',obj);
    if (!this.isEdit) {
      this.loaderService.start();
      delete obj['id'];
      this.masterService.createIptv(obj).subscribe(
        (response: ResponseModel) => {
          if (response) {
            let data = response;
            this.router.navigate(['/master/iptv']);
            this.loaderService.stop();
            this.toastrService.success(
              this.messageConstant.iptvAddedSuccess
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
      this.masterService.modifyIptv(obj).subscribe(
        (response: ResponseModel) => {
          if (response) {
            let data = response;
            this.router.navigate(['/master/iptv']);
            this.loaderService.stop();
            this.toastrService.success(
              this.messageConstant.iptvUpdatedSuccess
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
