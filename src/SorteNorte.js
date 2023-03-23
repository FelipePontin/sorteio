import React, { useState, useEffect } from 'react'

import ImagemPresente from '../src/images/presente.svg'
import ImagemPresenteAberto from '../src/images/presente_aberto.svg'
import ImagemSorteioNumero from '../src/images/sorteio_numero.svg'
import ImagemSorteioNome from '../src/images/sorteio_nome.svg'
import ImagemSorteioRegistrado from '../src/images/sorteio_registrado.svg'
import Logo from '../src/images/logo.svg'
import PresenteLogo from '../src/images/presente_logo.svg'

import SorteioNumero from './components/PaginaInicial/SorteioNumero/SorteioNumero'
import SorteioNome from './components/PaginaInicial/SorteioNome/SorteioNome'
import MeusSorteios from './components/PaginaInicial/MeusSorteios/MeusSorteios'

import './SorteNorte.css'

const SorteNorte = () => {
  return (
    <section className='sorte_norte'>
      <header className='cabecalho'>
        <div className='divisao_logo'>
          <img className='imagem_logo' src={ImagemPresente}></img>
          <div className='texto_logo'>SORTE NORTE</div>
        </div>
        <div className='divisao_cabecalho'>
          <button className='botao_cabecalho botao_logar'>Entrar</button>
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
        <div className='divisao_sorteio_numero'>
          <h1 className='titulo_sorteio_numero'>Sorteio de números</h1>
          <p className='subtitulo_sorteio_numero'>Sorteio de números que permite que o organizador escolha uma quantidade entre um intervalo de números para sortear!</p>
        </div>
        <div className='divisao_sorteio_numero_imagem'>
          <SorteioNumero />
        </div>
      </section>
      <section className='sorteio_nome'>
        <div className='divisao_sorteio_nome_imagem'>
          <SorteioNome />
        </div>
        <div className='divisao_sorteio_nome'>
          <h1 className='titulo_sorteio_nome'>Sorteio de nomes</h1>
          <p className='subtitulo_sorteio_nome'>Preencha uma lista de nomes e escolha a quantidade de nomes que deverão ser sorteados desta lista!</p>
        </div>
      </section>
      <section className='sorteio_registrado'>
        <div className='divisao_sorteio_registrado'>
          <h1 className='titulo_sorteio_registrado'>Sorteios registrados</h1>
          <p className='subtitulo_sorteio_registrado'>Todos os sorteios que você faz são armazenados no nosso banco de dados, assim você não perde nada!</p>
        </div>
        <div className='divisao_sorteio_registrado_imagem'>
          <MeusSorteios />
        </div>
      </section>
      <section className='bora_comecar'>
        <h1 className='titulo_bora_comecar'>BORA COMEÇAR?</h1>
        <button className='botao_bora_comecar'>REGISTRAR</button>
      </section>
      <footer className='rodape'>
        <div className='texto_logo_rodape'>SORTE NORTE</div>
        <p className='copy_rodape'>Copyright © 2023</p>
      </footer>
    </section>
  )
}

export default SorteNorte
