import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BcButtonModule } from '@bancolombia/design-system-web/bc-button';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BcMenuModule } from '@bancolombia/design-system-web/bc-menu';
import {BcHeaderModule} from '@bancolombia/design-system-web/bc-header';
import {BcFloatMenuModule} from '@bancolombia/design-system-web/bc-float-menu';
import {BcBadgeModule} from '@bancolombia/design-system-web/bc-badge';
import { BcIconModule } from '@bancolombia/design-system-web/bc-icon';
import { UploadFileComponent } from './components/upload-file/upload-file.component';
import { BcInputFileModule } from '@bancolombia/design-system-web/bc-input-file';
import { HttpClientModule } from '@angular/common/http';
import { MenuComponent } from './components/menu/menu.component';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { TracingComponent } from './components/tracing/tracing.component';
import { BcInputSelectModule } from '@bancolombia/design-system-web/bc-input-select';
import { BcStepperModule } from '@bancolombia/design-system-web/bc-stepper';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    UploadFileComponent,
    MenuComponent,
    HomeComponent,
    HeaderComponent,
    TracingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BcButtonModule,
    BcMenuModule,
    BcHeaderModule,
    BcInputFileModule,
    BcFloatMenuModule,
    BcBadgeModule,
    BcStepperModule,
    BcInputSelectModule,
    ReactiveFormsModule,
    FormsModule,
    BcIconModule.forRoot({ path: 'https://library-sdb.apps.bancolombia.com/bds/6.60.2' }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
