import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'jsj-demo-card',
  templateUrl: './demo-card.component.html',
  styleUrls: ['./demo-card.component.scss']
})
export class DemoCardComponent implements OnInit {

  @Input() demoCardTitle: string = '';
  @Input() demoCardDesc: string = '';
  @Input() demoCardTech: string[] = [];
  @Input() demoCardRoutePath: string = '';
  @Input() demoCardPreviewImgName: string = '';

  private readonly imgLocBasePath: string = 'assets/images/';

  constructor(
    private router: Router
  ) { }

  public ngOnInit(): void {
  }

  public onDemoCardClick(): void {
    // no need for an if since an empty route will
    // just route to the default path which you are
    // already on
    this.router.navigateByUrl(this.demoCardRoutePath);
  }

  public buildImgPath(): string {
    return this.imgLocBasePath + this.demoCardPreviewImgName;
  }

  public getImgAltName(): string {
    return `Preview image for the project ${this.demoCardTitle}`;
  }

}
