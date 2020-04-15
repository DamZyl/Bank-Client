import {Component, OnInit, ViewChild} from '@angular/core';
import {AccountService} from '../../../../_shared/services/account.service';
import {AccountDetail} from '../../../../_shared/models/account-detail';
import {ActivatedRoute} from '@angular/router';
import {MatTableDataSource} from '@angular/material/table';
import {Transaction} from '../../../../_shared/models/transaction';
import {MatPaginator} from '@angular/material/paginator';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {
  displayedColumns: string[] = ['index', 'date', 'transactionType', 'description', 'value'];
  accountDetail: AccountDetail;
  transactions: any;

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  constructor(private activateRoute: ActivatedRoute,
              private accountService: AccountService) { }

  ngOnInit(): void {
    const id = this.activateRoute.snapshot.params.id;

    this.getAccounts(id);
  }

  getAccounts(id) {
    this.accountService.getAccount(id).subscribe(response => {
      this.accountDetail = response;
      this.transactions = new MatTableDataSource<Transaction>(response.transactions);
      this.transactions.paginator = this.paginator;
      console.log(response);
    }, error => {
      console.log(error);
    });
  }
}
