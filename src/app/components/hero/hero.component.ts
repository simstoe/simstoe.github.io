import { Component, AfterViewInit } from '@angular/core';
import { gsap } from 'gsap/gsap-core';

@Component({
  selector: 'app-hero',
  imports: [],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent implements AfterViewInit {
  ngAfterViewInit(): void {
    const hero = document.getElementById('hero') as HTMLElement;

    console.log(hero);
    

    gsap.from(hero.querySelector('h1'), {
      scale: 0.8,
      opacity: 0,
      delay: 0.3,
      duration: 0.8,
      ease: 'back.out',
    });

    gsap.from(hero.querySelector('p'), {
      scale: 0.8,
      opacity: 0,
      delay: 0.5,
      duration: 0.8,
      ease: 'back.out',
    });
  }
}
