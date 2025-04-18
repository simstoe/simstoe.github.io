import { Component } from '@angular/core';
import { gsap } from 'gsap';
import { AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LinkComponent } from "../../elements/link/link.component";

@Component({
  selector: 'app-navbar',
  imports: [CommonModule, LinkComponent],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})

export class NavbarComponent implements AfterViewInit {
  isMenuOpen = false;

  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
    console.log('Menu toggled:', this.isMenuOpen);
    
  }
  
  ngAfterViewInit(): void {
    const navLinks = document.querySelectorAll('.nav-links li');
    const logo = document.querySelector('.logo');
    const burger = document.querySelector('.burger');
    const mobileMenu = document.querySelector('.mobile-nav');

    gsap.from(logo, {
      opacity: 0,
      y: -30,
      duration: 1,
      ease: 'power3.out',
    });

    gsap.from(navLinks, {
      opacity: 0,
      y: -30,
      duration: 1,
      ease: 'power3.out',
      delay: 0.2,
      stagger: {
        amount: 0.2,
      },
    });

    gsap.from(burger, {
      opacity: 0,
      y: -30,
      duration: 1,
      ease: 'power3.out',
      delay: 0.4,
    });

    gsap.from(mobileMenu, {
      opacity: 0,
      y: -30,
      duration: 1,
      ease: 'power3.out',
      delay: 0.6,
    });
  }
}