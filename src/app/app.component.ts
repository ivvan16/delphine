import { ChangeDetectorRef, Component, HostListener } from '@angular/core';
import { fromEvent } from "rxjs";
import { debounceTime, map, startWith, tap } from "rxjs/operators";
import { environment } from "src/environments/environment";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'delphyne';

  teamMembers = [
    {
      name: 'Dmitry',
      role: 'Project Manager',
      position: {
        left: '-2rem',
        top: '12rem'
      }
    },
    {
      name: 'Diana',
      role: 'Designer',
      position: {
        left: '0.5rem',
        top: '34rem'
      }
    },
    {
      name: 'John',
      role: 'Frontend Developer',
      position: {
        left: '14rem',
        top: '3rem'
      }
    },
    {
      name: 'Denis',
      role: 'Blockchain Developer',
      position: {
        right: '4rem',
        top: '2rem'
      }
    },
    {
      name: 'Kirill',
      role: 'Backend Developer',
      position: {
        right: '-3.5rem',
        top: '21rem'
      }
    },
    {
      name: 'Vadim',
      role: 'Backend Developer',
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
      position: {
        left: '1rem',
        top: '8rem'
      }
    },
    {
      name: 'Diana',
      role: 'Designer',
      position: {
        left: '1rem',
        bottom: '8rem'
      }
    },
    {
      name: 'John',
      role: 'Frontend Developer',
      position: {
        left: '16rem',
        top: '0rem'
      }
    },
    {
      name: 'Denis',
      role: 'Blockchain Developer',
      position: {
        right: '1rem',
        top: '8rem'
      }
    },
    {
      name: 'Kirill',
      role: 'Backend Developer',
      position: {
        right: '1rem',
        bottom: '8rem'
      }
    },
    {
      name: 'Vadim',
      role: 'Backend Developer',
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

  mobileNavigationClicked = false;

  constructor(private cd: ChangeDetectorRef) {

  }
}
