import { Component, OnInit } from '@angular/core';
import { TableService } from 'src/app/services/results/table.service';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit {
    tableData: any = {}; // Para almacenar el JSON de la tabla
  
    constructor(private tableService: TableService) { }
  
    ngOnInit(): void {
      this.tableService.getTableData().subscribe(data => {
        this.tableData = data; 
      });
    }
  }