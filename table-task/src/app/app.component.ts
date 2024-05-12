import {AfterViewInit, ChangeDetectorRef, Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import { DataService } from './data.service';




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit,AfterViewInit {
   moviesData:any; 
  displayedColumns:any = ['country','capital','official'];
  dataSource: any;
  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  manageMovieListCount: any;
  page: any;
  count: any;

  ngOnInit(): void {
    this.fetchMoviesApi();
  }

  constructor(private _DataService:DataService,private cdr:ChangeDetectorRef){}
  
  ngAfterViewInit(): void {
    // this.dataSource.paginator = this.paginator;
  }
  
  paginate(event: any) { 
    console.log('event', event.pageIndex, event.pageSize); 
    this.page = event.pageIndex + 1; 
    this.count = event.pageSize; 
   
   }


  fetchMoviesApi(){
    this._DataService.getMoviesApi().subscribe({
      next:(data:any) => {
        this.moviesData = data;
        const firstFiveRecords = this.moviesData.slice(1,10);
        this.dataSource = new MatTableDataSource(this.moviesData);
        console.log('dataSource',this.dataSource);
        this.dataSource.paginator = this.paginator;
        this.manageMovieListCount = this.moviesData.length;
        this.cdr.detectChanges();
      }
    });
    
  }

}
 
  