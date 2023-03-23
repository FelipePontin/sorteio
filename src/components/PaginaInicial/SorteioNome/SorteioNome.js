import React, { useState, useEffect } from "react"

import { FaUserAlt } from "react-icons/fa"

import confetti from 'canvas-confetti'

import './SorteioNome.css'

const SorteioNome = () => {

    const [nomes, setNomes] = useState([
        'Lucas',
        'Felipe',
        'Roberto',
        'Pedro'
    ])
    const [nomeSorteado, setNomeSorteado] = useState()
    const [realizouSorteio, setRealizouSorteio] = useState(false)

    
    const sortearNome = (min, max) => {
        const numeroAleatorio =  Math.floor(Math.random() * (max - min + 1)) + min
        const nomeSorteado = nomes[numeroAleatorio]
        setNomeSorteado(nomeSorteado)
        confetti({
            spread: 360,
            decay: 0.94,
            particleCount: 70,
            scalar: 1.15,
        })
        setRealizouSorteio(true)
    }

    return (
        <section className='sorteio_nomes'>
            {realizouSorteio ? (<>
                <div className='divisao_icone_sorteio_nomes'>
                    <p className='titulo_sorteio_nomes titulo_continuar_sorteio_nomes'>Nome Sorteado</p>
                    <div className='divisao_numero_sorteio_nomes'><FaUserAlt /><div className='numero_sorteio_nomes'>{nomeSorteado}</div></div>
                </div>
                <h1 className='titulo_continuar_sorteio_nomes'>Quer continuar?</h1>
                <p className='subtitulo_continuar_sorteio_nomes'>Crie uma conta ou faça login para criar sorteios personalizados</p>
                <button className='botao_sorteio_nomes'>CRIAR NOVO SORTEIO</button>
            </>) : (<>
                <div className='divisao_sorteio_nomes'>
                    <div className='divisao_icone_sorteio_nomes'>
                        <p className='titulo_sorteio_nomes'>Sortear nomes</p>
                    </div>
                    <div className='divisao_numeros_sorteio_nomes'>
                        {nomes.map((nome, id) => {
                            return (
                                <div key={id} className='divisao_numero_sorteio_nomes'><FaUserAlt /><div className='numero_sorteio_nomes'>{nome}</div></div>
                            )
                        })}
                    </div>
                </div>
                <button onClick={() => sortearNome(0, 3)} className='botao_sorteio_nomes'>SORTEAR</button>
            </>)}
        </section>
    )
}

export default SorteioNome
