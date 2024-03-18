import {inject, Injectable} from "@angular/core";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {HOST_TOKEN} from "../tokens/host.token";
import {IFilm} from "./interfaces/film.interface";
import {IBookingFilm} from "./interfaces/booking-film.interface";


@Injectable()
export class DataService {

  public _host: string = 'http://158.160.144.155:8000'

  constructor(
    private _http: HttpClient,
  ) {

  }

  public getFilmLIst(): Observable<IFilm[]> {
    const url: string = this._host + '/list/film'

    return this._http.get<IFilm[]>(url)
  }

  public getBookingSessionList(): Observable<IBookingFilm[]> {
    const url: string = this._host + '/list/session'


    return this._http.get<IBookingFilm[]>(url)
  }

  public bookingFilmSession(bookingSession: IBookingFilm): Observable<IBookingFilm[]> {
    const url: string = this._host + '/api/booking'
    let headers: HttpHeaders = new HttpHeaders();
    headers.append("Access-Control-Allow-Headers","*");

    return this._http.post<IBookingFilm[]>(url, bookingSession, {
      headers: headers
    })
  }


}
