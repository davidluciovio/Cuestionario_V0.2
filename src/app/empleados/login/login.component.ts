import { Component, ElementRef, ViewChild } from '@angular/core';
import { Empleado } from '../interfaces/empleado.interface';
import { EmpleadosService } from '../services/empleados.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent  {
  @ViewChild('txtnomina') txtNomina!: ElementRef<HTMLInputElement>;

  constructor(private empleadoService: EmpleadosService) {   
    let est = this.empleadoService.estado;
    console.log(est)
  }

  buscar_Empleado(){
    const valor = this.txtNomina.nativeElement.value;
    if (valor.trim().length === 0) {
        return;
      }
      this.empleadoService.buscar_nomina(valor);
  }

  loginEmpleado(){
    
    // if (est) {
    //   console.log('entro');
    // }
  }
}
