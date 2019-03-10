import { Component } from '@angular/core';
import {DataService} from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private _dataService:DataService){}
  title = 'stateanalysis';
  activecity='';
  activeStateIndash = {
    "code":"",
    "name":"",
    "population":"",
    "lat":"",
    "long":""
  };
  
  currentstats = [];
  forecaststats = [];
  barChartLabels = [];
  tempstates=[];
  feedbackac = false;
  cities = 
    [
      {
        "city": "Agra",
        "nor": 1,
        "state": "UTTAR PRADESH"
      },
      {
        "city": "Ahmedabad",
        "nor": 1,
        "state": "GUJARAT"
      },
      {
        "city": "Aizawl",
        "nor": 1,
        "state": "MIZORAM"
      },
      {
        "city": "Ajmer",
        "nor": 1,
        "state": "RAJASTHAN"
      },
      {
        "city": "Akola",
        "nor": 1,
        "state": "MAHARASHTRA"
      },
      {
        "city": "Aligarh",
        "nor": 1,
        "state": "UTTAR PRADESH"
      },
      {
        "city": "Allahabad",
        "nor": 1,
        "state": "UTTAR PRADESH"
      },
      {
        "city": "Alwar",
        "nor": 1,
        "state": "RAJASTHAN"
      },
      {
        "city": "Amravati",
        "nor": 1,
        "state": "MAHARASHTRA"
      },
      {
        "city": "Amritsar",
        "nor": 1,
        "state": "PUNJAB"
      },
      {
        "city": "Anantapur",
        "nor": 1,
        "state": "ANDHRA PRADESH"
      },
      {
        "city": "Bareilly",
        "nor": 1,
        "state": "UTTAR PRADESH"
      },
      {
        "city": "Bathinda",
        "nor": 1,
        "state": "PUNJAB"
      },
      {
        "city": "Begusarai",
        "nor": 1,
        "state": "BIHAR"
      },
      {
        "city": "Belgaum",
        "nor": 1,
        "state": "KARNATAKA"
      },
      {
        "city": "Bellary",
        "nor": 1,
        "state": "KARNATAKA"
      },
      {
        "city": "Bhagalpur",
        "nor": 1,
        "state": "BIHAR"
      },
      {
        "city": "Bharatpur",
        "nor": 1,
        "state": "RAJASTHAN"
      },
      {
        "city": "Bhavnagar",
        "nor": 1,
        "state": "GUJARAT"
      },
      {
        "city": "Bhilwara",
        "nor": 1,
        "state": "RAJASTHAN"
      },
      {
        "city": "Bhopal",
        "nor": 1,
        "state": "MADHYA PRADESH"
      },
      {
        "city": "Bijapur",
        "nor": 1,
        "state": "CHHATTISGARH"
      },
      {
        "city": "Bikaner",
        "nor": 1,
        "state": "RAJASTHAN"
      },
      {
        "city": "Bokaro",
        "nor": 1,
        "state": "JHARKHAND"
      },
      {
        "city": "Bulandshahr",
        "nor": 1,
        "state": "UTTAR PRADESH"
      },
      {
        "city": "Chandigarh",
        "nor": 1,
        "state": "CHANDIGARH"
      },
      {
        "city": "Chandrapur",
        "nor": 1,
        "state": "MAHARASHTRA"
      },
      {
        "city": "Chennai",
        "nor": 1,
        "state": "TAMIL NADU"
      },
      {
        "city": "Coimbatore",
        "nor": 1,
        "state": "TAMIL NADU"
      },
      {
        "city": "Cuttack",
        "nor": 1,
        "state": "ODISHA"
      },
      {
        "city": "Darbhanga",
        "nor": 1,
        "state": "BIHAR"
      },
      {
        "city": "Davanagere",
        "nor": 1,
        "state": "KARNATAKA"
      },
      {
        "city": "Dehradun",
        "nor": 1,
        "state": "UTTARAKHAND"
      },
      {
        "city": "Dewas",
        "nor": 1,
        "state": "MADHYA PRADESH"
      },
      {
        "city": "Dhanbad",
        "nor": 1,
        "state": "JHARKHAND"
      },
      {
        "city": "Dhule",
        "nor": 1,
        "state": "MAHARASHTRA"
      },
      {
        "city": "Durg",
        "nor": 1,
        "state": "CHHATTISGARH"
      },
      {
        "city": "Erode",
        "nor": 1,
        "state": "TAMIL NADU"
      },
      {
        "city": "Etawah",
        "nor": 1,
        "state": "UTTAR PRADESH"
      },
      {
        "city": "Faridabad",
        "nor": 1,
        "state": "HARYANA"
      },
      {
        "city": "Farrukhabad",
        "nor": 1,
        "state": "UTTAR PRADESH"
      },
      {
        "city": "Firozabad",
        "nor": 1,
        "state": "UTTAR PRADESH"
      },
      {
        "city": "Gaya",
        "nor": 1,
        "state": "BIHAR"
      },
      {
        "city": "Ghaziabad",
        "nor": 1,
        "state": "UTTAR PRADESH"
      },
      {
        "city": "Gorakhpur",
        "nor": 1,
        "state": "UTTAR PRADESH"
      },
      {
        "city": "Gulbarga",
        "nor": 1,
        "state": "KARNATAKA"
      },
      {
        "city": "Guntur",
        "nor": 1,
        "state": "ANDHRA PRADESH"
      },
      {
        "city": "Gurgaon",
        "nor": 1,
        "state": "HARYANA"
      },
      {
        "city": "Gwalior",
        "nor": 1,
        "state": "MADHYA PRADESH"
      },
      {
        "city": "Hyderabad",
        "nor": 1,
        "state": "TELANGANA"
      },
      {
        "city": "Indore",
        "nor": 1,
        "state": "MADHYA PRADESH"
      },
      {
        "city": "Jabalpur",
        "nor": 1,
        "state": "MADHYA PRADESH"
      },
      {
        "city": "Jaipur",
        "nor": 1,
        "state": "RAJASTHAN"
      },
      {
        "city": "Jalandhar",
        "nor": 1,
        "state": "PUNJAB"
      },
      {
        "city": "Jalgaon",
        "nor": 1,
        "state": "MAHARASHTRA"
      },
      {
        "city": "Jalna",
        "nor": 1,
        "state": "MAHARASHTRA"
      },
      {
        "city": "Jammu",
        "nor": 1,
        "state": "JAMMU & KASHMIR"
      },
      {
        "city": "Jamnagar",
        "nor": 1,
        "state": "GUJARAT"
      },
      {
        "city": "Jhansi",
        "nor": 1,
        "state": "UTTAR PRADESH"
      },
      {
        "city": "Jodhpur",
        "nor": 1,
        "state": "RAJASTHAN"
      },
      {
        "city": "Junagadh",
        "nor": 1,
        "state": "GUJARAT"
      },
      {
        "city": "Kadapa",
        "nor": 1,
        "state": "ANDHRA PRADESH"
      },
      {
        "city": "Karimnagar",
        "nor": 1,
        "state": "TELANGANA"
      },
      {
        "city": "Karnal",
        "nor": 1,
        "state": "HARYANA"
      },
      {
        "city": "Katihar",
        "nor": 1,
        "state": "BIHAR"
      },
      {
        "city": "Khammam",
        "nor": 1,
        "state": "TELANGANA"
      },
      {
        "city": "Kolhapur",
        "nor": 1,
        "state": "MAHARASHTRA"
      },
      {
        "city": "Kolkata",
        "nor": 1,
        "state": "WEST BENGAL"
      },
      {
        "city": "Kollam",
        "nor": 1,
        "state": "KERALA"
      },
      {
        "city": "Korba",
        "nor": 1,
        "state": "CHHATTISGARH"
      },
      {
        "city": "Kota",
        "nor": 1,
        "state": "RAJASTHAN"
      },
      {
        "city": "Kozhikode",
        "nor": 1,
        "state": "KERALA"
      },
      {
        "city": "Kurnool",
        "nor": 1,
        "state": "ANDHRA PRADESH"
      },
      {
        "city": "Latur",
        "nor": 1,
        "state": "MAHARASHTRA"
      },
      {
        "city": "Lucknow",
        "nor": 1,
        "state": "UTTAR PRADESH"
      },
      {
        "city": "Ludhiana",
        "nor": 1,
        "state": "PUNJAB"
      },
      {
        "city": "Madurai",
        "nor": 1,
        "state": "TAMIL NADU"
      },
      {
        "city": "Mathura",
        "nor": 1,
        "state": "UTTAR PRADESH"
      },
      {
        "city": "Mau",
        "nor": 1,
        "state": "UTTAR PRADESH"
      },
      {
        "city": "Meerut",
        "nor": 1,
        "state": "UTTAR PRADESH"
      },
      {
        "city": "Mirzapur",
        "nor": 1,
        "state": "UTTAR PRADESH"
      },
      {
        "city": "Muzaffarnagar",
        "nor": 1,
        "state": "UTTAR PRADESH"
      },
      {
        "city": "Muzaffarpur",
        "nor": 1,
        "state": "BIHAR"
      },
      {
        "city": "Mysore",
        "nor": 1,
        "state": "KARNATAKA"
      },
      {
        "city": "Nagpur",
        "nor": 1,
        "state": "MAHARASHTRA"
      },
      {
        "city": "Nanded",
        "nor": 1,
        "state": "MAHARASHTRA"
      },
      {
        "city": "Nashik",
        "nor": 1,
        "state": "MAHARASHTRA"
      },
      {
        "city": "Nellore",
        "nor": 1,
        "state": "ANDHRA PRADESH"
      },
      {
        "city": "New Delhi",
        "nor": 1,
        "state": "DELHI"
      },
      {
        "city": "Nizamabad",
        "nor": 1,
        "state": "TELANGANA"
      },
      {
        "city": "Pali",
        "nor": 1,
        "state": "RAJASTHAN"
      },
      {
        "city": "Panipat",
        "nor": 1,
        "state": "HARYANA"
      },
      {
        "city": "Parbhani",
        "nor": 1,
        "state": "MAHARASHTRA"
      },
      {
        "city": "Patiala",
        "nor": 1,
        "state": "PUNJAB"
      },
      {
        "city": "Patna",
        "nor": 1,
        "state": "BIHAR"
      },
      {
        "city": "Pondicherry",
        "nor": 1,
        "state": "PUDUCHERRY"
      },
      {
        "city": "Pune",
        "nor": 1,
        "state": "MAHARASHTRA"
      },
      {
        "city": "Purnia",
        "nor": 1,
        "state": "BIHAR"
      },
      {
        "city": "Raichur",
        "nor": 1,
        "state": "KARNATAKA"
      },
      {
        "city": "Raipur",
        "nor": 1,
        "state": "CHHATTISGARH"
      },
      {
        "city": "Rajkot",
        "nor": 1,
        "state": "GUJARAT"
      },
      {
        "city": "Rampur",
        "nor": 1,
        "state": "UTTAR PRADESH"
      },
      {
        "city": "Ranchi",
        "nor": 1,
        "state": "JHARKHAND"
      },
      {
        "city": "Ratlam",
        "nor": 1,
        "state": "MADHYA PRADESH"
      },
      {
        "city": "Rewa",
        "nor": 1,
        "state": "MADHYA PRADESH"
      },
      {
        "city": "Rohtak",
        "nor": 1,
        "state": "HARYANA"
      },
      {
        "city": "Sagar",
        "nor": 1,
        "state": "MADHYA PRADESH"
      },
      {
        "city": "Saharanpur",
        "nor": 1,
        "state": "UTTAR PRADESH"
      },
      {
        "city": "Salem",
        "nor": 1,
        "state": "TAMIL NADU"
      },
      {
        "city": "Sambalpur",
        "nor": 1,
        "state": "ODISHA"
      },
      {
        "city": "Satara",
        "nor": 1,
        "state": "MAHARASHTRA"
      },
      {
        "city": "Satna",
        "nor": 1,
        "state": "MADHYA PRADESH"
      },
      {
        "city": "Shahjahanpur",
        "nor": 1,
        "state": "UTTAR PRADESH"
      },
      {
        "city": "Sikar",
        "nor": 1,
        "state": "RAJASTHAN"
      },
      {
        "city": "Siliguri",
        "nor": 1,
        "state": "WEST BENGAL"
      },
      {
        "city": "Singrauli",
        "nor": 1,
        "state": "MADHYA PRADESH"
      },
      {
        "city": "Solapur",
        "nor": 1,
        "state": "MAHARASHTRA"
      },
      {
        "city": "Sonipat",
        "nor": 1,
        "state": "HARYANA"
      },
      {
        "city": "Srinagar",
        "nor": 1,
        "state": "JAMMU & KASHMIR"
      },
      {
        "city": "Surat",
        "nor": 1,
        "state": "GUJARAT"
      },
      {
        "city": "Thane",
        "nor": 1,
        "state": "MAHARASHTRA"
      },
      {
        "city": "Thanjavur",
        "nor": 1,
        "state": "TAMIL NADU"
      },
      {
        "city": "Thiruvananthapuram",
        "nor": 1,
        "state": "KERALA"
      },
      {
        "city": "Thrissur",
        "nor": 1,
        "state": "KERALA"
      },
      {
        "city": "Tiruchirappalli",
        "nor": 1,
        "state": "TAMIL NADU"
      },
      {
        "city": "Tirunelveli",
        "nor": 1,
        "state": "TAMIL NADU"
      },
      {
        "city": "Tumkur",
        "nor": 1,
        "state": "KARNATAKA"
      },
      {
        "city": "Udaipur",
        "nor": 1,
        "state": "RAJASTHAN"
      },
      {
        "city": "Ujjain",
        "nor": 1,
        "state": "MADHYA PRADESH"
      },
      {
        "city": "Vadodara",
        "nor": 1,
        "state": "GUJARAT"
      },
      {
        "city": "Varanasi",
        "nor": 1,
        "state": "UTTAR PRADESH"
      },
      {
        "city": "Visakhapatnam",
        "nor": 1,
        "state": "ANDHRA PRADESH"
      },
      {
        "city": "Warangal",
        "nor": 1,
        "state": "TELANGANA"
      }
     
  ]

  states = [
    {"code":"TS","name":"Telangana","population":"35286757","lat":"17.849592","long":"79.115166"},
    {"code":"AN","name":"Andaman and Nicobar Islands","population":"379944","lat":"10.218834","long":"92.577133"},
    {"code":"GA","name":"Goa","population":"1457723","lat":" 15.300454","long":" 74.085513"},
    {"code":"KA","name":"Karnataka","population":"61130704","lat":"15.300454","long":"74.085513"},
    {"code":"CH","name":"Chhattisgarh","population":"25144810","lat":"14.52039","long":"75.722352"},
    {"code":"OR","name":"Odisha","population":"38844616","lat":"20.543124", "long":"84.689732"},
    {"code":"AP","name":"Andhra Pradesh","population":"49378776","lat":"15.924091","long":"80.186381"},
    {"code":"JH","name":"Jharkhand","population":"32966238","lat":"23.455981","long":"85.25573"},
    {"code":"KL","name":"Kerela","population":"33387677","lat":"39.78373","long":"-100.445882"},
    {"code":"WB","name":"West Bengal","population":"91857445","lat":"22.996495","long":"87.685588"},
    {"code":"AS","name":"Assam","population":"31169272","lat":" 26.407384","long":" 93.25513"},
    {"code":"ML","name":"Meghalaya","population":"2964007","lat":" 25.537943","long":" 91.29991"},
    {"code":"MP","name":"Madhya Pradesh","population":"72597565","lat":" 23.814342","long":" 77.534072"},
    {"code":"NL","name":"Nagaland","population":"1980602","lat":" 26.163056","long":" 94.588491"},
    {"code":"MH","name":"Maharashtra","population":"112372972","lat":" 19.531932","long":" 76.055457"},
    {"code":"UK","name":"Uttrakhand","population":"10116752","lat":" 39.78373","long":" -100.445882"},
    {"code":"DD","name":"Damand & Diu","population":"242911","lat":" 39.78373","long":" -100.445882"},
    {"code":"MN","name":"Manipur","population":"2721756","lat":" 24.720882","long":" 93.922939"},
    {"code":"BR","name":"Bihar","population":"103804637","lat":" 25.644085","long":" 85.906508"},
    {"code":"JK","name":"Jammu & Kashmir","population":"12548926","lat":" 32.718561","long":" 74.858092"},
    {"code":"PY","name":"Puducherry","population":"1244464","lat":" 11.934057","long":" 79.830645"},
    {"code":"UP","name":"Uttar Pradesh","population":"199581477","lat":" 27.130334","long":" 80.859666"},
    {"code":"HR","name":"Haryana","population":"25353081","lat":" 29","long":" 76"},
    {"code":"PB","name":"Punjab","population":"27704236","lat":" 30.929321","long":" 75.500484"},
    {"code":"HP","name":"Himachal Pradesh","population":"6856509","lat":" 31.929235","long":" 77.182846"},
    {"code":"DL","name":"Delhi","population":"16753235","lat":" 28.651718","long":" 77.221939"},
    {"code":"RJ","name":"Rajasthan","population":"68621012","lat":" 26.810578","long":" 73.768455"},
    {"code":"LD","name":"Lakshwadeep","population":"64429","lat":" 39.78373","long":" -100.445882"},
    {"code":"DH","name":"Dadra & Nagar Haveli","population":"342853","lat":" 20.334529","long":" 72.968476"},
    {"code":"GJ","name":"Gujarat","population":"60383628","lat":" 28.642403","long":" 77.290454"},
    {"code":"TR","name":"Tripura","population":"3671032","lat":" 23.775082","long":" 91.702509"},
    {"code":"SK","name":"Sikkim","population":"607688","lat":" 27.601029","long":" 88.454136"},
    {"code":"CG","name":"Chandigarh","population":"1054686","lat":" 30.719402","long":" 76.764655"},
    {"code":"AR","name":"Arunachal Pradesh","population":"1382611","lat":" 28.364199","long":" 94.758627"},
    {"code":"TN","name":"Tamil Nadu","population":"68915255","lat":" 10.909433","long":" 78.366535"},
    {"code":"MZ","name":"Mizoram","population":"1091014","lat":" 23.214617","long":" 92.868761"}
]
  keyword = "";
  

  ngOnInit(){
    this.feedbackac = false;
    for(let i =2008;i<2022;i++)
      this.barChartLabels.push(i);

    if(localStorage.getItem("activestate")==null){
      console.log(this.activeStateIndash.name);
      let x = {
        "code":"DL",
        "name":"Delhi",
        "population":"16753235",
        "lat":" 28.651718",
        "long":" 77.221939"
      };
      localStorage.setItem("activestate",JSON.stringify(x));
    }
    
    
    this.activeStateIndash = JSON.parse(localStorage.getItem("activestate"));
    
    
    this.keyword = "";
    
    
  }
  public acfeeder(){
    this.feedbackac = true;
  }
  public wafeeder(){
    this.feedbackac = false;
  }
  public typeahead(){
    this.tempstates=[];
    if(this.keyword.length != 0){
      
      for(let i of this.states){
        if(i["name"].toLowerCase().startsWith(this.keyword.toLowerCase())){
          this.tempstates.push(i);
        }    
      }
    }
    
  }

  public activeState(x){
    
    
    this.activeStateIndash = {
      "code":x.code,
      "name":x.name,
      "lat":x.lat,
      "long":x.long,
      "population":x.population
    }
    
    localStorage.setItem('activestate', JSON.stringify(this.activeStateIndash));
    
    this.keyword="";
    this.tempstates = [];
    
    window.location.reload();
  }
  public barChartOptions = {
    scaleShowVerticalLines: false,
    scaleShowHorizontalLines: false,
    responsive: true,
    scales: {
      xAxes: [{
          gridLines: {
              color: "rgba(0, 0, 0, 0)",
          }
      }],
      yAxes: [{
          gridLines: {
              color: "rgba(0, 0, 0, 0)",
          }   
      }]
    }
  };
  
  
  public barChartType = 'line';
  public barChartLegend = true;
  public barChartData = [
    {data: this.currentstats, label: 'CURRENT'},
    {data: this.forecaststats, label: 'FORECAST'}
  ];


  public fetchdata(x){
    // make a call to ml model to get data
    // using the http service
    
    this.currentstats=[];
    this.forecaststats =[];

    this._dataService.fetchDataForCity(x).subscribe(res=>{
      // RES
      let ind = 0;

      for(let i =2008;i<2022;i++){
        if(i<=2019){
          this.currentstats.push(parseInt(res[ind]));
          this.forecaststats.push(0);  
        }else{
          this.forecaststats.push(parseInt(res[ind]));
          this.currentstats.push(0);
        }
        ind+=1;
      }
     
        
    },err=>{
      console.log("KUCH gadbad hai");
    },()=>{
      console.log("DONE");
      this.activecity = x.city;
      this.barChartData = [
        {data: this.currentstats, label: 'CURRENT'},
        {data: this.forecaststats, label: 'FORECAST'}
      ];
    })
  }
  public decreaseRating(checked){
    let decre = 0.5; 
        for(var i=0;i<this.currentstats.length;++i){
          let X = this.currentstats[i];
          X *= decre;
          if(checked)
            this.currentstats[i] -= X;
          else
            this.currentstats[i] += X;  
        }
        for(var i=0;i<this.forecaststats.length;++i){
          let X = this.forecaststats[i];
          X *= decre;
          if(checked)
            this.forecaststats[i] -= X;
          else
            this.forecaststats[i] += X;
        }
        this.barChartData = [
          {data: this.currentstats, label: 'CURRENT'},
          {data: this.forecaststats, label: 'FORECAST'}
        ];
      checked = !checked;
  }
  public removeMe(x){
    this.currentstats=[];
    this.forecaststats =[];

    let factor = x.target.id;
    this._dataService.removeMe(factor,this.activecity).subscribe(res=>{
      let ind = 0;
      for(let i =2008;i<2022;i++){
        if(i<=2019){
          this.currentstats.push(parseInt(res[ind]));
          this.forecaststats.push(0);  
        }else{
          this.forecaststats.push(parseInt(res[ind]));
          this.currentstats.push(0);
        }
        ind+=1;
      }
    },err=>{
      console.log("Some error occured");
    },()=>{
      console.log("Done");
      this.barChartData = [
        {data: this.currentstats, label: 'CURRENT'},
        {data: this.forecaststats, label: 'FORECAST'}
      ];
    })
  }

}
