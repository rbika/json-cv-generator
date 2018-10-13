import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { CvModule } from './cv/cv.module';
import { HeaderComponent } from './header/header.component';
import { CvLoaderComponent } from './cv/cv-loader/cv-loader.component';
import { CvComponent } from './cv/cv.component';
import { CvService } from './cv/cv.service';

const appRoutes: Routes = [
    {path: '', component: CvLoaderComponent},
    {path: 'cv', component: CvComponent},
];

@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent
    ],
    imports: [
        BrowserModule,
        CvModule,
        RouterModule.forRoot(appRoutes)
    ],
    providers: [
        CvService
    ],
    bootstrap: [
        AppComponent
    ]
})
export class AppModule {}
