import { Component, ViewChild, ElementRef, OnInit } from '@angular/core';
// import * as jsPDF from 'jspdf';
import { TranslateService } from '@ngx-translate/core';
// import { environment } from 'src/environments/environment.prod';

// var jsPDF = require('jspdf');
// require('jspdf-autotable');
declare var jsPDF: any;
 export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

export interface language{
  value:string;
  viewValue:string;
  }

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
];


@Component({
  selector: 'app-repports',
  templateUrl: './repports.component.html',
  styleUrls: ['./repports.component.css']
})
export class RepportsComponent implements OnInit{
  // @ViewChild("content", {static:true}) content: ElementRef;
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];

  dataSource=ELEMENT_DATA;
  constructor(private translate:TranslateService){
  translate.addLangs(['en', 'ar', 'it', 'zh']);
  translate.setDefaultLang('en'); 


  // const browserLang:string=translate.getBrowserLang();
  // translate.use(browserLang.match(/en|it|ar|zh/) ? browserLang : 'en');
  
  
  }
  switchLanguage(language){
  this.translate.use(language);
    
  }

  ngOnInit(){
  }
   ExportTOPdf(){
    var columns=["position", "name", "weight", "symbol"];
    var rows  =[
  [1, "Hydrogen", "1.0079", "H"],
  [2, "Helium", "4.0026", "He"],
  [3, "Lithium", " 6.941", "Li"],
  [4, "Beryllium", "9.0122", "Be"],
  [5, "Boron", "10.811", "B"],
  [6, "Carbon", "12.0107", "C"],
  [7, "Nitrogen", "14.0067", "N"],
  [8, "Oxygen", "15.9994", "O"],
  [9, "Fluorine", "18.9984", "F"],
  [10, "Neon", "20.1797", "Ne"]
];

var doc = new jsPDF('p', 'pt');
doc.autoTable(columns, rows);
doc.save('table.pdf');




   
    // let doc=new jsPDF();

    
    // let content = this.content.nativeElement;
    // doc.fromHTML(content.innerHTML, 15, 15, {
      
    // });
    // doc.save('test.pdf');
    // console.log("DataSource==>",content.innerHTML);

}
}














    // let AmiriRegular = environment.AmiriRegular;

    // doc.addFileToVFS('Amiri-Regular.ttf', AmiriRegular);
    
    // doc.addFont('Amiri-Regular.ttf', 'Amiri', 'normal');
    
    // doc.setFont('Amiri'); // set font
    // doc.setFontSize(20);
    
    // doc.text( { align: 'right', lang: 'ar' });
    
    // //  console.log(doc.getFontList());


 

