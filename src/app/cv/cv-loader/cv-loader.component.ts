import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-cv-loader',
  templateUrl: './cv-loader.component.html',
  styleUrls: ['./cv-loader.component.css']
})
export class CvLoaderComponent {

    @Output() fileSelect: EventEmitter<string> = new EventEmitter();
    cvjson: string;
    error = '';

    onFileSelected(event) {
        const fileReader = new FileReader();
        const file = event.target.files[0];

        fileReader.onload = () => {
            this.fileSelect.emit(JSON.parse(<string>fileReader.result));
            this.error = '';
        };

        fileReader.onerror = () => {
            this.error = 'Error';
        };

        fileReader.readAsText(file);
    }
}
