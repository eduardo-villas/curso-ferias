//MODULES
import { HomePageModule } from '../pages/home/home.module';
import { ListPageModule } from '../pages/list/list.module';
import { ReportPageModule } from '../pages/report/report.module';
import { ProfilePageModule } from '../pages/profile/profile.module';
import { ScannerPageModule } from '../pages/scanner/scanner.module';
import { LoginPageModule } from '../pages/login/login.module';

//NATIVEMODULES
import { BrowserModule } from '@angular/platform-browser';
import { IonicStorageModule } from '@ionic/storage';

//NATIVEPROVIDERS
import { Camera } from '@ionic-native/camera';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

//PROVIDERS
import { AlertServiceProvider } from '../providers/utils/alert.service';
import { ToastServiceProvider } from '../providers/utils/toast.service';


export const MODULES = [
    HomePageModule,
    ListPageModule,
    ProfilePageModule,
    ReportPageModule,
    ScannerPageModule,
    LoginPageModule
];

export const NATIVEMODULES = [
    BrowserModule,
    IonicStorageModule.forRoot()
];

export const PROVIDERS = [
    ToastServiceProvider,
    AlertServiceProvider
];

export const NATIVEPROVIDERS = [
    StatusBar,
    SplashScreen,
    Camera
];