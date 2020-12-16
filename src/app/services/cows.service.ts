
import { Injectable } from '@angular/core';

@Injectable()
export class CowsService {

    private cows: Cow[] = [
        {
            _id_legal: "ES030305206061",
            date_birth: "2007-01-19T23:00:00.000Z",
            genus: "COW",
            sex: "FEMALE",
            name: "6061",
            createdAt: "2020-12-11T09:12:42.357Z",
            updatedAt: "2020-12-11T09:12:42.357Z",
            age: {
                "text": "YEARS",
                "value": 14
            },
            img: "assets/img/other-cow.jpeg"
        },
        {
            _id_legal: "ES0603015138818",
            date_birth: "2007-01-05T23:00:00.000Z",
            genus: "COW",
            sex: "FEMALE",
            name: "8818",
            createdAt: "2020-12-11T09:14:50.583Z",
            updatedAt: "2020-12-11T09:14:50.583Z",
            age: {
                "text": "YEARS",
                "value": 14
            },
            img: "assets/img/cow3.jpg"
        },
        {
            _id_legal: "ES040306974703",
            date_birth: "2013-02-19T23:00:00.000Z",
            genus: "COW",
            sex: "FEMALE",
            name: "4703",
            createdAt: "2020-12-11T09:18:07.371Z",
            updatedAt: "2020-12-11T09:18:07.371Z",
            age: {
                "text": "YEARS",
                "value": 8
            },
            img: "assets/img/cow2.jpg"
        },
        {
            _id_legal: "ES090307471335",
            date_birth: "2015-11-19T23:00:00.000Z",
            genus: "COW",
            sex: "MALE",
            name: "1335",
            createdAt: "2020-12-11T09:19:40.690Z",
            updatedAt: "2020-12-11T09:19:40.690Z",
            age: {
                "text": "YEARS",
                "value": 5
            },
            img: "assets/img/cow.jpg"
        },
        {
            _id_legal: "ES080307141779",
            date_birth: "2014-02-02T23:00:00.000Z",
            genus: "COW",
            sex: "FEMALE",
            name: "1779",
            createdAt: "2020-12-11T09:23:09.358Z",
            updatedAt: "2020-12-11T09:23:09.358Z",
            age: {
                "text": "YEARS",
                "value": 7
            },
            img: "assets/img/brown-cow.jpg"
        },
        {
            _id_legal: "ES080305206066",
            date_birth: "2007-02-02T23:00:00.000Z",
            genus: "COW",
            sex: "MALE",
            name: "6066",
            createdAt: "2020-12-11T09:24:50.103Z",
            updatedAt: "2020-12-11T09:24:50.103Z",
            age: {
                "text": "YEARS",
                "value": 14
            },
            img: "assets/img/black-cow.jpg"
        }
    ]

    getCows(): Cow[]{
        return this.cows;
      }

    getCow( idx: string ){
        return this.cows[idx];
      }

    searchCows(termino: string){


        let cowsArr:Cow[] = [];
        termino = termino.toLowerCase();
    
        for( let i = 0; i < this.cows.length; i ++ ){
    
          let cow = this.cows[i];
    
          let name = cow.name.toLowerCase();
    
          if( name.indexOf( termino ) >= 0  ){
           // name.idx = i;
            cowsArr.push( cow )
          }
    
        }
    
        return cowsArr;

    }  

    
    constructor(){
        console.log("listo");
    }
 }

 export interface Cow{
    _id_legal: string;
    date_birth: string;
    genus: string;
    sex: string;
    name: string;
    createdAt: string;
    updatedAt: string;
    img: string;
    age: {
        text: string;
        value: number;
    };
    
  };
  