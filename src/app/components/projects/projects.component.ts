import { CommonModule } from '@angular/common';
import { AfterViewInit, Component } from '@angular/core';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { LinkComponent } from '../../elements/link/link.component';

@Component({
  selector: 'app-projects',
  imports: [CommonModule, LinkComponent],
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements AfterViewInit {
  projectList: Project[] = [
    {
      title: 'Java Design Pattern Book',
      description: `An in-depth, interactive book that covers all major design patterns in Java — including Singleton, Factory, Observer, Strategy, and many more. 
      Perfect for beginners and experienced developers who want to write cleaner and more maintainable Java code.`,
      imageUrl: 'assets/projects-images/java-design-pattern-book.png',
      link: 'https://simons-organization-15.gitbook.io/design-patterns-java'
    }
  ];

  ngAfterViewInit(): void {
    gsap.registerPlugin(ScrollTrigger)

    gsap.from('.gsap-title', {
      y: 50,
      opacity: 0,
      duration: 1,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: '.gsap-title',
        start: 'top 80%',
      },
    });

    gsap.utils.toArray('.project').forEach((proj: any, index: number) => {
      gsap.from(proj, {
        y: 100,
        opacity: 0,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: proj,
          start: 'top 85%',
        },
        delay: index * 0.1,
      });
    });
  }
  
}

interface Project {
  title: string;
  description: string;
  imageUrl: string;
  link: string;
}
