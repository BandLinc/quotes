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

  up_votes: number[] = [];

  onNavigate(feature: string) {
    this.loadedFeature = feature;
  }

  quotes: Quote[] = [];

  addNewQuote(quotes) {
    this.quotes.push(quotes);
    //this.up_votes.push(quotes.upVote);
    //console.log(Math.max(...this.up_votes));
  }

  up_Vote(index) {
    this.quotes[index].upVote++;
    this.up_votes.push(this.quotes[index].upVote);
  }

  deleteQuote(index) {
    this.quotes.splice(index, 1);
  }
  isMax(index) {
    if (this.quotes[index].upVote === Math.max(...this.up_votes)) {
      return true;
    } else {
      return false;
    }
  }
}
