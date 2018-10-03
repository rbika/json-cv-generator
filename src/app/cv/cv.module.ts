import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CvComponent } from './cv.component';
import { CvLoaderComponent } from './cv-loader/cv-loader.component';

@NgModule({
    imports: [
        CommonModule
    ],
    exports: [
        CvComponent
    ],
    declarations: [
        CvComponent,
        CvLoaderComponent
    ]
})
export class CvModule {}
