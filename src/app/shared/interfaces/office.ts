export interface Office {
  id: number;
  idCodigo: number;

  descripcion: string;
  direccion: string;

  identificacion: string;

  monedaId: number;

  fechaDeCreacion?: Date;
}
