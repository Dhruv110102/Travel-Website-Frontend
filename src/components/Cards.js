import React from 'react'
import CardItem from './CardItem'
import './Cards.css';

function Cards() {
    return (
        <div className="cards">
            <h1>Wonders of Travel!</h1>
            <div className="cards__container">
                <div className="cards__wrapper">
                    
                    <ul className="cards__items">
                        <CardItem
                            src="img-sp.jpg"
                            text="Set Sail in Ocean visiting Waters and cruising"
                            label='Mystery'
                            path='/services'
                        />
                        <CardItem
                            src="blog2.jpg"
                            text="Experience the cold on top of the Mountains" 
                            
                            label='Adventure'
                            path='/services'
                        />
                        <CardItem
                            src="img-9.jpg"
                            text="Enjoy Waterfall amidst the forest mountains"
                            label='Adrenaline'
                            path='/services'
                        />
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Cards
