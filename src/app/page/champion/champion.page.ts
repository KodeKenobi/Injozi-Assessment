import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/service/app/app.service';

@Component({
  selector: 'app-champion',
  templateUrl: './champion.page.html',
  styleUrls: ['./champion.page.scss'],
})
export class ChampionPage implements OnInit {
  //declaration to hold a list of F1 champions
  public champion: any[];
  //declaration to hold a list of F1 champions seasons
  public years: Array<number>;
  public year_id: number;
  //declaration will hold a list of winners permanentNumber
  public winner: any[];

  constructor(private _service: AppService) {
    //initialize decleared variables with default values
    this.champion = [];
    this.years = [];
    this.year_id = 0;
    this.winner = [];
  }

  ngOnInit() {
    //getting the current year and assigning it to 'currentYear' variable
    let currentYear: number = new Date().getFullYear();
    //loop through saeason from 2005 till this year's saeason
    for (let i = 2005; i < currentYear + 1; i++) {
      // call get_champions method
      this.get_champions(i);
      this.get_saeason_winner(i);
    }
  }

  // method will call the champions service
  private get_champions(year: number) {
    this._service.get_champion(year).subscribe((res) => {
      let champs: any = res
      let champions = champs.MRData.RaceTable.Races;
      //condition to check if there are any races in a saeason
      if (champions.length > 0) {
        //adding the season to the year array 
        this.years.push(year);
        //adding F1 champions 
        this.champion[year] = champions;
      }
      //sort seasons in decending order
      this.years.sort().reverse();
    }, (err) => {
      console.error(err);
    });
  }

  //method to get the champion with the highest points
  private get_saeason_winner(year: number) {
    this._service.get_standings(year).subscribe((res) => {
      let winner: any = res;
      let permanentNumber: any = winner.MRData.StandingsTable.StandingsLists[0].DriverStandings[0].Driver.permanentNumber;
      this.winner[year] = permanentNumber;
    }, (err) => {
      console.error(err);
    });
  }
}
