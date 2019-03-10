import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from "rxjs";
import { map, catchError, tap } from "rxjs/operators";

@Injectable()
export class DataService{
    
    BASE_URL = "http://192.168.43.38:5000/api";
    constructor(private _http: HttpClient) { }


    public fetchDataForCity(x){
        
        console.log(x.city);
        return this._http.get(`${this.BASE_URL}/?city=${x.city}`).pipe(
            catchError(err => throwError(err))
        )
    }

    public removeMe(x,city){
        return this._http.get(`${this.BASE_URL}/f/?factor=${x}&city=${city}`).pipe(
            catchError(err=>throwError(err))
        )
    }

}
