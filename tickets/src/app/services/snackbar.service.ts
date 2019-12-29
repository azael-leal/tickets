import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class SnackbarService {

  constructor(
    private matSnackBar: MatSnackBar
  ) { }

  openError(message: string, action: string = null) {
    this.matSnackBar.open(message, action, {
      duration: 4000,
      panelClass: 'snackbar-error',
    });
  }

  openSuccess(message: string, action: string = null) {
    this.matSnackBar.open(message, action, {
      duration: 4000,
      panelClass: 'snackbar-success',
    });
  }

  openWarning(message: string, action: string = null) {
    this.matSnackBar.open(message, action, {
      duration: 4000,
      panelClass: 'snackbar-warning',
    });
  }
}
