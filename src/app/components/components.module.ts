import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponent } from './header/header.component';
import { PropertyComponent } from './property/property.component';
import { PropertySummaryComponent } from './property-summary/property-summary.component';
import { BootstrapIconsModule } from 'ng-bootstrap-icons';
import { allIcons } from 'ng-bootstrap-icons/icons';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  imports: [
    CommonModule,
    NgbModule,
    BootstrapIconsModule.pick(allIcons)
  ],
  exports: [HeaderComponent, PropertyComponent,BootstrapIconsModule,FooterComponent],
  declarations: [HeaderComponent, PropertyComponent, PropertySummaryComponent, FooterComponent],
  providers: [],
})
export class ComponentsModule { }
