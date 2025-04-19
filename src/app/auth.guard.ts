import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { SupabaseService } from './core/supabase.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(
    private router: Router,
    private supabaseService: SupabaseService
  ) {}

  async canActivate(): Promise<boolean> {
    const session = await this.supabaseService.getSession();

    if (session) {
      return true;
    } else {
      this.router.navigate(['/admin/login']);
      
      return false;
    }
  }
}
