import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class MunicipalitiesProvider {
  static municipalitiesUrl = '/src/providers/user/municipalities.json';
  private mockMunicipalities = {
    "Agaete": true,
    "Agüimes": true,
    "La Aldea de San Nicolás": true,
    "Artenara": true,
    "Arucas": true,
    "Firgas": true,
    "Gáldar":  true,
    "Ingenio":true,
    "Mogán": true,
    "Moya": true,
    "Las Palmas de Gran Canaria": true,
    "San Bartolomé de Tirajana": true,
    "Santa Brígida": true,
    "Santa Lucía de Tirajana": true,
    "Santa María de Guía": true,
    "Tejeda": true,
    "Telde": true,
    "Teror": true,
    "Valleseco": true,
    "Valsequillo": true,
    "Vega de San Mateo": true
  };

  constructor(public http: HttpClient) {
  }

  getGranCanaria(){
    return this.mockMunicipalities;
  }
}
