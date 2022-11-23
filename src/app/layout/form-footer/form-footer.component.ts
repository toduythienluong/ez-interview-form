import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'form-footer',
  templateUrl: './form-footer.component.html',
  styleUrls: ['./form-footer.component.css']
})
export class FormFooterComponent {
  private navigationPaths: string[] = ["/", "/interview-one", "/interview-two", "/interview-three"];
  private index = 0;
  constructor(private router: Router) {
    this.router.events.subscribe((event: any) => {
      this.index = this.navigationPaths.indexOf(router.url);
    });
  }

  back() {
    if (this.index == 0)
      return;
    this.index = this.index - 1;
    this.router.navigate([this.navigationPaths[this.index]]);
  }
  next() {
    if (this.index == this.navigationPaths.length - 1)
      return;
    this.index = this.index + 1;
    this.router.navigateByUrl(this.navigationPaths[this.index]);
  }
}
