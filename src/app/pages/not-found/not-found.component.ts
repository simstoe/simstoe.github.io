import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { NavbarComponent } from "../../components/navbar/navbar.component";
import { FooterComponent } from "../../components/footer/footer.component";
import gsap from 'gsap';

@Component({
  selector: 'app-not-found',
  imports: [NavbarComponent, FooterComponent],
  templateUrl: './not-found.component.html',
  styleUrl: './not-found.component.css'
})
export class NotFoundComponent implements AfterViewInit {
  @ViewChild('heading') heading!: ElementRef;
  @ViewChild('paragraph') paragraph!: ElementRef;

  ngAfterViewInit(): void {
    console.log('NotFoundComponent initialized');
    
    const tl = gsap.timeline({ defaults: { ease: 'power2.out', duration: 0.6 } });

    tl.from(this.heading.nativeElement, { x: 40, y: -40, opacity: 0 })
      .from(this.paragraph.nativeElement, { x: -40, y: 40, opacity: 0 }, '-=0.3');
  }
}
