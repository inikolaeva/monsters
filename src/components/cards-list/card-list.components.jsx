import React from 'react';
import {Card} from '../card/card.component'
import './card-list.styles.css'

export const CardsList = (props) => {
    // return <div className = 'card-list'>{props.children}</div>
    return <div className = 'card-list'>
      {
        props.monsters.map(monster => <Card key={monster.id} monster={monster} />)
      }
    </div>
}
