import React from "react";

import { FaGift } from "react-icons/fa";

import './MeusSorteios.css'

const MeusSorteios = () => {
    return (
        <section className='sorteio_meus_sorteios'>
            <div className='divisao_sorteio_meus_sorteios'>
                <div className='divisao_icone_sorteio_meus_sorteios'>
                    <p className='titulo_sorteio_meus_sorteios'>Meus sorteios</p>
                </div>
                <div className='divisao_numeros_sorteio_meus_sorteios'>
                    <div className='divisao_numero_sorteio_meus_sorteios'>
                        <div className='divisao_sorteio_registro_meus_sorteios'>
                            <FaGift className='icone_sorteio_registro_meus_sorteios' />
                            <div className='nome_sorteio_registro_meus_sorteios'>Sorteio Iphone</div>
                        </div>
                        <p className='data_sorteio_meus_sorteios'>23/03/2023</p>
                    </div>
                    <div className='divisao_numero_sorteio_meus_sorteios'>
                        <div className='divisao_sorteio_registro_meus_sorteios'>
                            <FaGift className='icone_sorteio_registro_meus_sorteios' />
                            <div className='nome_sorteio_registro_meus_sorteios'>Sorteio Carro</div>
                        </div>
                        <p className='data_sorteio_meus_sorteios'>19/04/2023</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default MeusSorteios
