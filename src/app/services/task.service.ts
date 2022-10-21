import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { TaskInterface } from '../Task';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  private apiUrl = 'http://localhost:5000/tasks';

  constructor(private http: HttpClient) {}

  getTasks(): Observable<TaskInterface[]> {
    return this.http.get<TaskInterface[]>(this.apiUrl);
  }

  deleteTaskService(task: TaskInterface): Observable<TaskInterface> {
    const url = `${this.apiUrl}/${task.id}`;
    return this.http.delete<TaskInterface>(url);
  }

  updateTaskReminder(task: TaskInterface): Observable<TaskInterface> {
    const url = `${this.apiUrl}/${task.id}`;
    return this.http.put<TaskInterface>(url, task, httpOptions);
  }

  addTask(task: TaskInterface): Observable<TaskInterface> {
    return this.http.post<TaskInterface>(this.apiUrl, task, httpOptions);
  }
}
