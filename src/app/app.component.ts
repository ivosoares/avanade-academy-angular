import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Ivonaldo';
  sobrenome = '';

  items = ['1', '4', '5', '6', '12', '15'];

  ngOnInit() {
    setTimeout(() => {
      this.sobrenome = 'Soares';
    }, 2000);
  };
  removeItem(index) {
    this.items.splice(index, 1);
  }
  addTodo(todo: string) {
    this.items.push(todo);
  }
}
