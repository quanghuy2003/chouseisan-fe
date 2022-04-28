import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Vote} from "./vote";
const API_URL = 'http://localhost:8080/api/vote';

@Injectable({
  providedIn: 'root'
})
export class VoteService {

  constructor(private http: HttpClient) { }

  getAllVote(): Observable<Vote[]> {
    return this.http.get<Vote[]>(API_URL + '/findAll')
  }

  addVote(vote: Vote): Observable<Vote> {
    return this.http.post<Vote>(API_URL + '/add', vote);
  }

  deleteVote(id: any): Observable<Vote> {
    // @ts-ignore
    return this.http.delete(API_URL + `/delete/${id}`)
  }

  updateVote(id: any, vote: Vote): Observable<Vote> {
    return this.http.put<Vote>(API_URL + `/update/${id}`, vote);
  }


  getAllVoteTick(): Observable<Vote[]> {
    return this.http.get<Vote[]>(API_URL + '/findAllTick')
  }

  getAllVoteQuestionMark(): Observable<Vote[]> {
    return this.http.get<Vote[]>(API_URL + '/findAllQuestionMark')
  }

  getAllVoteRefuse(): Observable<Vote[]> {
    return this.http.get<Vote[]>(API_URL + '/findAllRefuse')
  }

}