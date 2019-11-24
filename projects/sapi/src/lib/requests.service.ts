import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class RequestsService {

  constructor(private http: HttpClient) { }

  async get<E>(url: string, header: HttpHeaders):Promise<E>{
    let promise = new Promise<E>((resolve, reject) => {
    this.http.get<E>(url,{
        headers: header
      }).toPromise()
        .then(
          res => {
            resolve(res);
          },
          msg=>{
            reject(msg)
          }
        )
    });
    return promise;
  }

  async post(url: string, header: HttpHeaders, body: any){
    let promise = new Promise((resolve, reject) => {
    this.http.put(url,body,{
        headers: header
      }).toPromise()
        .then(
          res => {
            resolve(res);
          },
          msg=>{
            reject(msg)
          }
        )
    });
    return promise;
  }

  async delete(url: string, header: HttpHeaders){
    let promise = new Promise((resolve, reject) => {
    this.http.delete(url,{
        headers: header
      }).toPromise()
        .then(
          res => {
            resolve(res);
          },
          msg=>{
            reject(msg)
          }
        )
    });
    return promise;
  }
}
