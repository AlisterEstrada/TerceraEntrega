import { Injectable } from '@angular/core';
import { Http, Response} from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class GoogleBookApiService {

  constructor(private http: Http) { }


  SearchBooks(search) {
    const encodedURI  = encodeURI("https://www.googleapis.com/books/v1/volumes?q="+ search +"&maxResults=20")
    return this.http.get(encodedURI)
        .map((response: Response) => response.json());
  }

  SearchByISBN(isbn){
    const encodedURI = encodeURI("https://www.googleapis.com/books/v1/volumes?q=isbn:" + isbn +"&maxResults=1");
    return this.http.get(encodedURI)
        .map((response: Response) => response.json());
  }

  SearchByGenero(genero){
    var encodedURI = encodeURI("https://www.googleapis.com/books/v1/volumes?q=subject:" + genero +"&maxResults=20");
    return this.http.get(encodedURI)
        .map((response: Response) => response.json());
  }


  SearchBySimilar(genero){
    const encodedURI = encodeURI("https://www.googleapis.com/books/v1/volumes?q=subject:" + genero +"&maxResults=4");
    return this.http.get(encodedURI)
        .map((response: Response) => response.json());
  }

}
