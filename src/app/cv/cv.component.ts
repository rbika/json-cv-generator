import { Component } from '@angular/core';

@Component({
    selector: 'app-cv',
    templateUrl: './cv.component.html',
    styleUrls: ['./cv.component.css']
})
export class CvComponent {

    data: any;

    onFileSelected(data: any) {
        this.data = data;
    }
}
