import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, mergeMap, concatMap } from 'rxjs/operators';

// backend api가 정의되는 service
@Injectable({
  providedIn: 'root'
})
export class EndpointService {
  constructor(
    private http: HttpClient
  ) {
  }

}
