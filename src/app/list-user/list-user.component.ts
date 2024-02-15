import { SelectionModel } from '@angular/cdk/collections';
import { Component, ViewChild} from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ProjectApiService } from '../project-api.service';
import { MatPaginator } from '@angular/material/paginator';
import { HttpClient } from '@angular/common/http';
import { MatDialog } from '@angular/material/dialog';
import { AddUserComponent } from '../add-user/add-user.component';


@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.css']
})
export class ListUserComponent {
  ELEMENT_DATA: any[] = [];
  adduser: any = {};
 displayedColumns: string[] = ['select', 'id', 'name', 'email', 'phone', 'password'];
 dataSource  = new MatTableDataSource<any>(this.ELEMENT_DATA);
 userArray :any =[];
 selection = new SelectionModel<any>(true, []);
 @ViewChild(MatPaginator) paginator!: MatPaginator;
 constructor(private users :ProjectApiService ,private http: HttpClient, public dialog: MatDialog){};
 

 ngAfterViewInit() {
   this.dataSource.paginator = this.paginator;
 }
 /** Whether the number of selected elements matches the total number of rows. */
 isAllSelected() {
   const numSelected = this.selection.selected.length;
   const numRows = this.dataSource.data.length;
   return numSelected === numRows;
 }

 /** Selects all rows if they are not all selected; otherwise clear selection. */
 toggleAllRows() {
   if (this.isAllSelected()) {
     this.selection.clear();
     return;
   }

   this.selection.select(...this.dataSource.data);
 }

 /** The label for the checkbox on the passed row */
 checkboxLabel(row?: any): string {
   if (!row) {
     return `${this.isAllSelected() ? 'deselect' : 'select'} all`;
   }
   return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.id + 1}`;
 }

 ngOnInit() {
   // Call the getUsers function when the component is initialized
   this.getUsers();
 }

getUsers() {
 this.users.getUsers().subscribe((response:any) => {
   //console.log(response);
   this.ELEMENT_DATA = response
   this.dataSource  = new MatTableDataSource<any>(this.ELEMENT_DATA);
   this.dataSource.paginator = this.paginator;  
 });
}

applyFilter(event: Event) {
 const filterValue = (event.target as HTMLInputElement).value;
 this.dataSource.filter = filterValue.trim().toLowerCase();
}
openDialog() {
 const dialogRef = this.dialog.open(AddUserComponent, {
   // disableClose:true,
   height: 'fit-content',
   disableClose: true,
   data: this.adduser
   

   
   // data:
 });
 dialogRef.afterClosed().subscribe(result => {
  if (result && result.emp) {
    console.log(result.emp);
    this.ELEMENT_DATA.push(result.emp);
    this.dataSource.data = this.ELEMENT_DATA; 
    console.log(this.dataSource.data);
    this.selection.clear(); // Clear the selection
    // Update the MatTableDataSource with the updated data
  }
});
}

}
export interface PeriodicElement {
  name: string;
  id: number;
  email: string;
  phone: string;
  password: string;
}