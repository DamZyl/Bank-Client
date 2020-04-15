import {Injectable} from '@angular/core';
import {environment} from '../../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Employee} from '../models/employee';
import {CreateEmployee} from '../models/createEmployee';
import {UpdateEmployee} from '../models/updateEmployee';


@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  baseUrl = `${environment.baseApiUrl}`;

  constructor(private http: HttpClient) {
  }

  getEmployees(): Observable<Employee[]> {
    return this.http.get<Employee[]>(`${this.baseUrl}employee/`);
  }

  getEmployee(id): Observable<Employee> {
    return this.http.get<Employee>(`${this.baseUrl}employee/${id}`);
  }

  createEmployee(model: CreateEmployee) {
    return this.http.post(`${this.baseUrl}bank/employee/`, model);
  }

  updateEmployee(id, model: UpdateEmployee) {
    return this.http.put(`${this.baseUrl}employee/${id}`, model);
  }

  deleteEmployee(id) {
    return this.http.delete(`${this.baseUrl}bank/employee/${id}`);
  }
}
