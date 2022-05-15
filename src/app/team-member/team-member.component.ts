import { Component, HostListener, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-team-member',
  templateUrl: './team-member.component.html',
  styleUrls: ['./team-member.component.scss']
})
export class TeamMemberComponent implements OnInit {

  @Input() name = "";
  @Input() role = "";
  @Input() imageUrl = "";
  @Input() isMobile = false;

  showTooltip = false;
  constructor() { }

  ngOnInit(): void {
  }

  @HostListener('mouseenter') onEnter() {
    console.log('mouseenter', 'isMobile: ', this.isMobile);
    if (!this.isMobile) {
      this.showTooltip = true;
    }
  }

  @HostListener('mouseleave') onLeave() {
    console.log('mouseleave', 'isMobile: ', this.isMobile);
    if (!this.isMobile) {
      this.showTooltip = false;
    }
  }

  @HostListener('click') onClick() {
    if (this.isMobile) {
      this.showTooltip = !this.showTooltip;
    }
  }
}
