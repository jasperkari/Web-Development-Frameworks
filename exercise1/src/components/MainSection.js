import React from 'react'
import styles from './MainSection.module.css'
import pic from '../../src/scf839l3.bmp' 
import pic2 from '../../src/q3jbh38e.bmp'

export default function MainSection(props) {
    return (
        <div className = {styles.container}>
            <div classname = {styles.main}>
                <div style = {{background: "white"}} >
                    <img src={pic}/>
                    <div className = {styles.text}>
                      <span className = {styles.header}> Energia</span> Helsinkiläisten kaukolämpö kallistuu kertaheitolla, ja se vaikuttaa kerrostaloihinkin – Katso laskurista, mitä tapahtuu lämmityslaskullesi
                    </div>
                </div>
                <div style = {{background: "white"}}>
                   <img src={pic2}/>
                    <div className = {styles.text}>
                     <span className = {styles.header}> Saksan vaalit</span> Sosiaali­demokraatit voittoon Saksassa, Merkelin puolueelle historiallisen heikko tulos
                    </div>
                </div>
            </div>
        </div>

    )
}
