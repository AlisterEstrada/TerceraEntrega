import { Component, OnInit } from '@angular/core';
import { GoogleBookApiService } from '../google-book-api.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {
book;
similars;

  constructor(private googleBooksApiService: GoogleBookApiService, private route: ActivatedRoute) {

   }
  ngOnInit() {

    let isbn = this.route.snapshot.params['isbn'];

    this.googleBooksApiService.SearchByISBN(isbn).
         subscribe((data) => {
            console.log(data.items);
            this.book = data.items[0];

            let genero = this.book.volumeInfo.categories[0];

            console.log(genero);

            this.googleBooksApiService.SearchBySimilar(genero).
                 subscribe((data2) => {
                    this.similars = data2.items;
                    console.log(this.similars);
            });
    });

  }

}
