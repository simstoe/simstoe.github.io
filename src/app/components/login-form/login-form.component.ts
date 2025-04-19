import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { gsap } from 'gsap';

@Component({
  selector: 'app-login-form',
  imports: [FormsModule, CommonModule],
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements AfterViewInit {
  @ViewChild('title') title!: ElementRef;
  @ViewChild('group1') group1!: ElementRef;
  @ViewChild('group2') group2!: ElementRef;
  @ViewChild('submitButton') submitBtn!: ElementRef;

  email = '';
  password = '';
  loading = false;

  @Output() loginSubmit = new EventEmitter<{ email: string; password: string }>();

  submitForm() {
    this.loading = true;
    console.log('Form submitted:', { email: this.email, password: this.password });
    
    
    this.loginSubmit.emit({ email: this.email, password: this.password });
  }

  setLoading(state: boolean) {
    this.loading = state;
  }

  ngAfterViewInit(): void {
    const tl = gsap.timeline({ defaults: { ease: 'power2.out', duration: 0.6 } });

    tl.from(this.title.nativeElement, { y: -40, opacity: 0 })
      .from(this.group1.nativeElement, { x: -40, y: 40, opacity: 0 }, '-=0.3')
      .from(this.group2.nativeElement, { x: 40, y: -40, opacity: 0 }, '-=0.3')
      .from(this.submitBtn.nativeElement, { scale: 0.9, opacity: 0 }, '-=0.2');
  }
}