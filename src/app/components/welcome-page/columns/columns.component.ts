import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-columns',
  templateUrl: './columns.component.html',
  styleUrls: ['./columns.component.scss']
})
export class ColumnsComponent implements OnInit {

  @Input() columnImage: String;
  @Input() columnText: String;

  constructor() { }


  ngOnInit(): void {
  }

}
