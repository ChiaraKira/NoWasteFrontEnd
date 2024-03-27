import { Utente } from "./utente";

export interface Commento {
    id:number;
    punteggio: number;
    commento: string;
    utente: Utente;
    idRicetta : number;
}
