import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Drinks from '../data/Drinks.jpg';
import './Home.css';

const useStyles = makeStyles((theme) => ({
  root: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    margin: 'auto',
  },
}));

const Home = () => {
  const classes = useStyles();
  const maxWidth575 = useMediaQuery('(max-width:575px)');
  return (
    <div >
      <GridList className={classes.root} cols={1}>
        {maxWidth575 ?
          <GridListTile key={1} style={{ width: "580px", height: "450px" }} className="gridList">
            <img src={Drinks} alt="Drinks" />
          </GridListTile>
          :
          <GridListTile key={1} style={{ width: "1080px", height: "700px" }} className="gridList">
            <img src={Drinks} alt="Drinks" />
          </GridListTile>
        }
      </GridList>
    </div>
  )
}
export default Home;