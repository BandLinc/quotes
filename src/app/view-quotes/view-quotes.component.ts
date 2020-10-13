import { Quote } from './../shared/quote.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-quotes',
  templateUrl: './view-quotes.component.html',
  styleUrls: ['./view-quotes.component.css'],
})
export class ViewQuotesComponent implements OnInit {
  quotes: Quote[] = [new Quote('', '', '', new Date(), 0, 0)];

  addNewQuote(quotes) {
    this.quotes.push(quotes);
  }

  constructor() {}

  ngOnInit(): void {}
}
