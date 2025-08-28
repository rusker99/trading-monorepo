import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TokenService {
  extendSession() {
    console.log('session extended');
  }
}

