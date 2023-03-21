import React, { useEffect, useState } from 'react'
import { TbRefresh } from "react-icons/tb";
import confetti from 'canvas-confetti'
import './Sorteio.css'

const Sorteio = () => {

    const [numeros, setNumeros] = useState([])
    const [numeroSorteado, setNumeroSorteado] = useState()

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
    }

    useEffect(() => {
        gerarNumeros(0, 100)
    }, [])

    return (
        <section className='sorteio_numeros'>
            <div className='divisao_sorteio_numeros'>
                <div className='divisao_icone_sorteio_numeros'>
                    <p className='titulo_sorteio_numeros'>Sortear números</p>
                    <TbRefresh onClick={() => gerarNumeros(0, 100)} className='icone_sorteio_numeros'/>
                </div>
                <div className='divisao_numeros_sorteio_numeros'>
                    {numeros.map(numero => {
                        return (
                            <div className='divisao_numero_sorteio_numeros'><p className='numero_sorteio_numeros'>{numero}</p></div>
                        )
                    })}
                </div>
            </div>
            <div className='divisao_numero_sorteio_numeros numero_sorteado_sorteio_numeros'><p className='numero_sorteio_numeros'>{numeroSorteado}</p></div>
            <button onClick={() => sortearNumero(0, 4)} className='botao_sorteio_numeros'>SORTEAR</button>
        </section>
    )
}

export default Sorteio
