import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const authToken = localStorage.getItem('access_token');

  if (!authToken) {
    router.navigate(['login']);
  }

  return true;
};
