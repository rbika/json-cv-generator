import { Component, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

import { CvService } from '../cv.service';

@Component({
  selector: 'app-cv-loader',
  templateUrl: './cv-loader.component.html',
  styleUrls: ['./cv-loader.component.css']
})
export class CvLoaderComponent {

    constructor(
        private cvService: CvService,
        private router: Router
    ) {}

    @Output() fileSelect: EventEmitter<string> = new EventEmitter();
    cvjson: string;
    error = '';

    onFileSelected(event) {
        const fileReader = new FileReader();
        const file = event.target.files[0];

        fileReader.onload = () => {
            this.error = '';
            this.router.navigate(['/cv']);
            this.cvService.setCv(JSON.parse(<string>fileReader.result));
        };

        fileReader.onerror = () => {
            this.error = 'Error';
        };

        fileReader.readAsText(file);
    }

}
