import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-padre',
  templateUrl: './padre.component.html',
  styleUrls: ['./padre.component.css']
})
export class PadreComponent implements OnInit {
  items: Array<any> = []
  constructor() { }

  ngOnInit(): void {
    this.items = [
      {
        name: 'Image 1',
        src: 'https://i.imgur.com/mWk2Z4c.png'
      }
    ]
  }

}
