import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Commento } from 'src/app/model/commento';
import { Ricetta } from 'src/app/model/ricetta';

@Component({
  selector: 'app-commento',
  templateUrl: './commento.component.html',
  styleUrls: ['./commento.component.css']
})
export class CommentoComponent {

  ris : Commento[] = [];
  ricetta? : Ricetta[];
  commento? : Commento[];
  
 
  constructor(private http: HttpClient) {}

  sendCommentToBackend(): void {
    const token = sessionStorage.getItem("token");
    const headers = {'Content-Type' : 'application/json', 'token' : token as string};
    const body = JSON.stringify;

    this.http.post("http://localhost:8080/api/comment/addComment" + {'headers' : headers},  body).subscribe(risposta => {
       this.ris  = risposta as Commento[];
      console.log(this.ris);

     });


      // this.http.post('http://localhost:8080/api/comment/allComments', commentData)
      //     .subscribe(
      //         (response) => {
      //             console.log('Commento inviato con successo al backend:', response);
      //             // Gestisci qui eventuali azioni da eseguire dopo l'invio del commento
      //         },
      //         (error) => {
      //             console.error('Errore durante l\'invio del commento al backend:', error);
      //         }
      //     );
  }


}
