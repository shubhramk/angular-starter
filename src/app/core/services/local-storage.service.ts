import { Injectable } from '@angular/core';

@Injectable()
export class LocalStorageService {
    constructor() { }
    /**
     * Will set the data into session storage
     * @storageKey: The key against which the data is to store
     * @data: The data to store
     */
    set(storageKey:string, data:any) {
        if (typeof (Storage) !== 'undefined') {
            localStorage[storageKey] = data;
        } else {
            alert('Sorry, your browser does not support web storage...');
        }
    }

    /**
     * Will get the data from session storage
     * @storageKey: The key against which the data is stored
     */
    get(storageKey:string) {
        return localStorage[storageKey];
    }

    /**
     * Will remove the data from session storage
     * @storageKey: The key against which the data is stored
     */
    remove(storageKey:string) {
        delete localStorage[storageKey];
    }
}
