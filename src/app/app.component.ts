import { Component, OnInit } from '@angular/core';
import { TodoService } from './todo.service';
import { map, debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Ivonaldo';
  sobrenome = '';
  items = ['1', '4', '5', '6', '12', '15'];
  contador = 0;

  constructor(public todoService: TodoService) {

  }

  ngOnInit() {
    setTimeout(() => {
      this.sobrenome = 'Soares';
    }, 2000);

    this.todoService.contador
      .pipe(
        map( x => x * 2),
        debounceTime(2000)
      )
      .subscribe(value => {
        this.contador = value;
      })
  };
  removeItem(index) {
    this.items.splice(index, 1);
  }
  addTodo(todo: string) {
    this.items.push(todo);
  }
}
