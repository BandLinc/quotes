import { Quote } from './shared/quote.model';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Quotes';
  loadedFeature: string = 'view-quotes';

  onNavigate(feature: string) {
    this.loadedFeature = feature;
  }

  quotes: Quote[] = [];

  addNewQuote(quotes) {
    this.quotes.push(quotes);
  }

  deleteQuote(index) {
    this.quotes.splice(index, 1);
  }
}
