import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { $ } from 'protractor';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  list_catagory: any;

  constructor(
    private http: HttpClient
  ) { }

  ngOnInit(): void {
    this.getData();
  }

  getData() {
    this.http.get('https://api.publicapis.org/categories').subscribe(data => {
      console.log(data);
      this.list_catagory = data;
    })
  }

  search_catagory() {

    var input, filter, table, tr, td, i, txtValue;
    input = document.getElementById("input_data");
    filter = input.value.toUpperCase();
    table = document.getElementById("table_data");
    tr = table.getElementsByTagName("tr");
    for (i = 0; i < tr.length; i++) {
      td = tr[i].getElementsByTagName("td")[0];
      if (td) {
        txtValue = td.textContent || td.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
          tr[i].style.display = "";
        } else {
          tr[i].style.display = "none";
        }
      }
    }
  }

}
