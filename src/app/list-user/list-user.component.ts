import { SelectionModel } from '@angular/cdk/collections';
import { Component, ViewChild} from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ProjectApiService } from '../project-api.service';
import { MatPaginator } from '@angular/material/paginator';
import { HttpClient } from '@angular/common/http';
import { MatDialog, MatDialogConfig  } from '@angular/material/dialog';
import { AddUserComponent } from '../add-user/add-user.component';
import { MatSnackBar } from '@angular/material/snack-bar';


@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.css']
})
export class ListUserComponent {
  ELEMENT_DATA: any[] = [];
  selectedRow: any;
  adduser: any = {};
 displayedColumns: string[] = ['select', 'id', 'name', 'email', 'phone', 'password'];
 dataSource  = new MatTableDataSource<any>(this.ELEMENT_DATA);
 userArray :any =[];
 selection = new SelectionModel<PeriodicElement>(true, []);
 selections = new SelectionModel<PeriodicElement>(true, []);
 @ViewChild(MatPaginator) paginator!: MatPaginator;
 constructor(private users :ProjectApiService ,private http: HttpClient, public dialog: MatDialog,  private snackBar: MatSnackBar){};
 

 openSnackBar(message: string,  isSuccess: boolean) {
  const panelClass = isSuccess ? ['success-snackbar'] : ['error-snackbar'];
  this.snackBar.open(message,'' ,{
    horizontalPosition:'end',
    verticalPosition:'bottom',
     panelClass: panelClass

  });
}


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
  const dialogRef= this.dialog.open(AddUserComponent);
  dialogRef.afterClosed().subscribe(()=>{
   this.getUsers();
  })
}
openEdit() {
  if (this.selection.selected.length > 1) {
    
    (document.getElementById("tool-bar-edit") as HTMLLIElement).style.display = 'none';
  } else {
    (document.getElementById("tool-bar-edit") as HTMLLIElement).style.display = 'block';
  }
}

 openToolbar() {
  if (this.selection.selected.length > 0) {
    (document.getElementById("toolBar") as HTMLLIElement).style.display = 'block';
  } else {
    (document.getElementById("toolBar") as HTMLLIElement).style.display = 'none';
  }

  if (this.selection.selected.length > 1) {
    (document.getElementById("tool-bar-edit") as HTMLLIElement).style.display = 'none';
  } else {
    (document.getElementById("tool-bar-edit") as HTMLLIElement).style.display = 'block';
  }

}


   
handleCheckboxChange(row: PeriodicElement): void {
  this.selections.toggle(row);
  this.selectedRow=this.selections.selected.length > 0 ? this.selections.selected :undefined;
}
 
   editUser(){
    const dialogConfig = new MatDialogConfig();
    dialogConfig.data = this.selectedRow[0];
    this.selectedRow.isEdit = true;
    const dialogRef =this.dialog.open(AddUserComponent, dialogConfig);

    dialogRef.afterClosed().subscribe((res) => {
     if(res){
      const index =this.dataSource.data.findIndex(e => e.id === res.id)
      if(index != -1){
        this.selection.clear();
        this.selections.clear(); 
        this.openToolbar();
      }
      
     }
    //  this.selection.clear();
    //  this.openToolbar();
    });
  }

  deleteUser(): void {
    this.selections.selected.forEach(selectedUser => {
      this.users.deleteUser(selectedUser.id).subscribe(
        (res) => {
          console.log(`User with ID ${selectedUser.id} deleted successfully:`, res);
          this.openSnackBar( 'deletedSuccessfully',true);

          // If you want to remove the deleted user from the selections
          const index = this.selections.selected.indexOf(selectedUser);
          if (index > -1) {
            this.selections.selected.splice(index, 1);
          }
          
          // Clear selections after successful deletion
          this.selection.clear();
          this.selections.clear();
          this.openToolbar();
          this.getUsers();
        },
        (error:any) => {
          console.error(`Error deleting user with ID ${selectedUser.id}:`, error);
          this.openSnackBar('deletedSuccessfully',true);
        }
      );
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