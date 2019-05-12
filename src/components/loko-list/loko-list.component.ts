import { Component, OnInit } from '@angular/core';
import { Sort } from '@angular/material';
import { Observable } from 'rxjs';


import { Lokomotif } from '../../models/lokomotif';
import { LokoServiceService } from '../../services/loko-service.service';

@Component({
  selector: 'app-loko-list',
  templateUrl: './loko-list.component.html',
  styleUrls: ['./loko-list.component.css']
})
export class LokoListComponent implements OnInit {


  dataSource: Observable<Lokomotif[]>
  displayedColumns: string[] = ['Kod', 'Durum', 'BolgeAd', 'Online_Tarih', 'actions'];

  constructor(private lokoService: LokoServiceService) { }

  ngOnInit() {
    this.dataSource = this.lokoService.getLokoList().subscribe(a=>{
      console.log("gelen a: ",a)
    },
    h=>{
      console.error("gelen err:",h)
    })
  }

}