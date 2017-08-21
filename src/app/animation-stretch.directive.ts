import {AfterContentInit, Directive, ElementRef, Input} from '@angular/core';


@Directive({
  selector: '[appAnimationStretch]'
})
export class AnimationStretchDirective implements AfterContentInit {

  constructor(private ref: ElementRef) {
  }

  @Input() options;

  fps: 30;
  now;
  then = Date.now();
  interval = 1000 / this.fps;
  delta;

  animate() {
    let first = this.then;
    let counter = 0;

    requestAnimationFrame(this.animate.bind(this));

    this.now = Date.now();
    this.delta = this.now - this.then;

    if (this.delta > this.interval) {
      this.then = this.now - (this.delta % this.interval);
      //this.ref.nativeElement.style.width = (counter += 10) + 'px';
      console.log(1);
    }
    console.log(1);

  }

  ngAfterContentInit() {
    this.animate();
    console.log();
  }

}
