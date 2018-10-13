import { Component } from '@angular/core';

import { CvService } from './cv.service';

@Component({
    selector: 'app-cv',
    templateUrl: './cv.component.html',
    styleUrls: ['./cv.component.css']
})
export class CvComponent {

    data: any;

    constructor(private cvService: CvService) {
        this.data = this.cvService.getCv();
    }

}
