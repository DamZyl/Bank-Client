import {Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {AccountService} from '../../../../_shared/services/account.service';
import {Router} from '@angular/router';
import {Guid} from '../../../../_shared/models/guid';
import {AuthService} from '../../../../_shared/services/auth.service';
import {MatTableDataSource} from '@angular/material/table';
import {AccountDetail} from '../../../../_shared/models/account-detail';

@Component({
  selector: 'app-accounts-list',
  templateUrl: './accounts-list.component.html',
  styleUrls: ['./accounts-list.component.css']
})
export class AccountsListComponent implements OnInit {
  accounts: any;
  customerId: Guid;
  displayedColumns: string[] = ['index', 'customerId', 'accountNumber', 'balance', 'actions'];

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  constructor(private accountService: AccountService,
              private authService: AuthService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.customerId = this.getCustomerId();
    this.accounts = this.getAccountsForCustomer();
  }

  getAccountsForCustomer() {
    this.accountService.getAccountForCustomer(this.customerId).subscribe(response => {
      // @ts-ignore
      this.accounts = new MatTableDataSource<AccountDetail>(response);
      this.accounts.paginator = this.paginator;
    }, error => {
      console.log(error);
    });
  }

  applyFilter(filterValue: string) {
    this.accounts.filter = filterValue.trim().toLowerCase();
  }


  getDetail(account: any) {
    this.router.navigate(['/customer', 'accounts', 'detail', account.id]);
  }

  deleteAccount(account: any) {
    this.accountService.deleteAccount(account.customerId, account.id).subscribe(response => {
      console.log(response);
    }, error => {
      console.log(error);
    });
    window.location.reload();
  }

  getCustomerId() {
    return this.authService.getUserId();
  }
}
