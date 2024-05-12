import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
// import { MatTableExporterModule } from 'mat-table-exporter';




const matModules:any = [
  HttpClientModule,
  MatPaginator,
  MatTableDataSource,
  HttpClient,
  CommonModule,
  MatSort,
  MatSortModule,
  MatInputModule,
  MatFormFieldModule
  
]

@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatPaginatorModule,
    MatTableModule,
    MatButtonModule
    
  ],
  providers: [],
  bootstrap:[AppComponent]
})
export class AppModule { }
