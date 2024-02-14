import {FormControl} from "@angular/forms";

export interface FormModel {
   fio: FormControl<string | null>,
   age: FormControl<string | null>,
   film: FormControl<string | null>,
    date: FormControl<Date | null>,
}
