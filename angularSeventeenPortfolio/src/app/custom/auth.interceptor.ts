import { HttpInterceptorFn } from '@angular/common/http';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  debugger;
  console.log('Interceptor lo tiene');
  if( req.url.indexOf('Access') > 0) {
    return next(req);
  }

  const token = localStorage.getItem('token');
  const clonRequest = req.clone({
    setHeaders: {
      Authorization: `Bearer ${token}`
    }
  })
  return next(clonRequest);
};
