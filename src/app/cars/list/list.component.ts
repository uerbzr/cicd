import { Component, Input } from '@angular/core';
import { CarService } from '../car.service';
import { Car } from '../models/car';
import { VotingService } from '../voting.service';
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css',
})
export class ListComponent {
  constructor(
    private readonly carService: CarService,
    private readonly votingService: VotingService
  ) {}
  @Input() numberofvotes = 0;
  cars: Car[] = this.carService.cars;
  voteCount(id: number) {
    return this.votingService.CountVotes(id);
  }
  voteAdd(id: number) {
    this.votingService.AddVote(id);
  }
}
