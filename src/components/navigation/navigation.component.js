import { Component } from '@angular/core';

@Component({
  selector: 'navigation',
  templateUrl: 'dist/html/navigation.html'
})

export class NavigationComponent {
    name = 'MA';
    link = "index2.html"

    test(){
      alert('Hello Me');
    }
}
