import styled from "@emotion/styled"

const ResultadoCotizacion = styled.div`
    color: #FFF;
    font-family: 'LATO', sans-serif;
    display: flex ;
    align-items: center ;
    gap: 1rem;
    margin-top: 30px;
`

const Texto = styled.p`
    font-size: 18px ;
    span{
        font-weight: 700;
    }
`

const Precio = styled.p`
    font-size: 24px ;
    span{
        font-weight: 700;
    }
`
const Imagen = styled.img`
    display: block ;
    width: 120px ;
`


const Resultado = ({ cotizacion }) => {
    const { PRICE, HIGHDAY, LOWDAY, CHANGEPCT24HOUR, IMAGEURL, LASTUPDATE } = cotizacion

    return (
        <ResultadoCotizacion>
            <Imagen src={`https://cryptocompare.com/${IMAGEURL}`} alt="Imagen cripto" />
            <div>
                <Precio>El precio es de: <span>{PRICE}</span></Precio>
                <Texto>El precio mas alto del dia: <span>{HIGHDAY}</span></Texto>
                <Texto>El precio mas bajo del dia: <span>{LOWDAY}</span></Texto>
                <Texto>Variacion ultimas 24hs: <span>{CHANGEPCT24HOUR}</span></Texto>
                <Texto>Ultima actualizacion: <span>{LASTUPDATE}</span></Texto>
            </div>
        </ResultadoCotizacion>
    )
}

export default Resultado