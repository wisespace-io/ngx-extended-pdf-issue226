import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-pdf-dialog',
  templateUrl: './pdf-dialog.component.html',
  styleUrls: ['./pdf-dialog.component.scss'],
})

export class PdfDialogComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: any,
              public thisDialogRef: MatDialogRef<PdfDialogComponent>) {
  }

  ngOnInit() {

  }

  closeDialog() {
    this.thisDialogRef.close();
  }
}
