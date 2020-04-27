import {Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {BankService} from '../../../../_shared/services/bank.service';
import {AccountService} from '../../../../_shared/services/account.service';
import {Router} from '@angular/router';
import {MatDialog, MatDialogConfig} from '@angular/material/dialog';
import {MatTableDataSource} from '@angular/material/table';
import {Account} from '../../../../_shared/models/account';
import {CreateAccountComponent} from './create-account/create-account.component';

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
    this.router.navigate(['/employee', 'accounts', 'detail', account.id]);
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
      data => this.accountService.createAccount(data).subscribe(response => {
        window.location.reload();
      }, error => {
        console.log(error);
      })
    );
  }
}
