import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'delphine';

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
  ]
}
