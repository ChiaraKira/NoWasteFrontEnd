import { Commento } from "./commento";
import { RicettaIngrediente } from "./ricetta-ingrediente";

export interface Ricetta {
    id: number;
    nome: string;
    istruzioni: string;
    portata: string;
    difficolta: number;
    tempoPreparazione: number;
    serving: number;
    linkImmagine: string;
    ingredienti: RicettaIngrediente[];
    commenti: Commento[];
}
