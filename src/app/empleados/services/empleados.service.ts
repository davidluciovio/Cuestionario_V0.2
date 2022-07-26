import { Injectable } from '@angular/core';
import { Empleado } from '../interfaces/empleado.interface';
import { ActivatedRoute, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})

export class EmpleadosService {
  public estado: boolean = false;
  private _lista_empleados: Empleado[] = [
    {
      Nomina: '20358',
      Nombre: 'David',
      Estado: 0
    }
  ];
  constructor(private route: ActivatedRoute, private router: Router ) { }

  get lista_empleados(){
    return [...this._lista_empleados];
  }

  buscar_nomina(nomina: string){
    if (nomina === this.lista_empleados[0].Nomina) {
      if (this.lista_empleados[0].Estado === 0) {
        

        this.estado = true;
        if (this.estado) {
          this.router.navigate(['Cuestionario']);
        }
        

        // console.log('cuestionario' , this.estado);
      } else {window.alert('Ya realizaste el cuestionario');} 
    } else {window.alert("La nomina no existe");}


  }
}
  // return console.log('nomina mal');
