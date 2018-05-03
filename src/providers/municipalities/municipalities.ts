import {Injectable} from '@angular/core';

@Injectable()
export class MunicipalitiesProvider {
  private mockMunicipalities = [
    {"Gran Canaria": "Agaete"},
    {"Gran Canaria": "Agüimes"},
    {"Gran Canaria": "La Aldea de San Nicolás"},
    {"Gran Canaria": "Artenara"},
    {"Gran Canaria": "Arucas"},
    {"Gran Canaria": "Firgas"},
    {"Gran Canaria": "Gáldar"},
    {"Gran Canaria": "Ingenio"},
    {"Gran Canaria": "Mogán"},
    {"Gran Canaria": "Moya"},
    {"Gran Canaria": "Las Palmas de Gran Canaria"},
    {"Gran Canaria": "San Bartolomé de Tirajana"},
    {"Gran Canaria": "Santa Brígida"},
    {"Gran Canaria": "Santa Lucía de Tirajana"},
    {"Gran Canaria": "Santa María de Guía"},
    {"Gran Canaria": "Tejeda"},
    {"Gran Canaria": "Telde"},
    {"Gran Canaria": "Teror"},
    {"Gran Canaria": "Valleseco"},
    {"Gran Canaria": "Valsequillo"},
    {"Gran Canaria": "Vega de San Mateo"}
  ];

  getMunicipalities(){
    return this.mockMunicipalities;
  }
}
