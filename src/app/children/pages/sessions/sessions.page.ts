import {Component, OnInit} from "@angular/core";
import {DataService} from "../../../data/data.service";
import {IBookingFilm} from "../../../data/interfaces/booking-film.interface";
import {IFilm} from "../../../data/interfaces/film.interface";


@Component({
  templateUrl: 'sessions.html',
  // styleUrls: ['./main.page.scss']
})
export class SessionsPage implements OnInit {

  public allSession: IBookingFilm[] = [];

  constructor(
    private _dataService: DataService
  ) {

  }

  public ngOnInit(): void {

    this._dataService.getBookingSessionList()
      .subscribe((data: IBookingFilm[]) => {
        this.allSession.push(...data)
      })
  }

}
