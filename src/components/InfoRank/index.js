// src/pages/Entrada.js
import * as C from './style';
import bronzeI from '../../assets/Bronze I.png'
//import { FaixaAmarela } from '../../styles/faixaAmarela';

const InfoRank = () => {
  return (
    <C.CampoInfoRank>
        <C.InfoRank>
            <C.imgRank src={bronzeI}></C.imgRank>
            <C.descRank>Bronze I</C.descRank>
            <img style={{height: '80%', width: '28%'}} src={bronzeI} alt=''></img>
            <span style={{fontSize: '5vw', fontWeight: 'bold', color: '#CDA572'}}>Bronze I</span>
            <C.Temporada>
                <C.descTemporada>A temporada encerrará daqui a:</C.descTemporada>
                <C.Duracao>7 Dias</C.Duracao>
            </C.Temporada>
        </C.InfoRank>
    </C.CampoInfoRank>
  );

};

export default InfoRank;
