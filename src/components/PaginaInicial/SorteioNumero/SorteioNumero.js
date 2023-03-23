import React, { useEffect, useState } from 'react'

import { TbRefresh } from "react-icons/tb"

import confetti from 'canvas-confetti'

import './SorteioNumero.css'

const SorteioNumero = () => {

    const [numeros, setNumeros] = useState([])
    const [numeroSorteado, setNumeroSorteado] = useState()
    const [realizouSorteio, setRealizouSorteio] = useState(false)

    const gerarNumeros = (min, max) => {
        const numerosSorteados = []
        while (numerosSorteados.length < 5) {
            const numeroAleatorio = Math.floor(Math.random() * (max - min + 1)) + min
            numerosSorteados.push(numeroAleatorio)
        }
        setNumeros(numerosSorteados)
    }

    const sortearNumero = (min, max) => {
        const numeroAleatorio = Math.floor(Math.random() * (max - min + 1)) + min
        const valorSorteado = numeros[numeroAleatorio]
        console.log(valorSorteado)
        setNumeroSorteado(valorSorteado)
        confetti({
            spread: 360,
            decay: 0.94,
            particleCount: 70,
            scalar: 1.15,
        })
        setRealizouSorteio(true)
    }

    useEffect(() => {
        gerarNumeros(0, 100)
    }, [])

    return (
        <section className='sorteio_numeros'>
            {realizouSorteio ? (<>
                <div className='divisao_icone_sorteio_numeros'>
                    <p className='titulo_sorteio_numeros titulo_continuar_sorteio_numeros'>Número Sorteado</p>
                    <div className='divisao_numero_sorteio_numeros divisao_continuar_numero_sorteio_numeros'><p className='numero_sorteio_numeros'>{numeroSorteado}</p></div>
                </div>
                <h1 className='titulo_continuar_sorteio_numeros'>Quer continuar?</h1>
                <p className='subtitulo_continuar_sorteio_numeros'>Crie uma conta ou faça login para criar sorteios personalizados</p>
                <button className='botao_sorteio_numeros'>CRIAR NOVO SORTEIO</button>
            </>) : (<>
                <div className='divisao_sorteio_numeros'>
                    <div className='divisao_icone_sorteio_numeros'>
                        <p className='titulo_sorteio_numeros'>Sortear números</p>
                        <TbRefresh onClick={() => gerarNumeros(0, 100)} className='icone_sorteio_numeros' />
                    </div>
                    <div className='divisao_numeros_sorteio_numeros'>
                        {numeros.map(numero => {
                            return (
                                <div className='divisao_numero_sorteio_numeros'><p className='numero_sorteio_numeros'>{numero}</p></div>
                            )
                        })}
                    </div>
                </div>
                <button onClick={() => sortearNumero(0, 4)} className='botao_sorteio_numeros'>SORTEAR</button>
            </>)}
        </section>
    )
}

export default SorteioNumero
