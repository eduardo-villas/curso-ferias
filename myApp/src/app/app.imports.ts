//MODULES
import { LoginPageModule } from '../pages/login/login.module';
import { HomePageModule } from '../pages/home/home.module';
import { ListPageModule } from '../pages/list/list.module';
import { ReportPageModule } from '../pages/report/report.module';
import { ProfilePageModule } from '../pages/profile/profile.module';
import { ScannerPageModule } from '../pages/scanner/scanner.module';

//NATIVEMODULES
import { BrowserModule } from '@angular/platform-browser';
import { IonicStorageModule } from '@ionic/storage';

//NATIVEPROVIDERS
import { Camera } from '@ionic-native/camera';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import { HttpClientModule } from '@angular/common/http';

//PROVIDERS
import { AlertServiceProvider } from '../providers/utils/alert.service';
import { ToastServiceProvider } from '../providers/utils/toast.service';
import { AuthServiceProvider } from '../providers/auth-service/auth.service';
import { UserServiceProvider } from '../providers/user-service/user.service';

export const MODULES = [
    LoginPageModule, 
    HomePageModule,
    ListPageModule,
    ProfilePageModule,
    ReportPageModule,
    ScannerPageModule
];

export const NATIVEMODULES = [
    BrowserModule,
    HttpClientModule, 
    IonicStorageModule.forRoot()
];

export const PROVIDERS = [
    ToastServiceProvider,
    AlertServiceProvider,
    AuthServiceProvider,
    UserServiceProvider
];

export const NATIVEPROVIDERS = [
    StatusBar,
    SplashScreen,
    Camera,
    BarcodeScanner
];