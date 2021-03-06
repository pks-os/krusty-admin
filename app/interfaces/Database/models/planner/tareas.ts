export interface ITareas {
    [x: string]: any;
    id?: number;
    id_proyecto: number;
    nombre: string;
    descripcion: string;
    fecha_inicio: string;
    fecha_termino: string;
    progreso: number;
    dependencia: string;
    orden: number;
    asignados?: { id_admin: number, img: string, nombre: string }[];
}
export interface ILink {
    id_proyecto: number,
    id: number,
    source: number,
    target: number,
    type: string
}