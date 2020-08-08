import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-paragraph-mmanager',
  templateUrl: './paragraph-mmanager.component.html',
  styleUrls: ['./paragraph-mmanager.component.css']
})
export class ParagraphMmanagerComponent implements OnInit {
  color = "black"
  fontSize = "16"
  font = "Arial"
  constructor() { }

  ngOnInit(): void {
    console.log(this.color)
  }

}
