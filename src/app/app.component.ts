import { Component, OnDestroy } from '@angular/core';
import { MatSnackBar } from "@angular/material/snack-bar";
import { fromEvent, of, Subject } from "rxjs";
import { debounceTime, delay, filter, finalize, map, startWith, switchMap, takeUntil, tap } from "rxjs/operators";
import { environment } from "src/environments/environment";
import { ApiService } from "./services/api.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnDestroy {
  destroy = new Subject();
  title = 'delphyne';

  mail = '';
  mailSendLoading = false;

  teamMembers = [
    {
      name: 'Dmitry',
      role: 'Project Manager',
      imageUrl: 'https://avatars.dicebear.com/api/pixel-art/Dmitry.svg',
      position: {
        left: '-2rem',
        top: '12rem'
      }
    },
    {
      name: 'Diana',
      role: 'Designer',
      imageUrl: 'https://avatars.dicebear.com/api/pixel-art/Denis.svg',
      position: {
        left: '0.5rem',
        top: '34rem'
      }
    },
    {
      name: 'John',
      role: 'Frontend Developer',
      imageUrl: 'https://avatars.dicebear.com/api/pixel-art/John.svg',
      position: {
        left: '14rem',
        top: '3rem'
      }
    },
    {
      name: 'Denis',
      role: 'Blockchain Developer',
      imageUrl: 'https://avatars.dicebear.com/api/pixel-art/Deniska.svg',
      position: {
        right: '4rem',
        top: '2rem'
      }
    },
    {
      name: 'Kirill',
      role: 'Backend Developer',
      imageUrl: 'https://avatars.dicebear.com/api/pixel-art/Kirill.svg',
      position: {
        right: '-3.5rem',
        top: '21rem'
      }
    },
    {
      name: 'Vadim',
      role: 'Backend Developer',
      imageUrl: 'https://avatars.dicebear.com/api/pixel-art/Vadim.svg',
      position: {
        right: '14rem',
        bottom: '3rem'
      }
    }
  ];

  teamMobileMembers = [
    {
      name: 'Dmitry',
      role: 'Project Manager',
      imageUrl: 'https://avatars.dicebear.com/api/pixel-art/Dmitry.svg',
      position: {
        left: '1rem',
        top: '8rem'
      }
    },
    {
      name: 'Diana',
      role: 'Designer',
      imageUrl: 'https://avatars.dicebear.com/api/pixel-art/Denis.svg',
      position: {
        left: '1rem',
        bottom: '8rem'
      }
    },
    {
      name: 'John',
      role: 'Frontend Developer',
      imageUrl: 'https://avatars.dicebear.com/api/pixel-art/John.svg',
      position: {
        left: '16rem',
        top: '0rem'
      }
    },
    {
      name: 'Denis',
      role: 'Blockchain Developer',
      imageUrl: 'https://avatars.dicebear.com/api/pixel-art/Deniska.svg',
      position: {
        right: '1rem',
        top: '8rem'
      }
    },
    {
      name: 'Kirill',
      role: 'Backend Developer',
      imageUrl: 'https://avatars.dicebear.com/api/pixel-art/Kirill.svg',
      position: {
        right: '1rem',
        bottom: '8rem'
      }
    },
    {
      name: 'Vadim',
      role: 'Backend Developer',
      imageUrl: 'https://avatars.dicebear.com/api/pixel-art/Vadim.svg',
      position: {
        left: '16rem',
        bottom: '0rem'
      }
    }
  ];

  factsData = [
    {
      position: {top: '10rem', left: '8rem'},
      text: 'NEAR’s fast (1 to 2 seconds) & budget-friendly transactions'
    },
    {
      position: {top: '0rem', left: '25rem'},
      text: 'Arts saved securely in Arweave'
    },
    {
      position: {bottom: '1rem', left: '34rem'},
      text: 'Marketplace fee at 5% per transaction'
    }
  ];

  assetsPath = environment.assetsPath;

  scroll(el: HTMLElement, isMobile?: boolean) {
    if (isMobile) {
      this.mobileNavigationClicked = false;
    }

    el.scrollIntoView({behavior: 'smooth'});
  }

  isMobile = fromEvent(window, 'resize')
    .pipe(
      debounceTime(100),
      startWith({ target: { innerWidth: window.innerWidth }}),
      map((e: any) => e.target.innerWidth < 500),
    );

  mobileNavigationInitialized = false;
  mobileNavigationClicked = false;

  ngOnDestroy() {
    this.destroy.next();
  }

  constructor(
    private apiService: ApiService,
    private snackBar: MatSnackBar
  ) {}

  sendEmail(mail: string) {
    of(mail)
      .pipe(
        takeUntil(this.destroy),
        filter(mail => !!mail),
        tap(() => this.mailSendLoading = true),
        delay(500),
        switchMap(mail => this.apiService.sendMail(mail)),
        finalize(() => {
          this.mailSendLoading = false;
          this.snackBar.open('Email is successfully added.', '', { duration: 3000 });
        })
      )
      .subscribe();
  }
}
