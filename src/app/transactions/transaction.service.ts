import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';

@Injectable()
export class TransactionService {

    constructor(private firebase: AngularFireDatabase) { }

    getData() {
        return this.firebase.list('transactions').valueChanges();
    }

}
