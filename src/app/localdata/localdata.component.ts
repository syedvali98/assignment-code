import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-localdata',
  templateUrl: './localdata.component.html',
  styleUrls: ['./localdata.component.css']
})
export class LocaldataComponent implements OnInit {

  pokemonData;
  displayData;
  search

  constructor(public http:HttpClient) { }

  ngOnInit() {
    this.http.get('https://sample-ea28d.firebaseio.com/pokemon.json').subscribe(
      (response)=>{
        console.log();
        this.pokemonData = response;
      }
    )
  }

  getData(event: Event){
    this.search = (<HTMLInputElement>event.target).value;
    for(let x in this.pokemonData){
      if(this.search == this.pokemonData[x].name){
        this.displayData = this.pokemonData[x];
      }
    }
  }

}
