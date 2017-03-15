import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-property-binding',
  templateUrl: './my-property-binding.component.html',
  styleUrls: ['./my-property-binding.component.css']
})
export class MyPropertyBindingComponent implements OnInit {
  myImageSource: string = 'https://media.giphy.com/media/3o7TKUfKeHBXXxAZtS/source.gif'
  images: Array<string> = [
    'https://media.giphy.com/media/3o7TKUfKeHBXXxAZtS/source.gif',
    'https://media.giphy.com/media/5wWf7GZPPlIvA2DyR6o/giphy.gif',
    'https://media.giphy.com/media/ToMjGpMhkemTU2YQUjC/giphy.gif',
    'https://media.giphy.com/media/3rgXBqKTN31iaFit3i/giphy.gif',
    'https://media.giphy.com/media/l3q314cYImR8eIkJa/source.gif',

  ]
  constructor() { }

  ngOnInit() {
  }

  changeImage(){
    let randomIndex = Math.floor(Math.random()* this.images.length);
    this.myImageSource = this.images[randomIndex];
  }

}
