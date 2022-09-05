import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Todo } from 'src/app/models/todo.model';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
  animations: 
  [
    trigger('animaciones', 
    [
      state('inactive', style ({
        transform: 'translateX(-1000px)'
      })),
      state('active', style ({
        transform: 'translateX(0px)'
      })),
      state('inicial', style ({
        transform: 'translateX(0px)'
      })),
      state('final', style ({
        transform: 'translateX(-1900px)'
      })),
      transition('inactive => active', animate('1000ms ease-out')),
      transition('inicial => final', animate('1000ms ease-out'))
    ]),
  ]
})
export class TodoComponent implements OnInit {

  @Input() tarea: Todo; 
  @Output() tareaOutPut = new EventEmitter<Todo>();
  constructor() { }

  state = 'inactive';

  ngOnInit(): void 
  {
    setTimeout(() => { this.state = 'active' }, 2000);
  }

  completar()
  {
    this.state = 'inicial';
    setTimeout(() => { this.state = 'final' }, 500);
    setTimeout(() => 
    { 
      this.tareaOutPut.emit(this.tarea);
      this.tarea.completar();
    }, 1000);
  }

  getColor()
  {
    switch(this.tarea.gradoImportancia)
    {
      case 1: return "#EF4816";
      case 2: return '#EA631F';
      case 3: return '#EEAE38';
      default: return '#57B9B0';
    }
  }
}
