import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BasicInterceptor } from './interceptor';

import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';


import { posts } from '../reducers/posts';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { PostsService } from '../../codegen/controllers/Posts';

@NgModule({
  declarations: [
    MyApp,
    HomePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule,
    HttpClientModule,
    StoreModule.forRoot({ posts }),
    StoreDevtoolsModule.instrument({
      maxAge: 25
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: HTTP_INTERCEPTORS, useClass: BasicInterceptor, multi: true },
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    PostsService
  ]
})
export class AppModule {}
