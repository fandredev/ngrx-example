import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GeolocationService {

  constructor() { }

  getGeolocation() {
    return new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(({ coords }) => resolve(coords),
        err => {
          reject(err);
          if (err.PERMISSION_DENIED) {
            // this.warningService.toastrInfo('Você não deu permissão de acesso a geolocalização.')
          }
          else if (err.POSITION_UNAVAILABLE) {
            // this.warningService.toastrInfo('Não foi possível alcancar sua localização.')
          }
        });
    });
  }
}
