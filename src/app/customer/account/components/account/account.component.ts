import {Component, OnInit, ViewChild} from '@angular/core';
import {AccountDetail} from '../../../../_shared/models/account-detail';
import {MatPaginator} from '@angular/material/paginator';
import {ActivatedRoute} from '@angular/router';
import {AccountService} from '../../../../_shared/services/account.service';
import {MatTableDataSource} from '@angular/material/table';
import {Transaction} from '../../../../_shared/models/transaction';
import {MatDialog, MatDialogConfig} from '@angular/material/dialog';
import {CreateTransactionComponent} from './create-transaction/create-transaction.component';
import {TransactionService} from '../../../../_shared/services/transaction.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {
  displayedColumns: string[] = ['index', 'date', 'transactionType', 'description', 'value'];
  accountDetail: AccountDetail;
  transactions: any;
  id: any;

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  constructor(private activateRoute: ActivatedRoute,
              private accountService: AccountService,
              private transactionService: TransactionService,
              public dialog: MatDialog) { }

  ngOnInit(): void {
    this.id = this.activateRoute.snapshot.params.id;

    this.getAccounts(this.id);
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

  openDialog(): void {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;

    const dialogRef = this.dialog.open(CreateTransactionComponent, dialogConfig);

    dialogRef.afterClosed().subscribe(
      date => {
        date.accountId = this.id;
        this.transactionService.createTransaction(date).subscribe(response => {
          window.location.reload();
        }, error => {
          console.log(error);
        });
      }
    );
  }
}
