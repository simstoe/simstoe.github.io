import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SupabaseService } from '../../../core/supabase.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NavbarComponent } from "../../../components/navbar/navbar.component";
import { FooterComponent } from "../../../components/footer/footer.component";
import { LoginFormComponent } from "../../../components/login-form/login-form.component";
import { showToast } from '../../../core/utils/toast';

@Component({
  selector: 'app-login',
  imports: [CommonModule, FormsModule, NavbarComponent, FooterComponent, LoginFormComponent],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email = '';
  password = '';
  error: string | null = null;
  loading = false;

  constructor(
    private supabaseService: SupabaseService,
    private router: Router
  ) {}

  async onLogin(credentials: { email: string; password: string }) {
    console.log('Login credentials:', credentials);
    
    this.email = credentials.email;
    this.password = credentials.password;
    this.loading = true;
    this.error = null;
  
    const { data, error } = await this.supabaseService.signIn(this.email, this.password);
  
    this.loading = false;
  
    if (error) {
      this.error = error.message;

      showToast({
        title: 'Fehler beim Einloggen',
        icon: 'error'
      });
    } else if (data.session) {
      showToast({
        title: 'Login erfolgreich!',
        icon: 'success'
      });
      this.router.navigate(['/acp/dashboard']);
    }
  }
}
