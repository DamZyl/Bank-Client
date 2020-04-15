import {Component, OnInit, ViewChild} from '@angular/core';
import {BankService} from '../../../../_shared/services/bank.service';
import { MatTableDataSource } from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
import {AccountService} from '../../../../_shared/services/account.service';
import {Router} from '@angular/router';
import {Account} from '../../../../_shared/models/account';
import {MatDialog, MatDialogConfig} from '@angular/material/dialog';
import {CreateAccountComponent} from './create-account/create-account.component';
import {take} from 'rxjs/operators';
// import {MatSort} from '@angular/material/sort';

@Component({
  selector: 'app-accounts-list',
  templateUrl: './accounts-list.component.html',
  styleUrls: ['./accounts-list.component.css']
})
export class AccountsListComponent implements OnInit {
  accounts: any;
  displayedColumns: string[] = ['index', 'customerId', 'accountNumber', 'balance', 'actions'];

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
 // @ViewChild(MatSort, {static: true}) sort: MatSort;

  constructor(private bankService: BankService,
              private accountService: AccountService,
              private router: Router,
              public dialog: MatDialog) { }

  ngOnInit(): void {
    this.getAccounts();
  }

  getAccounts() {
    this.bankService.getBankInfo().subscribe(response => {
      this.accounts = new MatTableDataSource<Account>(response.accounts);
      this.accounts.paginator = this.paginator;
      // this.accounts.sort = this.sort;
    }, error => {
      console.log(error);
    });
  }

  applyFilter(filterValue: string) {
    this.accounts.filter = filterValue.trim().toLowerCase();
  }

  getDetail(account: any) {
    this.accountService.getAccount(account.id).subscribe(response => {
      this.router.navigate(['/admin', 'accounts', 'detail', account.id]);
    }, error => {
      console.log(error);
    });
  }

  deleteAccount(account: any) {
    this.accountService.deleteAccount(account.customerId, account.id).subscribe(response => {
      console.log(response);
    }, error => {
      console.log(error);
    });
    window.location.reload();
  }

  openDialog(): void {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;

    const dialogRef = this.dialog.open(CreateAccountComponent, dialogConfig);

    dialogRef.afterClosed().subscribe(
      data => console.log(data)
    );
  }
}
