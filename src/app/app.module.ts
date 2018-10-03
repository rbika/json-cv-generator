import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CvModule } from './cv/cv.module';

@NgModule({
    declarations: [
        AppComponent,
    ],
    imports: [
        BrowserModule,
        CvModule
    ],
    providers: [],
    bootstrap: [
        AppComponent
    ]
})
export class AppModule {}
