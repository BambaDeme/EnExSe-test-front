import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiResponse } from '../interface/apiResponse.interface';

@Injectable({
  providedIn: 'root'
})
export class AgentsService {

  url: string = "http://localhost:8082/api/v1"
  constructor(private http: HttpClient) { }

  getAgents(): Observable<ApiResponse> {
    return this.http.get<ApiResponse>(`${this.url}/agents`)
  }
}
