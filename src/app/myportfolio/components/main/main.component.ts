import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  skills=[
    {
      name:"Data Structure And Alogrithm",
      rate:5,
      useCase:"Logical Ability"
    },
    {
    name:"Java",
    rate: 4,
    useCase:"Programming"

   },
   {
    name:"Spring Boot",
    rate:5,
    useCase:"Backend Server"

   }
   ,
   {
    name:"Kafka Server",
    rate:5,
    useCase:"Data Stream Pipeline"
 
   },
   {
    name:"Spring Data JPA",
    rate:5,
    useCase:"Persistance API"

   },
   {
    name:"MySQL",
    rate:5,
    useCase:"DataBase"

   },
   {
    name:"Redis",
    rate:5,
    useCase:"Cache for fast retrival"

   },
   {
    name:"Angular",
    rate:5,
    useCase:"FrontEnd FrameWork"
 
   }
]
totalRating:number=10;


  constructor() { }

  ngOnInit(): void {
  }

}
