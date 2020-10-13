import { Quote } from './../shared/quote.model';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-add-quote',
  templateUrl: './add-quote.component.html',
  styleUrls: ['./add-quote.component.css'],
})
export class AddQuoteComponent implements OnInit {
  newquote = new Quote('', '', '', new Date(), 0, 0);

  @Output() addQuote = new EventEmitter<Quote>();

  submitQuote() {
    this.addQuote.emit(this.newquote);
  }

  constructor() {}

  ngOnInit(): void {}
}
