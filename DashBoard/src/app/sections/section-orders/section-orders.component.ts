import { Component, OnInit } from '@angular/core';
import { Order } from 'src/app/shared/order';
import { SalesDataService } from '../../services/sales-data.service';


@Component({
  selector: 'app-section-orders',
  templateUrl: './section-orders.component.html',
  styleUrls: ['./section-orders.component.css']
})
export class SectionOrdersComponent implements OnInit {

  // orders: Order[] = [
  //   {id: 1, customer:
  //     {id: 1, name: 'Main St Bakery', state: 'CO', email: 'mainst@example.com'},
  //     total: 230, placed: new Date(2017, 12, 1), fulfilled: new Date(2017, 12, 3)},
  //   {id: 2, customer:
  //     {id: 1, name: 'Main St Bakery', state: 'CO', email: 'mainst@example.com'},
  //     total: 230, placed: new Date(2017, 12, 1), fulfilled: new Date(2017, 12, 3)},
  //   {id: 3, customer:
  //     {id: 1, name: 'Main St Bakery', state: 'CO', email: 'mainst@example.com'},
  //     total: 230, placed: new Date(2017, 12, 1), fulfilled: new Date(2017, 12, 3)},
  //   {id: 4, customer:
  //     {id: 1, name: 'Main St Bakery', state: 'CO', email: 'mainst@example.com'},
  //     total: 230, placed: new Date(2017, 12, 1), fulfilled: new Date(2017, 12, 3)},
  //   {id: 5, customer:
  //     {id: 1, name: 'Main St Bakery', state: 'CO', email: 'mainst@example.com'},
  //     total: 230, placed: new Date(2017, 12, 1), fulfilled: new Date(2017, 12, 3)},
  // ];

orders: any;

  total = 0;
  page = 1;
  limit = 20;
  loading = false;

  constructor(private _salesData: SalesDataService) { }

  ngOnInit() {
    this.getOrders();
  }

  getOrders(): void {
    this._salesData.getOrders(this.page, this.limit)
      .subscribe(res => {
        console.log('Result from getOrders: ', res);
        this.orders = res['page']['data'];
        this.total = res['page'].total;
        this.loading = false;
      });
  }


  goToPrevious(): void {
    // console.log('Previous Button Clicked!');
    this.page--;
    this.getOrders();
  }

  goToNext(): void {
    // console.log('Next Button Clicked!');
    this.page++;
    this.getOrders();
  }

  goToPage(n: number): void {
    this.page = n;
    this.getOrders();
  }
}
