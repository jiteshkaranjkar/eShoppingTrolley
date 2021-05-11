import React from 'react';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import Drinks from '../data/Drinks.jpg';
import './Home.css';
const Home = () => {
  return (
    <div >
      <GridList cols={1}>
        <GridListTile key={1} style={{ width: "1080px", height: "700px" }} className="gridList">
          <img src={Drinks} alt="Drinks" />
        </GridListTile>
      </GridList>
    </div>
  )
}
export default Home;