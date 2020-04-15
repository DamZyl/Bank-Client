import { Component, OnInit } from '@angular/core';
import {AccountService} from '../../../../_shared/services/account.service';
import {AccountDetail} from '../../../../_shared/models/account-detail';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {
  accountDetail: AccountDetail;

  constructor(private activateRoute: ActivatedRoute,
              private accountService: AccountService) { }

  ngOnInit(): void {
    const id = this.activateRoute.snapshot.params.id;

    this.getAccounts(id);
  }

  getAccounts(id) {
    this.accountService.getAccount(id).subscribe(response => {
      this.accountDetail = response;
      console.log(response);
    }, error => {
      console.log(error);
    });
  }
}
