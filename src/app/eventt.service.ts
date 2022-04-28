import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Eventt} from "./eventt";

const API_URL = 'http://localhost:8080/api/event';

@Injectable({
  providedIn: 'root'
})
export class EventtService {

  constructor(private http: HttpClient) { }

  getAllEvent(): Observable<Eventt[]> {
    return this.http.get<Eventt[]>(API_URL + '/findAll')
  }

  getId(id: string | null): Observable<Eventt> {
    return this.http.get<Eventt>(API_URL + `/event/${id}`);
  }

  addEvent(eventt: Eventt): Observable<Eventt> {
    return this.http.post<Eventt>(API_URL + '/addEvent', eventt);
  }

  deleteEvent(id: any): Observable<Eventt> {
    // @ts-ignore
    return this.http.delete(API_URL + `/delete/${id}`)
  }

  updateEvent(id: any, eventt: Eventt): Observable<Eventt> {
    return this.http.put<Eventt>(API_URL + `/update/${id}`, eventt);
  }
}

