import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contador',
  templateUrl: './contador.component.html',
  styleUrls: ['./contador.component.css']
})
export class ContadorComponent implements OnInit {
  count = 0;
  constructor() { }

  ngOnInit() {
    var interval = setInterval(() => {
      this.count ++;
      if(this.count === 10) {
        clearInterval(interval)
      }
    }, 1000)
  }
}
