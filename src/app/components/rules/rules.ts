import { Component, OnDestroy, OnInit, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-rules',
  imports: [],
  templateUrl: './rules.html',
  styleUrl: './rules.css',
})
export class rules implements OnInit, OnDestroy {
  isVisible: boolean = true;
  countdown: number = 10;
  private timerInterval: any;

  constructor(private cdr: ChangeDetectorRef) {}

  ngOnInit(): void {
    this.startCountdown();
  }

  startCountdown(): void {
    this.timerInterval = setInterval(() => {
      this.countdown--;

      this.cdr.detectChanges();

      if (this.countdown <= 0) {
        clearInterval(this.timerInterval);
      }
    }, 1000);
  }

  acceptRules(): void {
    if (this.countdown === 0) {
      this.isVisible = false;
    }
  }

  ngOnDestroy(): void {
    if (this.timerInterval) {
      clearInterval(this.timerInterval);
    }
  }
}
