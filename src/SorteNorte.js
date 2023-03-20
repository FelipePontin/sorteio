import React, { useState, useEffect } from 'react';
import ImagemPresente from '../src/images/presente.svg'
import ImagemPresenteAberto from '../src/images/presente_aberto.svg'
import ImagemSorteioNumero from '../src/images/sorteio_numero.svg'
import './SorteNorte.css';

const SorteNorte = () => {
  return (
    <>
      <header className='cabecalho'>
        <div className='logo'>SORTE NORTE</div>
        <div className='divisao_cabecalho'>
          <button className='botao_cabecalho botao_logar'>Logar</button>
          <button className='botao_cabecalho botão_registrar'>Registrar</button>
        </div>
      </header>
      <section className='introducao'>
        <img className='imagem_introducao' src={ImagemPresente}></img>
        <div className='divisao_introducao'>
          <p className='texto_introducao'>SORTEIOS</p>
          <h1 className='titulo_introducao'>CRIE DIVERSOS TIPOS DE SORTEIOS</h1>
          <p className='subtitulo_introducao'>Sorteio de números que permite que o organizador escolha uma quantidade entre um intervalo de números para sortear!</p>
          <button className='botao_introducao'>CONHECER</button>
        </div>
        <img className='imagem_introducao' src={ImagemPresenteAberto}></img>
      </section>
      <section className='sorteio_numero'>
        <div>

        </div>
        <div>
          <img src={ImagemSorteioNumero}></img>
        </div>
      </section>
    </>
  )
}

export default SorteNorte
