import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-resultats',
  templateUrl: './resultats.page.html',
  styleUrls: ['./resultats.page.css'],
})
export class ResultatsPage implements OnInit {
  @Input()
  results :Array<any>

  constructor() { }

  ngOnInit() {
  }

}
