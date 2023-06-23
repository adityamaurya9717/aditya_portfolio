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
      rate:8,
      useCase:"Logical Ability"
    },
    {
    name:"Java",
    rate: 10,
    useCase:"Programming"

   },
   {
    name:"Spring Boot",
    rate:10,
    useCase:"Backend Server"

   }
   ,
   {
    name:"Kafka Server",
    rate:8,
    useCase:"Data Stream Pipeline"
 
   },
   {
    name:"Spring Data JPA",
    rate:10,
    useCase:"Persistance API"

   },
   {
    name:"MySQL",
    rate:9,
    useCase:"DataBase"

   },
   {
    name:"Redis",
    rate:9,
    useCase:"Cache for fast retrival"

   },
   {
    name:"Angular",
    rate:5,
    useCase:"FrontEnd FrameWork"
   },
   {
    name:"JavaScript",
    rate:8,
    useCase:"Scripting Language"
 
   }
]
totalRating:number=10;


  constructor() { }

  ngOnInit(): void {
  }

}
