import {IFilm} from "./film.interface";

export interface IBookingFilm {
  id: number,
  sessionDate: Date,
  ageClient: number,
  clientName: string,
  film: IFilm,
  filmId: number
}
