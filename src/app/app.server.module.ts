import { isPlatformServer } from '@angular/common';
import { NgModule, NgZone, PLATFORM_ID } from '@angular/core';
import { ServerModule, ɵSERVER_CONTEXT } from '@angular/platform-server';

import { AppComponent } from './app.component';
import { AppModule } from './app.module';
import { getNgZone } from './get-ng-zone';

import 'zone.js';

@NgModule({
  imports: [
    AppModule,
    ServerModule,
  ],
  providers: [
    {
      provide: ɵSERVER_CONTEXT,
      useFactory: () => 'zoneless-server'
    }
  ],
  bootstrap: [AppComponent],
})
export class AppServerModule {}
