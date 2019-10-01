import { Component } from "@angular/core";

@Component({
  selector: "ac-root",
  template: `
    <router-outlet></router-outlet>
  `,
  styles: []
})
export class AppComponent {
  title = "angular-cards";
}
