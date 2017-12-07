import {Entityid} from "../entityid";

export class Cliente extends Entityid {

  public nome: string;
  public email: string;
  public dataNascimento: Date;
  public sexo: boolean;
  public telefone: number;
  public cidade: string;
  public estado: string;

}
