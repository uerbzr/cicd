import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class VotingService {
  constructor() {}
  votesArray: number[] = [];
  AddVote(id: number) {
    this.votesArray.push(id);
  }
  CountVotes(id: number) {
    return this.votesArray.filter((x) => x === id).length;
  }
}
