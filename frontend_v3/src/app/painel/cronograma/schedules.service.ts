import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SchedulesService {

  constructor(
    private httpClient: HttpClient
  ) { }

  getAllSchedules() {
    return this.httpClient.get(`http://localhost:8000/api/admin/schedules`);
  }
}
