import React, { Component } from 'react';
import style from '../styles/city.module.css'
import coatOfArms from '../assets/images/Coat_of_arms_of_Vinnytsia.svg.png'
import flag from '../assets/images/Flag_of_Vinnycia.svg.png'
import firstPhoto from '../assets/images/Vinnytsia_1.jpg'
import secondPhoto from '../assets/images/Vinnytsia_2.jpg'
import thirdPhoto from '../assets/images/Vinnytsia_3.jpg'
import fourthPhoto from '../assets/images/Vinnytsia_4.jpg'
import fifthPhoto from '../assets/images/Vinnytsia_5.jpg'

class CityClass extends Component {
    render() {
        return (
            <div className={style.container}>
            <h1 className={style.title}>Vinnytsia</h1>
            <hr></hr>
            <div className={style.main}>
                <div className={style.section}>
                    <p>Vinnytsia  is a city in western Ukraine, located on the banks of the Southern Bug. It serves as the administrative center of Vinnytsia Oblast. It is the largest city in the historic region of Podillia. It also serves as the administrative center of Vinnytsia Raion, one of the six raions of Vinnytsia Oblast. It has a population of 369,739 (2022 estimate).</p>
                    <p>The city's roots date back to the Middle Ages. It was under Lithuanian and Polish control for centuries. From 1653 to 1667, Vinnytsia was a regimental city of the Hetman state, and in 1793, it was ceded to the Russian Empire. During the 1930s and early 1940s, the city was the site of massacres, first during Stalin's purges and then during the Holocaust in Ukraine and the Nazi occupation. A Cold War–era airbase was located near the city. Currently, Vinnytsia is developing as one of the most comfortable cities for life in independent Ukraine.</p>
                </div>
                <div className={style.aside}>
                    <div className={style.symbol}>
                        <div>
                            <img src={coatOfArms} alt="Example" />
                            <p>Coat of arms</p>
                        </div>
                        <div>
                            <img src={flag} alt="" />
                        </div>
                    </div>
                    <hr />
                    <div className={style.upper_box_photo}>
                        <img src={firstPhoto} alt="" />
                        <img src={secondPhoto} alt="" />
                    </div>
                    <div className={style.bottom_box_photo}> 
                        <img src={thirdPhoto} alt="" />
                        <img src={fourthPhoto} alt="" />
                        <img src={fifthPhoto} alt="" />
                    </div>
                </div>
            </div>
            
            
        </div>
        );
    }
}

export default CityClass;
