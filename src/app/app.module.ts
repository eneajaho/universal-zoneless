import { isPlatformServer } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule, NgZone, PLATFORM_ID } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { TransferHttpCacheModule } from '@nguniversal/common';
import { AppComponent } from './app.component';
import { getNgZone } from './get-ng-zone';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    HttpClientModule,
    TransferHttpCacheModule,
  ],
  providers: [
    {
      provide: NgZone,
      useFactory: (platformId: Object) => {
        if (isPlatformServer(platformId)) {
          console.log('Using server zone');
          return getNgZone();
        }

        console.log('Using noop client zone');
        return getNgZone({ isNoop: true });
      },
      deps: [PLATFORM_ID],
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
