import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lib-libC',
  template: `
  <p>
  components works!
</p>
<lib-libB></lib-libB>
  `,
  styles: []
})
export class LibCComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
