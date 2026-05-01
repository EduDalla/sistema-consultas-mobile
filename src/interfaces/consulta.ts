import { StatusConsulta } from "../types";

export interface Consulta {
  id: number;
  pacienteId: number;
  pacienteNome: string;
  medicoId: number;
  medicoNome: string;
  especialidade: string;
  usuarioId: number;
  data: string;
  horario: string;
  status: StatusConsulta;
  observacoes?: string;
  valor?: number;
}
