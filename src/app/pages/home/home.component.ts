import { Component, OnInit } from '@angular/core';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { HeroComponent } from '../../components/hero/hero.component';
import { AboutComponent } from '../../components/about/about.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { ProjectsComponent } from '../../components/projects/projects.component';
import { SupabaseService } from '../../core/supabase.service';

@Component({
  selector: 'app-home',
  imports: [NavbarComponent, HeroComponent, AboutComponent, FooterComponent, ProjectsComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  constructor(private supabase: SupabaseService) { }

  ngOnInit() {
    this.supabase.trackVisit();
  }


}
