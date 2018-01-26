//MODULES
import { HomePageModule } from '../pages/home/home.module';
import { ListPageModule } from '../pages/list/list.module';
import { ReportPageModule } from '../pages/report/report.module';

//NATIVEMODULES
import { BrowserModule } from '@angular/platform-browser';

//PROVIDERS
import { ToastServiceProvider } from '../providers/utils/toast.service';
import { AlertServiceProvider } from '../providers/utils/alert.service';

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
    ToastServiceProvider,
    AlertServiceProvider
];

export const NATIVEPROVIDERS = [
    StatusBar,
    SplashScreen
];