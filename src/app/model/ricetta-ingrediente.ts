import { Ingrediente } from "./ingrediente";

export interface RicettaIngrediente {
    id: number;
    quantita: number;
    unitaMisura: string;
    ingrediente: Ingrediente;
    idRicetta: number;
}
