export class Quote {
  constructor(
    public quote: string,
    public author: string,
    public submitter: string,
    public submit_date: Date,
    public upVote: number,
    public downVote: number
  ) {}
}
