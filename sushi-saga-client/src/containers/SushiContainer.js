import React, { Fragment } from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from '../components/Sushi'

const SushiContainer = (props) => {
  console.log(props.sushis)

  // const allSushi = props.sushis.map(sushiObj => <Sushi key={sushiObj.id} sushi={sushiObj} />)

  return (
    <Fragment>
      <div className="belt">
        {props.sushis.map((sushi) => {
          return <Sushi sushi = {sushi} key={sushi.id} eat={props.eat} eaten={props.eaten.includes(sushi)}/>})
        })
        <MoreButton moreSushis={props.moreSushis}/>
      </div>
    </Fragment>
  )
}

export default SushiContainer