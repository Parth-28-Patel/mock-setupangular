import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule, Optional, SkipSelf } from '@angular/core';
import {
  TGCoreModule,
  TGErrorHandlingHttpInterceptor,
  TGLoaderHttpInterceptor,
  TGMockHttpInterceptor,
} from '@techgrains/core';

import { tgConfig } from './custom-config';
import { AuthInterceptor } from '../interceptor';

@NgModule({
  imports: [TGCoreModule.forRoot(tgConfig)],
  exports: [TGCoreModule],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true,
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TGErrorHandlingHttpInterceptor,
      multi: true,
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TGMockHttpInterceptor,
      multi: true,
    },
  ],
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule?: CoreModule) {
    if (parentModule) {
      throw new Error(
        'CoreModule has already been loaded. Import this module in the AppModule only.'
      );
    }
  }
}
