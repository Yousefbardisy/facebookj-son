import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-regster',
  templateUrl: './regster.component.html',
  styleUrls: ['./regster.component.scss'],
})
export class RegsterComponent implements OnInit {
  constructor(public dialogRef: MatDialogRef<RegsterComponent>) {}

  ngOnInit(): void {}
}
