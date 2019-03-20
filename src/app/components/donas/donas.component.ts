import { Component } from '@angular/core';

@Component({
  selector: 'app-donas',
  templateUrl: './donas.component.html',
  styleUrls: ['./donas.component.css']
})
export class DonasComponent {
    public doughnutChartLabels:string[] = ['Tamales', 'Tacos', 'Tortas'];
     public doughnutChartData:number[] = [350, 450, 100];
     public doughnutChartType:string = 'doughnut';

     // events
     public chartClicked(e:any):void {
       console.log(e);
     }

     public chartHovered(e:any):void {
       console.log(e);
     }

     public cambiar_valores(){
         this.doughnutChartData=[
             Math.round(Math.random()*100),
             Math.round(Math.random()*100),
             Math.round(Math.random()*100)
         ]
     }
}
