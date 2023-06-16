import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { HandlePortalOrdersService } from 'src/app/services/handle-portal-orders.service';

@Component({
  selector: 'app-orders-dash',
  templateUrl: './orders-dash.component.html',
  styleUrls: ['./orders-dash.component.css'],
})
export class OrdersDashComponent implements OnInit {
  public displayedColumns: string[] = [
    'order',
    'client',
    'address_name',
    'address',
    'location',
    'zip',
    'total',
    'date',
    'actions'
  ];
  public dataSource: any;
  public query: {
    "fields": string[];
    "conditions": Record<string, string>
  } = {
    fields: ["PEDIDO", "CLIENTE", "DOM_ENVIO", "NOM_ENVIO", "POB_ENVIO", "CODPOST_ENVIO", "TOTAL", "FECHA_INSERT"],
    conditions: {
      ENVIADO: "E"
    }
  }

  constructor(private _handlePortalOrdersService: HandlePortalOrdersService) {
  }

  ngOnInit(): void {
    this._handlePortalOrdersService.getOrders(this.query).subscribe((data) => {
      console.log(data)
      this.dataSource = new MatTableDataSource<any>(data);
      // this.dataSource.paginator = this.paginator;
    });
  }
}
