import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { SharedModule } from './shared.module';
import { GlobalStore } from './service/global.service';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// layout
import { BlankLayout } from './layout/blank/blank.component';
import { MainLayout } from './layout/main/main.component';

// component

@NgModule({
  declarations: [
    AppComponent,
    BlankLayout,
    MainLayout
  ],
  imports: [
    BrowserModule,
    SharedModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [
    provideClientHydration(),
    GlobalStore
  ],
  bootstrap: [AppComponent],
  exports: [
    SharedModule
  ]
})
export class AppModule { }
