import {Injectable} from "@angular/core";
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class DummyService {

  public some$ = new BehaviorSubject<number>(42);
}
