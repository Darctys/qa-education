import {ChangeDetectorRef, Component, OnInit} from "@angular/core";
import {FormModel} from "./models/form.model";
import {FormBuilder, FormGroup} from "@angular/forms";
import {NzI18nService} from "ng-zorro-antd/i18n";
import {DummyService} from "../../services/dump.service";
import {DataService} from "../../../data/data.service";
import {IFilm} from "../../../data/interfaces/film.interface";
import {IBookingFilm} from "../../../data/interfaces/booking-film.interface";


@Component({
  templateUrl: './main.page.html',
  styleUrls: ['./main.page.scss']
})
export class MainPage implements OnInit {

  public form: FormGroup<FormModel> = this._formBuilder.group({
    fio: ['Ваше фио'],
    age: [''],
    film: [''],
    date: [new Date('10.02.1970')]
  });

  public dump = 0;

  public accept: number = 1

  public qrLink: string = 'https://www.youtube.com/watch?v=dQw4w9WgXcQ';

  public isShowBilet: boolean = false

  public filmList: IFilm[] = [];

  public notAllowDate: Date[] = [];

  public allSession: IBookingFilm[] = [];

  public disabledDate = (current: Date): boolean => {
    const findDate = this.notAllowDate.find((value: Date) => value === current)
    if (findDate) {
      return true
    } else {
      return false
    }
  }


  constructor(
    private _formBuilder: FormBuilder,
    private _cdr: ChangeDetectorRef,
    private _i18n: NzI18nService,
    private _dumpService: DummyService,
    private _dataService: DataService
  ) {
    setInterval(() => this._dumpService.some$.next(100000000), 50);
      this._dumpService.some$.subscribe(value => {
        this.dump = value
      })
      console.log('Форма появилась')
  }

  public ngOnInit(): void {
    this._dataService.getFilmLIst()
      .subscribe((data: IFilm[]) => {
        this.filmList = data.filter((film: IFilm) => film.isEnabled);
      })

    this._dataService.getBookingSessionList()
      .subscribe((data: IBookingFilm[]) => {
        this.allSession = data.filter((session: IBookingFilm) => session.film.isEnabled)
        this.notAllowDate = data.map((session: IBookingFilm) => session.sessionDate)
      })
  }

  public submitForm(): void {
      const clientName: string = this.form.controls.fio.value!;
      const ageClient: number = Number(this.form.controls.age.value);
      const sessionDate: Date = this.form.controls.date.value!
      const filmId: number = Number(this.form.controls.film.value);
      const film: IFilm = this.filmList.find((film: IFilm) => film.id === filmId)!;

      const bookingModel: IBookingFilm = {
        id: 8,
        sessionDate: sessionDate,
        ageClient: ageClient,
        clientName: clientName,
        film: film
      }

      this._dataService.bookingFilmSession(bookingModel).subscribe(()=> {
        this.isShowBilet = true;
        console.log('░░░░░░░░░░▀▀▀██████▄▄▄░░░░░░░░░░\n' +
          '░░░░░░░░░░░░░░░░░▀▀▀████▄░░░░░░░\n' +
          '░░░░░░░░░░▄███████▀░░░▀███▄░░░░░\n' +
          '░░░░░░░░▄███████▀░░░░░░░▀███▄░░░\n' +
          '░░░░░░▄████████░░░░░░░░░░░███▄░░\n' +
          '░░░░░██████████▄░░░░░░░░░░░███▌░\n' +
          '░░░░░▀█████▀░▀███▄░░░░░░░░░▐███░\n' +
          '░░░░░░░▀█▀░░░░░▀███▄░░░░░░░▐███░\n' +
          '░░░░░░░░░░░░░░░░░▀███▄░░░░░███▌░\n' +
          '░░░░▄██▄░░░░░░░░░░░▀███▄░░▐███░░\n' +
          '░░▄██████▄░░░░░░░░░░░▀███▄███░░░\n' +
          '░█████▀▀████▄▄░░░░░░░░▄█████░░░░\n' +
          '░████▀░░░▀▀█████▄▄▄▄█████████▄░░\n' +
          '░░▀▀░░░░░░░░░▀▀██████▀▀░░░▀▀██░░')
      });

  }

}
