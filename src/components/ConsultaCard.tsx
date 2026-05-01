import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { Consulta } from "../interfaces/consulta";
import { styles } from "../styles/consultaCard.styles";
import {
  formatarData,
  formatarHorario,
  obterCorStatus,
  obterTextoStatus,
} from "../utils/formatters";

type ConsultaCardProps = {
  consulta: Consulta;
  onConfirmar?: () => void;
  onCancelar?: () => void;
  onDetalhes?: () => void;
};

export default function ConsultaCard({
  consulta,
  onConfirmar,
  onCancelar,
  onDetalhes,
}: ConsultaCardProps) {
  function formatarValor(valor?: number): string {
    if (valor === undefined) {
      return "Valor não informado";
    }

    return valor.toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
    });
  }

  return (
    <View style={styles.card}>
      <View style={[styles.statusBadge, { backgroundColor: obterCorStatus(consulta.status) }]}>
        <Text style={styles.statusTexto}>{obterTextoStatus(consulta.status)}</Text>
      </View>

      <View style={styles.info}>
        <Text style={styles.label}>Paciente</Text>
        <Text style={styles.valor}>{consulta.pacienteNome}</Text>
      </View>

      <View style={styles.info}>
        <Text style={styles.label}>Médico</Text>
        <Text style={styles.valor}>{consulta.medicoNome}</Text>
        <Text style={styles.valorSecundario}>{consulta.especialidade}</Text>
      </View>

      <View style={styles.row}>
        <View style={styles.info}>
          <Text style={styles.label}>Data</Text>
          <Text style={styles.valor}>{formatarData(consulta.data)}</Text>
        </View>
        <View style={styles.info}>
          <Text style={styles.label}>Horário</Text>
          <Text style={styles.valor}>{formatarHorario(consulta.horario)}</Text>
        </View>
      </View>

      <View style={styles.info}>
        <Text style={styles.label}>Valor</Text>
        <Text style={styles.valor}>{formatarValor(consulta.valor)}</Text>
      </View>

      {consulta.observacoes && (
        <Text style={styles.valorSecundario}>{consulta.observacoes}</Text>
      )}

      <View style={styles.acoes}>
        {onDetalhes && (
          <TouchableOpacity
            style={[styles.botao, styles.botaoDetalhes]}
            onPress={onDetalhes}
          >
            <Text style={styles.botaoTextoSecundario}>Detalhes</Text>
          </TouchableOpacity>
        )}

        {consulta.status === "agendada" && (
          <>
            {onConfirmar && (
              <TouchableOpacity
                style={[styles.botao, styles.botaoConfirmar]}
                onPress={onConfirmar}
              >
                <Text style={styles.botaoTexto}>Confirmar</Text>
              </TouchableOpacity>
            )}
            {onCancelar && (
              <TouchableOpacity
                style={[styles.botao, styles.botaoCancelar]}
                onPress={onCancelar}
              >
                <Text style={styles.botaoTexto}>Cancelar</Text>
              </TouchableOpacity>
            )}
          </>
        )}

        {consulta.status === "confirmada" && onCancelar && (
          <TouchableOpacity
            style={[styles.botao, styles.botaoCancelar]}
            onPress={onCancelar}
          >
            <Text style={styles.botaoTexto}>Cancelar</Text>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
}
