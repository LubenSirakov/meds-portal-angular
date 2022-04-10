import { AbstractControl, FormGroup, ValidationErrors, ValidatorFn} from '@angular/forms';

export function emailValidator(control: AbstractControl): ValidationErrors | null {
    const value = control.value;

    if(!value) {
        return null;
    }

    if(!/.{5,}@gmail\.(bg|com)/.test(value)) {
        return {
            email: true
        }
    }
    return null;
}