//MODULES
import { HomePageModule } from '../pages/home/home.module';
import { ListPageModule } from '../pages/list/list.module';
import { ReportPageModule } from '../pages/report/report.module';

//NATIVEMODULES
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

//PROVIDERS

//NATIVEPROVIDERS
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { ProfilePageModule } from '../pages/profile/profile.module';
import { ScannerPageModule } from '../pages/scanner/scanner.module';
import { LoginPageModule } from '../pages/login/login.module';

export const MODULES = [
    HomePageModule,
    ListPageModule,
    ProfilePageModule,
    ReportPageModule,
    ScannerPageModule,
    LoginPageModule
];

export const NATIVEMODULES = [
    BrowserModule
];

export const PROVIDERS = [

];

export const NATIVEPROVIDERS = [
    StatusBar,
    SplashScreen
];