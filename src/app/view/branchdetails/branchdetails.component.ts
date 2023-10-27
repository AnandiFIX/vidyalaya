import { Component, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { BranchregComponent } from 'src/app/add/branchreg/branchreg.component';

import * as XLSX from 'xlsx';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
  AREA: string;
  STATE: string;
  PHONE: string;
  PHONE1: string;
  ISACTIVE: string;
  action: any;

}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H', AREA :'Jayanagar', STATE : 'Karnataka', PHONE :'123456678', PHONE1 :'2434234234', ISACTIVE : 'Yes', action :''},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He', AREA :'Jayanagar', STATE : 'Karnataka', PHONE :'123456678', PHONE1 :'2434234234', ISACTIVE : 'Yes', action :''},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li', AREA :'Jayanagar', STATE : 'Karnataka', PHONE :'123456678', PHONE1 :'2434234234', ISACTIVE : 'Yes', action :''},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be', AREA :'Jayanagar', STATE : 'Karnataka', PHONE :'123456678', PHONE1 :'2434234234', ISACTIVE : 'Yes', action :''},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B', AREA :'Jayanagar', STATE : 'Karnataka', PHONE :'123456678', PHONE1 :'2434234234', ISACTIVE : 'Yes', action :''},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C', AREA :'Jayanagar', STATE : 'Karnataka', PHONE :'123456678', PHONE1 :'2434234234', ISACTIVE : 'Yes', action :''},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N', AREA :'Jayanagar', STATE : 'Karnataka', PHONE :'123456678', PHONE1 :'2434234234', ISACTIVE : 'Yes', action :''},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O', AREA :'Jayanagar', STATE : 'Karnataka', PHONE :'123456678', PHONE1 :'2434234234', ISACTIVE : 'Yes', action :''},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F', AREA :'Jayanagar', STATE : 'Karnataka', PHONE :'123456678', PHONE1 :'2434234234', ISACTIVE : 'Yes', action :''},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne', AREA :'Jayanagar', STATE : 'Karnataka', PHONE :'123456678', PHONE1 :'2434234234', ISACTIVE : 'Yes', action :''},
];

@Component({
  selector: 'app-branchdetails',
  templateUrl: './branchdetails.component.html',
  styleUrls: ['./branchdetails.component.css']
})
export class BranchdetailsComponent {

  private filterDialogRef: any = MatDialogRef<unknown, any>;
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol', 'AREA' , 'STATE' , 'PHONE' , 'PHONE1' , 'ISACTIVE', 'action'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);
  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort!: MatSort;
    
    constructor(private modal: MatDialog){

    }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }


  delRecord(i: any) {
    // console.log("on delete" + JSON.stringify(i));
    this.dataSource.data.splice(i, 1);

    // console.log("on delete this.dataSource" + JSON.stringify(this.dataSource));

    this.dataSource._updateChangeSubscription();
  }

  onDelete() {
    // console.log('Delete clicked', element);
    // Your delete logic here
  }

  exportExcel() {
    const workSheet = XLSX.utils.json_to_sheet(this.dataSource.data, {
      header: ['dataprop1', 'dataprop2'],
    });
    const workBook: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workBook, workSheet, 'SheetName');
    XLSX.writeFile(workBook, 'filename.xlsx');
  }


  onEdit(element: any){

  }



  toSaveEditedData(element: any){

  }

  openAddClientModal(){

    const dialogRef = this.modal.open(BranchregComponent, {
      width: '800px',
      height: '800px',
    });
    dialogRef.afterClosed().subscribe((result) => {})
  }


  cancelEdit(element: any){

  }
}
