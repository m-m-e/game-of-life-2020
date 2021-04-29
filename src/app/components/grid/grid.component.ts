import { Component, OnInit } from '@angular/core';
import { Board } from 'src/app/model/Board';
import { Cell } from 'src/app/model/Cell';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css']
})
export class GridComponent implements OnInit {

  board: Board;
  selectedCell: Cell;

  constructor() { }

  ngOnInit(): void {
    this.board = new Board(4);
    console.log(this.board);
  }

  checkCellStatus(cell: Cell) {
    this.selectedCell = cell;
    this.board.getCell(this.selectedCell.location);
    this.selectedCell.neighbours = this.board.getNeighbours(this.selectedCell.location);
  }

}
