import { Component, OnInit } from '@angular/core';
import { Transaction } from './transactions/transaction.model';
import { TransactionService } from './transactions/transaction.service';
import { Observable } from 'rxjs/Observable';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {

    transactions: Observable<any[]>;

    constructor(private transactionService: TransactionService) {
        this.transactions = this.transactionService.getData();
    }
}
