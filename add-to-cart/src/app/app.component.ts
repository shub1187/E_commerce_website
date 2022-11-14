import { Component } from '@angular/core';

@Component({           // Decorator - tells that this is a component not a class
  selector: 'app-root', //all these are meta data
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Shoppers Stop'; //Name of our angular app
}
