import { SharedModule } from './../shared/shared.module';
import { ContactRoutingModule } from './contact-routing.module';
import { NgModule } from '@angular/core';
import { ContactComponent } from './contact/contact.component';

@NgModule({
  declarations: [ContactComponent],
  imports: [
    SharedModule,
    ContactRoutingModule
  ]
})
export class ContactModule { }
