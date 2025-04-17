import { AfterViewInit, Component, ElementRef, QueryList, ViewChildren } from '@angular/core';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
})
export class AboutComponent implements AfterViewInit {
  @ViewChildren('animatedEl') animatedEls!: QueryList<ElementRef>;
  @ViewChildren('techIcon') techIcons!: QueryList<ElementRef>;

  ngAfterViewInit(): void {
    const animatedElsArray = this.animatedEls.map(el => el.nativeElement);
    const techIconsArray = this.techIcons.map(el => el.nativeElement);
  
    if (!this.isElementInViewport(animatedElsArray[0])) {
      gsap.from(animatedElsArray, {
        opacity: 0,
        y: 30,
        duration: 0.8,
        stagger: 0.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: animatedElsArray[0],
          start: 'top 80%',
          toggleActions: 'play none none reverse',
        },
      });
    }
  
    if (!this.isElementInViewport(techIconsArray[0])) {
      gsap.from(techIconsArray, {
        opacity: 0,
        y: 20,
        duration: 0.8,
        stagger: 0.15,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: techIconsArray[0],
          start: 'top 85%',
          toggleActions: 'play none none reverse',
        },
      });
    }
  }
  
  private isElementInViewport(el: HTMLElement): boolean {
    const rect = el.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }
  
}
