import { Injectable } from '@angular/core';
import { createClient, Session, SupabaseClient } from '@supabase/supabase-js';

@Injectable({
  providedIn: 'root'
})
export class SupabaseService {
  private supabase: SupabaseClient;

  constructor() {
    const supabaseUrl = 'https://ibcjuiefxrlcchmlpycq.supabase.co';
    const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImliY2p1aWVmeHJsY2NobWxweWNxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDQ5ODk4NjQsImV4cCI6MjA2MDU2NTg2NH0.rd4ScOqNhWX6_O3g7Sojnb3mk0UonUfYleyOyzt3lk8';
    
    this.supabase = createClient(supabaseUrl, supabaseKey);
  }

  get client(): SupabaseClient {
    return this.supabase;
  }

  async getSession(): Promise<Session | null> {
    const { data } = await this.supabase.auth.getSession();
    return data.session;
  }

  async signIn(email: string, password: string) {
    return this.supabase.auth.signInWithPassword({ email, password });
  }

  async signOut() {
    return this.supabase.auth.signOut();
  }

  async trackVisit() {
    const { error } = await this.supabase.from('visits').insert([{
      user_agent: navigator.userAgent
    }]);
  
    if (error) {
      console.error('Visit konnte nicht gespeichert werden:', error.message);
    }
  }
  

  async getVisitsGrouped(type: 'day' | 'week' | 'month'): Promise<{ label: string; count: number }[]> {
    let groupBy = '';
    let format = '';
  
    switch (type) {
      case 'day':
        groupBy = 'hour';
        format = 'HH24';
        break;
      case 'week':
        groupBy = 'day';
        format = 'Dy';
        break;
      case 'month':
        groupBy = 'day';
        format = 'DD.MM.';
        break;
    }
  
    const { data, error } = await this.supabase
      .rpc('get_visit_stats', { group_by: groupBy, format_string: format });

    console.log(data);
    
  
    return data ?? [];
  }
  
}
