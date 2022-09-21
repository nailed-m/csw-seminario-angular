import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HelloWorldComponent } from './hello-world.component';
import { HelloWorldNgIfComponent } from './hello-world-ng-if.component';
import { HelloWorldDependencyInjectionComponent } from './hello-world-di.component';
import { HelloWorldCliComponent } from './hello-world-cli/hello-world-cli.component';

@NgModule({
  declarations: [
    AppComponent,
    HelloWorldComponent,
    HelloWorldNgIfComponent,
    HelloWorldDependencyInjectionComponent,
    HelloWorldCliComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
