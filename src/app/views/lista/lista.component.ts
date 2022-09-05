import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/models/todo.model';
@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {
  mensaje: string;
  fecha: Date;
  gradoimportancia: number;

  tareas: Todo[] = [];
  completadas: Todo [] = [];

  constructor() { }

  ngOnInit(): void {
  }

  crearTarea()
  {
    this.tareas.push(new Todo(this.mensaje, this.fecha, this.gradoimportancia, false));
  }

  borrarDeLalista(indice: number)
  {
    this.tareas.splice(indice, 1);
  }

  borrarDeListaCompletadas(indice: number)
  {
    this.completadas.splice(indice, 1);
  }

  recibirTareaCompletada(tarea: Todo)
  {
     if(!tarea.completada)
     {
      this.completadas.push(tarea);
      const index = this.tareas.indexOf(tarea);
      this.borrarDeLalista(index);
     }
     else
     {
      const index = this.completadas.indexOf(tarea);
      this.borrarDeListaCompletadas(index);
     }
  }
}