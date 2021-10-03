import React from 'react'
import styles from './Side.module.css'

export default function Side() {
    return (
        <div className = {styles.container}>
            <div className = {styles.Title}>
                Luetuimmat
            </div>
            <div className = {styles.body}>             
            <span className = {styles.topic}> Hotellit</span> Suomen suurimman hotellin rakentaminen alkaa: 700 huonetta, suora yhteys ”kuivin jaloin” lentoasemalle 
            <span className = {styles.topic}> Perhe</span> ”Moni ei todella vain halua lapsia” – Yli tuhat vapaaehtoisesti lapsetonta kertoi HS:n kyselyssä, miksi lapsiperhe ei ole heitä varten
            <span className = {styles.topic}> Energia</span> Helsinkiläisten kaukolämpö kallistuu kertaheitolla, ja se vaikuttaa kerrostaloihinkin – Katso laskurista, mitä tapahtuu lämmityslaskullesi
            <span className = {styles.topic}> Arki</span> Essi ja Kimmo Määttä ”liinasivat” taloudenpidon ja saivat tuntikaupalla lisää vapaa-aikaa – Näin yritysmaailmasta tuttu filosofia toimii arjen pyörittämisessä   
            <span className = {styles.topic}> Mielenosoitus</span> Elokapina aikoo pysäyttää Mannerheimintien liikenteen kymmeneksi päiväksi, tapahtumaan yli tuhat ilmoittautunutta – Poliisi: ”Meillä on vielä pari päivää aikaa neuvotella”  
            <span className = {styles.topic}> HS Visio</span> Christophe Barraud on maailman paras talousennustaja. Nyt hän on huolissaan kahdesta maailmantalouden riskistä.  
            <span className = {styles.topic}> Formula 2</span> Valtteri Bottas piikitteli Mercedes-talliaan huvittavalla kuvalla              
            </div>
        </div>
    )
}