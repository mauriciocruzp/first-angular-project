import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'first-angular-project';
  imgCody = 'assets/codys/1.png';

  ngOnInit(){
    this.getCodyImg();
  }

  getCodyImg(){
    let rand = Math.random() * 16 + 1;
    rand = Math.floor(rand);
    this.imgCody = `assets/codys/${rand}.png`;
  }
}
