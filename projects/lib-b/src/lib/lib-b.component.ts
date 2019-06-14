import { Component, OnInit } from '@angular/core';
import { DTO } from '@test/libA';


@Component({
  selector: 'lib-libB',
  template: `
    <div>
      {{dto.name}}
    </div>
  `
})
export class LibBComponent implements OnInit {
  dto: DTO;

  ngOnInit() {
    this.dto = {
      id: 234,
      name: 'DTO name'
    };
  }
}
