import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponent } from './header/header.component';
import { PropertyComponent } from './property/property.component';
import { PropertySummaryComponent } from './property-summary/property-summary.component';
import { BootstrapIconsModule } from 'ng-bootstrap-icons';
import { allIcons } from 'ng-bootstrap-icons/icons';
import { FooterComponent } from './footer/footer.component';
import { HttpService } from '../services/Http.service';
import { BooleanTransformPipe } from '../shared/pipes/boolean.pipe';
import {GoogleMapsModule} from '@angular/google-maps';
@NgModule({
  imports: [
    CommonModule,
    NgbModule,
    BootstrapIconsModule.pick(allIcons),
    GoogleMapsModule
  ],
  exports: [HeaderComponent, PropertyComponent,BootstrapIconsModule,FooterComponent],
  declarations: [HeaderComponent, PropertyComponent, PropertySummaryComponent, FooterComponent, BooleanTransformPipe],
  providers: [
    HttpService
  ],
})
export class ComponentsModule { }
