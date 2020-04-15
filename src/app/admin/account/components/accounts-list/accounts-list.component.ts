import { Component, OnInit } from '@angular/core';
import {Account} from '../../../../_shared/models/account';
import {BankService} from '../../../../_shared/services/bank.service';

@Component({
  selector: 'app-accounts-list',
  templateUrl: './accounts-list.component.html',
  styleUrls: ['./accounts-list.component.css']
})
export class AccountsListComponent implements OnInit {
  accounts: Account[];

  constructor(private bankService: BankService) { }

  ngOnInit(): void {
    this.getAccounts();
  }

  getAccounts() {
    this.bankService.getBankInfo().subscribe(response => {
      this.accounts = response.accounts;
    }, error => {
      console.log(error);
    });
  }
}
