import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { FooterComponent } from "../../components/footer/footer.component";
import { NavbarComponent } from "../../components/navbar/navbar.component";
import { gsap } from 'gsap';

@Component({
  selector: 'app-imprint',
  imports: [FooterComponent, NavbarComponent],
  templateUrl: './imprint.component.html',
  styleUrl: './imprint.component.css'
})
export class ImprintComponent implements AfterViewInit {
  @ViewChild('heading', { static: true }) heading!: ElementRef;
  @ViewChild('imprint', { static: true }) imprint!: ElementRef;
  @ViewChild('policy', { static: true }) policy!: ElementRef;
  
  ngAfterViewInit(): void {
    gsap.from(this.heading.nativeElement, {
      x: -40,
      y: -40,
      opacity: 0,
      duration: 1,
      ease: 'power3.out'
    });

    gsap.from(this.imprint.nativeElement, {
      x: 40,
      y: 40,
      opacity: 0,
      duration: 1,
      delay: 0.4,
      ease: 'power3.out'
    });

    gsap.from(this.policy.nativeElement, {
      x: -40,
      y: 40,
      opacity: 0,
      duration: 1,
      delay: 0.8,
      ease: 'power3.out'
    });
  }

}
