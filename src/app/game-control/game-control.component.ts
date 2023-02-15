import { Component, OnInit, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-game-control",
  templateUrl: "./game-control.component.html",
  styleUrls: ["./game-control.component.css"],
})
export class GameControlComponent implements OnInit {
  counter = 0;
  @Output() emitter = new EventEmitter<number>();
  gameInProgress = false;
  intervalId: any;

  constructor() {}

  ngOnInit(): void {}

  startGame() {
    this.intervalId = setInterval(() => {
      this.counter++;
      this.emitter.emit(this.counter);
    }, 1000);
  }

  stopGame() {
    clearInterval(this.intervalId);
  }
}
