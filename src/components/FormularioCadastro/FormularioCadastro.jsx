import React, { Component } from "react";
import "./style.css";

class FormularioCadastro extends Component {
  constructor(props) {
    super(props);
    this.titulo = "";
    this.texto = "";
  }

  _handleMudancaTitulo(evento) {
    this.titulo = evento.target.value;
  }

  _handleMudancaTexto(evento) {
    this.texto = evento.target.value;
  }

  _criarNota(evento) {
    evento.preventDefault();
    evento.stopPropagation();
    this.props.criarNota(this.titulo, this.texto);
  }

  render() {
    return (
      <form className="form-cadastro" onSubmit={this._criarNota.bind(this)}>
        <input
          type="text"
          placeholder="Título"
          className="form-cadastro_input"
          onChange={this._handleMudancaTitulo.bind(this)}
        ></input>
        <textarea
          placeholder="Escreva sua nota"
          className="form-cadastro_input"
          rows={15}
          onChange={this._handleMudancaTexto.bind(this)}
        ></textarea>
        <button className="form-cadastro_input form-cadastro_submit">
          Criar nota
        </button>
      </form>
    );
  }
}
export default FormularioCadastro;
