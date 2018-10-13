import { Injectable } from '@angular/core';

@Injectable()
export class CvService {

    cv: any;

    setCv(data: any) {
        this.cv = data;
    }

    getCv() {
        return this.cv;
    }

}
