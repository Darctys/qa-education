import {ChangeDetectorRef, Component} from "@angular/core";
import {FormModel} from "./models/form.model";
import {FormBuilder, FormGroup} from "@angular/forms";
import {NzI18nService} from "ng-zorro-antd/i18n";
import {DummyService} from "../../services/dump.service";


@Component({
  templateUrl: './main.page.html',
  styleUrls: ['./main.page.scss']
})
export class MainPage {

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

  constructor(
    private _formBuilder: FormBuilder,
    private _cdr: ChangeDetectorRef,
    private _i18n: NzI18nService,
    private _dumpService: DummyService
  ) {
    setInterval(() => this._dumpService.some$.next(100000000), 50);
      this._dumpService.some$.subscribe(value => {
        this.dump = value
      })
      console.log('Форма появилась')
  }

  public submitForm(): void {
    if(this.accept > 1) {
      console.log('билет появился')
      this.isShowBilet = true
      this.accept--
      this._cdr.detectChanges()
      return
    }
    this.isShowBilet = false
    this.accept++
  }

}
