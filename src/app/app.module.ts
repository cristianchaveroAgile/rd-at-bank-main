import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CurrencyPipe } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { ATComponentsModule } from 'at-digital-components';

// Componentes generales
import { MainMenuComponent } from './main-menu/main-menu.component';
import { TitleComponent } from './titles/title/title.component';
import { SubtitleComponent } from './titles/subtitle/subtitle.component';
import { ModalComponent } from './elements/modal/modal.component';
import { DasboardComponent } from './pages/dasboard/dasboard.component';
// Componentes pertenecientes a Mi cuenta
import { MyAccountComponent } from './pages/my-account/my-account.component';
import { MyDataComponent } from './pages/my-account/my-data/my-data.component';
import { AccordionComponent } from './elements/accordion/accordion.component';
import { UpdateMyDataComponent } from './pages/my-account/update-my-data/update-my-data.component';

@NgModule({
  declarations: [
    AppComponent,
    MainMenuComponent,
    TitleComponent,
    SubtitleComponent,
    MyAccountComponent,
    MyDataComponent,
    AccordionComponent,
    UpdateMyDataComponent,
    ModalComponent,
    DasboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    RouterModule,
    HttpClientModule,
    ATComponentsModule
  ],
  providers: [CurrencyPipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
