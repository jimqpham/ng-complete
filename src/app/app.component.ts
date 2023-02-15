import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  odds: number[] = [];
  evens: number[] = [];

  categorize(val: number) {
    if (val % 2 === 0) {
      this.evens = [...this.evens, val];
    } else {
      this.odds = [...this.odds, val];
    }
  }
}
