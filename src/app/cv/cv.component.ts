import { Component } from '@angular/core';

import { CvService } from './cv.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-cv',
    templateUrl: './cv.component.html',
    styleUrls: ['./cv.component.css']
})
export class CvComponent {

    data: any;

    constructor(
        private cvService: CvService,
        private router: Router
    ) {
        this.data = this.cvService.getCv();

        if (!this.data) {
            this.router.navigate(['']);
        }
    }

    saveAsPdf() {
        window.print();
    }

}
