import {
  Component,
} from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  images=[0,1,2,3,4].map(x=>'https://picsum.photos/200/200?random='+x)
  images2=[5,6,7,8,9].map(x=>'https://picsum.photos/200/200?random='+x)

  message:string;
  constructor() {}
 
}
