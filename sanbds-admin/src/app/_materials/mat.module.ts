import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule, MatInputModule, MatTabsModule, MatPaginatorModule, MatButtonModule, MatCardModule, MatIconModule, MatSlideToggleModule, MatTableModule, MatTableDataSource, MatSortModule, MatSelectModule, MatCheckboxModule, MatAutocompleteModule } from '@angular/material';
import { MatTooltipModule } from "@angular/material/tooltip"
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
@NgModule({
  imports: [
    CommonModule,    
    MatTooltipModule,
    MatFormFieldModule,
    MatInputModule,
    MatTabsModule,
    MatPaginatorModule,
    MatButtonModule,  
    MatCardModule,
    MatIconModule,
    MatSlideToggleModule,    
    MatTableModule,
    MatSortModule,
    MatSelectModule
  ],
  exports: [
    CommonModule,    
    MatTooltipModule,
    MatFormFieldModule,
    MatInputModule,
    MatTabsModule,
    MatPaginatorModule,
    MatButtonModule,   
    MatCardModule,
    MatIconModule,
    MatSlideToggleModule,    
    MatTableModule,
    MatSortModule,    
    MatSelectModule,
    MatCheckboxModule,
    MatAutocompleteModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule
  ],
  declarations: []
})
export class MatModule { }
