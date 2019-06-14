import { NgModule } from '@angular/core';
import { LibCComponent } from './lib-c.component';
import { LibBModule } from '@test/libB';

@NgModule({
  declarations: [LibCComponent],
  imports: [
    LibBModule
  ],
  exports: [LibCComponent]
})
export class LibCModule { }
