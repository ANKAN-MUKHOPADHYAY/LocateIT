import { Component, OnInit, ElementRef } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ViewChild } from '@angular/core';
import { Chart } from 'chart.js';
import * as jspdf from 'jspdf';  
import html2canvas from 'html2canvas';



@IonicPage()
@Component({
  selector: 'page-sales-agent',
  templateUrl: 'sales-agent.html',
})

export class SalesAgentPage {
  @ViewChild('barCanvas') barCanvas;
  @ViewChild('doughnutCanvas') doughnutCanvas;
  @ViewChild('lineCanvas') lineCanvas;

  barChart:any;
  doughnutChart:any;
  lineChart: any;
  data:any;
  imgWidth:any;
  pageHeight:any;
  imgHeight:any;
  heightLeft:any;


  today:any;
  yesterday:any;
  currweek:any;
  lastweek:any;
  Date: any = new Date();
  month: any = this.Date.getMonth();
  monthlist=["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sept", "Oct", "Nov", "Dec"];
 
  
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    this.today = this.Date.getDate()+"-"+this.monthlist[this.month]+"-"+this.Date.getFullYear();
    this.yesterday = this.Date.getDate()-1+"-"+this.monthlist[this.month]+"-"+this.Date.getFullYear();
    this.currweek = this.Date.getDate()-6+"-"+this.monthlist[this.month]+"-"+this.Date.getFullYear()+" To "+this.today;
    this.lastweek = this.Date.getDate()-8+"-"+this.monthlist[this.month]+"-"+this.Date.getFullYear()+" To ";
    this.barChart = new Chart(this.barCanvas.nativeElement, {

      type: 'bar',
            data: {
                labels: ["Java", "Web Development", "React JS", "Mobile App Development", "Angular 4and Ionic 2"],
                datasets: [{
                    label: 'Course Statistics',
                    data: [12, 19, 3, 5, 2, 3],
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.8)',
                        'rgba(54, 162, 235, 0.8)',
                        'rgba(255, 206, 86, 0.8)',
                        'rgba(75, 192, 192, 0.8)',
                        'rgba(153, 102, 255, 0.8)',
                        'rgba(255, 159, 64, 0.8)'
                    ],
                    borderColor: [
                        'rgba(255,99,132,1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)',
                        'rgba(75, 192, 192, 1)',
                        'rgba(153, 102, 255, 1)',
                        'rgba(255, 159, 64, 1)'
                    ],
                    borderWidth: 1
                }]
            },
            options: {
              scales: {
                  yAxes: [{
                      ticks: {
                          beginAtZero:true
                      }
                  }]
              }
          }

        });

        this.doughnutChart = new Chart(this.doughnutCanvas.nativeElement, {
 
          type: 'doughnut',
          data: {
              labels: ["Java", "Web Development", "React JS", "Mobile App Development", "Angular 4and Ionic 2","Advanced Programming"],
              datasets: [{
                  label: '# of Votes',
                  data: [12, 19, 3, 5, 2, 3],
                  backgroundColor: [
                      'rgba(255, 99, 132, 0.8)', 
                      'rgba(54, 162, 235, 0.8)',
                      'rgba(255, 206, 86, 0.8)',
                      'rgba(75, 192, 192, 0.8)',
                      'rgba(153, 102, 255, 0.8)',
                      'rgba(255, 159, 64, 0.8)'
                  ],
                  hoverBackgroundColor: [
                      "#FF6384",
                      "#36A2EB",
                      "#FFCE56",
                      "#FF6384",
                      "#36A2EB",
                      "#FFCE56"
                  ]
              }]
          }

      });

      this.lineChart = new Chart(this.lineCanvas.nativeElement, {
 
        type: 'line',
        data: {
            labels: ["1st", "5th", "10th", "15th", "20th", "25th", "30th"],
            datasets: [
                {
                    label: "Java Course Lead",
                    fill: false,
                    lineTension: 0.1,
                    backgroundColor: "rgba(75,192,192,0.4)",
                    borderColor: "rgba(75,192,192,1)",
                    borderCapStyle: 'butt',
                    borderDash: [],
                    borderDashOffset: 0.0,
                    borderJoinStyle: 'miter',
                    pointBorderColor: "rgba(75,192,192,1)",
                    pointBackgroundColor: "#fff",
                    pointBorderWidth: 1,
                    pointHoverRadius: 5,
                    pointHoverBackgroundColor: "rgba(75,192,192,1)",
                    pointHoverBorderColor: "rgba(220,220,220,1)",
                    pointHoverBorderWidth: 2,
                    pointRadius: 1,
                    pointHitRadius: 10,
                    data: [10,6,7,13,19,12,21],
                    spanGaps: false,
                },

                {
                    label: "Web Development",
                    fill: false,
                    lineTension: 0.1,
                    backgroundColor: "rgba(255,0,0,0.4)",
                    borderColor: "rgba(255,0,0,1)",
                    borderCapStyle: 'butt',
                    borderDash: [],
                    borderDashOffset: 0.0,
                    borderJoinStyle: 'miter',
                    pointBorderColor: "rgba(75,192,192,1)",
                    pointBackgroundColor: "#fff",
                    pointBorderWidth: 1,
                    pointHoverRadius: 5,
                    pointHoverBackgroundColor: "rgba(75,192,192,1)",
                    pointHoverBorderColor: "rgba(220,220,220,1)",
                    pointHoverBorderWidth: 2,
                    pointRadius: 1,
                    pointHitRadius: 10,
                    data: [9,5,2,6,10,15,12],
                    spanGaps: false,
                },

                {
                    label: "React JS",
                    fill: false,
                    lineTension: 0.1,
                    backgroundColor: "rgba(0,255,0,0.4)",
                    borderColor: "rgba(0,255,0,1)",
                    borderCapStyle: 'butt',
                    borderDash: [],
                    borderDashOffset: 0.0,
                    borderJoinStyle: 'miter',
                    pointBorderColor: "rgba(75,192,192,1)",
                    pointBackgroundColor: "#fff",
                    pointBorderWidth: 1,
                    pointHoverRadius: 5,
                    pointHoverBackgroundColor: "rgba(75,192,192,1)",
                    pointHoverBorderColor: "rgba(220,220,220,1)",
                    pointHoverBorderWidth: 2,
                    pointRadius: 1,
                    pointHitRadius: 10,
                    data: [6,13,15,12,22,17,20],
                    spanGaps: false,
                },

                {
                    label: "Mobile App Development",
                    fill: false,
                    lineTension: 0.1,
                    backgroundColor: "rgba(0,0,255,0.4)",
                    borderColor: "rgba(0,0,255,1)",
                    borderCapStyle: 'butt',
                    borderDash: [],
                    borderDashOffset: 0.0,
                    borderJoinStyle: 'miter',
                    pointBorderColor: "rgba(75,192,192,1)",
                    pointBackgroundColor: "#fff",
                    pointBorderWidth: 1,
                    pointHoverRadius: 5,
                    pointHoverBackgroundColor: "rgba(75,192,192,1)",
                    pointHoverBorderColor: "rgba(220,220,220,1)",
                    pointHoverBorderWidth: 2,
                    pointRadius: 1,
                    pointHitRadius: 10,
                    data: [10,13,15,11,19,22,25],
                    spanGaps: false,
                },

                {
                    label: "Angular 4 and Ionic 2",
                    fill: false,
                    lineTension: 0.1,
                    backgroundColor: "rgba(128,0,128,0.4)",
                    borderColor: "rgba(128,0,128,1)",
                    borderCapStyle: 'butt',
                    borderDash: [],
                    borderDashOffset: 0.0,
                    borderJoinStyle: 'miter',
                    pointBorderColor: "rgba(75,192,192,1)",
                    pointBackgroundColor: "#fff",
                    pointBorderWidth: 1,
                    pointHoverRadius: 5,
                    pointHoverBackgroundColor: "rgba(75,192,192,1)",
                    pointHoverBorderColor: "rgba(220,220,220,1)",
                    pointHoverBorderWidth: 2,
                    pointRadius: 1,
                    pointHitRadius: 10,
                    data: [11,8,5,13,20,17,22],
                    spanGaps: false,
                }
            ]
        }

        

    });
  
}

    captureBarGraph(){  
       this.data = document.getElementById('graph1ToPdf');  
      html2canvas(this.data).then(canvas => {  
        // Few necessary setting options  
       this.imgWidth = 208;   
       this.pageHeight = 295;    
       this.imgHeight = 150;//canvas.height * this.imgWidth / canvas.width;  
       this.heightLeft = this.imgHeight;  
    
        const contentDataURL = canvas.toDataURL('image/png');  
        let pdf = new jspdf('p', 'mm', 'a4'); // A4 size page of PDF  
        var position = 0;  
        pdf.addImage(contentDataURL, 'PNG', 0, position, this.imgWidth, this.imgHeight)  
        pdf.save('BarGraph.pdf'); // Generated PDF   
      });
  
    }
    
    captureDouGraph(){  
    
       this.data = document.getElementById('graph2ToPdf');  
      html2canvas(this.data).then(canvas => {  
        // Few necessary setting options  
       this.imgWidth = 208;   
       this.pageHeight = 295;    
       this.imgHeight = 100;//canvas.height * this.imgWidth / canvas.width;  
       this.heightLeft = this.imgHeight;  
    
        const contentDataURL = canvas.toDataURL('image/png')  
        let pdf = new jspdf('p', 'mm', 'a4'); // A4 size page of PDF  
        var position = 0;  
        pdf.addImage(contentDataURL, 'PNG', 0, position, this.imgWidth, this.imgHeight)  
        pdf.save('DoughnutGraph.pdf'); // Generated PDF   
      });
  
    }
   

    captureLineGraph(){  
    
        this.data = document.getElementById('graph3ToPdf');  
       html2canvas(this.data).then(canvas => {  
         // Few necessary setting options  
        this.imgWidth = 208;   
        this.pageHeight = 295;    
        this.imgHeight = 100; //canvas.height * this.imgWidth / canvas.width;  
        this.heightLeft = this.imgHeight;  
     
         const contentDataURL = canvas.toDataURL('image/png')  
         let pdf = new jspdf('p', 'mm', 'a4'); // A4 size page of PDF  
         var position = 0;  
         pdf.addImage(contentDataURL, 'PNG', 0, position, this.imgWidth, this.imgHeight)  
         pdf.save('lineGraph.pdf'); // Generated PDF   
       });
   
     }

    }

   
     
  



 
  



