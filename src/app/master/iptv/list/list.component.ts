import { Component, OnInit } from "@angular/core";
import { MasterService } from "../../../core/service/master.service";
import { NgxUiLoaderService } from "ngx-ui-loader";
import { ToastrService } from "ngx-toastr";
import { Router, ActivatedRoute } from "@angular/router";
import { Location } from "@angular/common";
import { MessageConstant } from "../../../utils/message-constant";
import { ResponseModel } from "../../../utils/models/response";
import { ErrorModel } from "../../../utils/models/error";

declare interface TableData {
  headerRow: string[];
  dataRows: string[][];
}

@Component({
  selector: "app-list",
  templateUrl: "./list.component.html",
  styleUrls: ["./list.component.css"],
})
export class ListComponent implements OnInit {
  public tableData1: TableData;
  public tableData2: TableData;
  iptvList: any;
  public messageConstant = MessageConstant;

  constructor(
    private masterService: MasterService,
    private router: Router,
    private route: ActivatedRoute,
    private _location: Location,
    private loaderService: NgxUiLoaderService,
    private toastrService: ToastrService
  ) {}
  ngOnInit() {
    this.getIptv();
    this.tableData1 = {
      headerRow: ["ID", "Name", "Country", "City", "Salary"],
      dataRows: [
        ["1", "Dakota Rice", "Niger", "Oud-Turnhout", "$36,738"],
        ["2", "Minerva Hooper", "Curaçao", "Sinaai-Waas", "$23,789"],
        ["3", "Sage Rodriguez", "Netherlands", "Baileux", "$56,142"],
        ["4", "Philip Chaney", "Korea, South", "Overland Park", "$38,735"],
        ["5", "Doris Greene", "Malawi", "Feldkirchen in Kärnten", "$63,542"],
        ["6", "Mason Porter", "Chile", "Gloucester", "$78,615"],
      ],
    };
    this.tableData2 = {
      headerRow: ["ID", "Name", "Salary", "Country", "City"],
      dataRows: [
        ["1", "Dakota Rice", "$36,738", "Niger", "Oud-Turnhout"],
        ["2", "Minerva Hooper", "$23,789", "Curaçao", "Sinaai-Waas"],
        ["3", "Sage Rodriguez", "$56,142", "Netherlands", "Baileux"],
        ["4", "Philip Chaney", "$38,735", "Korea, South", "Overland Park"],
        ["5", "Doris Greene", "$63,542", "Malawi", "Feldkirchen in Kärnten"],
        ["6", "Mason Porter", "$78,615", "Chile", "Gloucester"],
      ],
    };
  }

  getIptv() {
    this.masterService.getIptv().subscribe(
      (response: ResponseModel) => {
        if (response) {
          this.iptvList = response;
          console.log(response);

          //   this.tableData1 = {
          //     headerRow: [ 'Sr.', 'Kiosk No.', 'Kiosk Name', 'Mac Address', 'Ip Address' , 'Action'],
          //     dataRows: data
          // };
          this.loaderService.stop();
        }
      },
      (err: ErrorModel) => {
        this.loaderService.stop();
        if (err.error) {
          const error: ResponseModel = err.error;
          //this._toastrService.error(error.message, '');
        } else {
          //this._toastrService.error(this.messageConstant.unknownError, '');
        }
      }
    );
  }

  onDeleteIptv(id) {
    if (id) {
      this.masterService.deleteIptv(id).subscribe(
        (response: ResponseModel) => {
          if (response) {
            this.toastrService.success(
              this.messageConstant.kioskDeletedSuccess,
              ""
            );
            this.getIptv();
          }
        },
        (err: ErrorModel) => {
          this.loaderService.stop();
          if (err.error) {
            const error: ResponseModel = err.error;
            this.toastrService.error(error.message, "");
          } else {
            this.toastrService.error(this.messageConstant.unknownError, "");
          }
        }
      );
    } else {
      return;
    }
  }
}
