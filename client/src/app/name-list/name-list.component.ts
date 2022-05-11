import { Component, OnInit } from '@angular/core';

import { Name } from '../name';
import { NameServiceService } from '../name-service.service';

@Component({
  selector: 'app-name-list',
  templateUrl: './name-list.component.html',
  styleUrls: ['./name-list.component.css']
})
export class NameListComponent implements OnInit {

  names: Name[];

  constructor(private nameService: NameServiceService) {
    this.names = [
    ];
   }

  ngOnInit(): void {
    this.nameService.findAll().subscribe(data => {
      this.names = data;
    })
  }
}
