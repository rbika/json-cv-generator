import { Injectable } from '@angular/core';
import { Cv } from './cv.model';

@Injectable()
export class CvService {

    cv: Cv;

    setCv(data: any) {
        this.cv = new Cv(data);
    }

    getCv() {
        return this.cv;
    }

}
