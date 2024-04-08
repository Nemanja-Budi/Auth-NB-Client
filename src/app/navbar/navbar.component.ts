import { Component, inject } from '@angular/core';
import { AccountService } from '../account/account.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  accountService: AccountService = inject(AccountService);

  onLogout(): void {
    this.accountService.logout();
  }
}
