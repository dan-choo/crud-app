import { Component, OnInit } from '@angular/core';
import { Name } from '../name';
import { NameServiceService } from '../name-service.service';

@Component({
  selector: 'app-names',
  templateUrl: './names.component.html',
  styleUrls: ['./names.component.css']
})
export class NamesComponent implements OnInit {

  name: Name;
  names: Name[];

  constructor(
    private nameService: NameServiceService,
  ) {
    this.name = new Name();
    this.name.id = String(Math.floor((Math.random() * 100) + 1));

    this.names = [];
   }

  refreshList() {
    this.nameService.findAll().subscribe(data => {
      this.names = data;
    })
  }

  onSubmit() {
    console.log(this.name);
    this.nameService.save(this.name).subscribe(data => {
      console.log(data);
      this.refreshList();
    });
  }

  ngOnInit(): void {
    this.refreshList();
  }
}
