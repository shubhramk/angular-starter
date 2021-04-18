import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';


@Injectable()
export class LoaderService {
    public isLoading = new BehaviorSubject<Boolean>(false);

    constructor() {}
}


