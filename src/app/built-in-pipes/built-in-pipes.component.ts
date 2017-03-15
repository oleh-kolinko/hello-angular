import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-built-in-pipes',
  templateUrl: './built-in-pipes.component.html',
  styleUrls: ['./built-in-pipes.component.css']
})
export class BuiltInPipesComponent implements OnInit {
  myName = 'Oleh'
  today = new Date()
  constructor() { }

  ngOnInit() {
  }
  increment(){
    const changedDate = new Date(this.today);
    changedDate.setDate(this.today.getDate() + 1);
    this.today = changedDate;
  }
}
