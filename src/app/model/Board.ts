import { Cell } from './Cell';
import { Location } from './Location';

export class Board {
  size: number;
  initialState: Cell[][];

  constructor(size: number){
    this.size = size;
    this.initialState = this.createBoard();
  }

  createBoard(): Cell[][] {
    const getRandomCell = (columnIndex, rowIndex) => new Cell(Math.floor(Math.random() * 9), columnIndex, rowIndex);
    const getRows = (columnIndex) => [...Array(this.size)].map((row, rowIndex) => getRandomCell(columnIndex, rowIndex))
    return [...Array(this.size)].map((column, columnIndex) => getRows(columnIndex));

  }

  getCell(location: Location): Cell {
    return this.initialState[location.x][location.y];
  }


  getNeighbours(location: Location): Cell[] {
    const neighbours = this.getNeighbourCoords(location);
    const filteredNeighbours = this.filterNonexistentLocations(neighbours);
    return filteredNeighbours.map(neighbour => this.getCell(neighbour));
  }

  filterNonexistentLocations(locations: Location[]): Location[] {
    return locations.filter(location => {
      if (location.x < 0 || location.y < 0 || location.x > this.size -1 || location.y > this.size -1){
        return false;
      } else {
        return true
      };
    });
  }

  getNeighbourCoords(location: Location): Location[] {
    const x = location.x;
    const y = location.y;

    const neighbours = [];

    for (let i = x-1; i <= x + 1; i++) {
      for (let j = y-1; j <= y + 1; j++) {
        if (!(i === x && j === y)) {
          neighbours.push(new Location(i, j));
        }
      }
    }

    return neighbours;
  }
}



