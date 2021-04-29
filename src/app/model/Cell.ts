import { Location } from './Location';

export class Cell {
  state: number;
  location: Location;
  neighbours: Cell[];

  constructor(initialState: number, x: number, y: number) {
    this.state = initialState;
    this.location = new Location(x, y);
  }

  get isAlive(): boolean {
    return this.state % 2 === 0;
  }

  // get neighbours(): Cell[]{
  //   return this.neighbours;
  // }


  // set neighbours(neighboursList: Cell[]) {
  //   this.neighbours = neighboursList;
  // }
}
