import { Component } from '@angular/core';
import { Ipro,Ifru,Icol,Icit,Isub,Iveh } from './module/interfacelist';
import { products, fruits,colors,cities,subjects,vehicles,animals,sports,countries,languages,vegetables,birds,programming,festivals,rivers,mobileBrands,socialMedia,beverages,dishes,months, planets, flowers, professions,gadgets,weekdays,states,instruments,webTech,clothing, household,weather,monuments,stationery,devTools,emotions} from './const/list';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'listTask';
  productsArr:Ipro[] =products
  fruitsArr:Ifru[]=fruits
  colorsArr:Icol[]=colors
  citysArr:Icit[]=cities
  subjectsArr:Isub[]=subjects
  vehiclesArr:Iveh[]=vehicles
  animalsArr:string[]=animals
  sportsArr:string[]=sports 
  countriesArr:string[]=countries
  languagesArr:string[]=languages
  vegetablesArr:string[]=vegetables
  birdsArr:string[]=birds
  programmingsArr:string[]=programming
  festivalsArr:string[]=festivals
  riversArr:string[]=rivers
  mobilesArr:string[]=mobileBrands
  socialMediasArr:string[]=socialMedia
 beveragesArr:string[] =beverages
  dishesArr:string[]=dishes
  monthsArr:string[]=months
  planetsArr:string[]=planets
  flowersArr:string[]=flowers
  professionsArr:string[]=professions
  gadgetsArr:string[]=gadgets
  weekdaysArr:string[]=weekdays
  statesArr:string[]=states
  instrumentsArr:string[]=instruments
  webTechsArr:string[]=webTech
  clothesArr:string[]=clothing
  householdsArr:string[]=household
  weathersArr:string[]=weather
 monumentsArr:string[]=monuments 
  stationerysArr:string[]=stationery
  devToolsArr:string[]=devTools
  emotionsArr:string[]=emotions
}
