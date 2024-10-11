import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TableService {

  constructor() { }

  getTableData(): Observable<any> {
    const tableData = {
      "resultados": [
        {
          "avisos_y_tableros": "15%",
          "aplica_sobretasa": "Sí",
          "tarifa_sobretasa": "2,0%",
          "detalle_sobretasa": "ICA",
          "equivalencia_sobretasa": "(vacío)",
          "aplica_oficina": "Sí",
          "numero_oficinas": 1,
          "tarifa_oficina": "27,8",
          "detalle_oficina": "UVT",
          "equivalencia_oficina": "47.065,00"
        }
      ]
    };
    
    return of(tableData); 
  }
}
