import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import IconButton from '@material-ui/core/IconButton';
import StarBorderIcon from '@material-ui/icons/StarBorder';

import Drinks1 from '../data/Drinks1.jpg';
import Drinks2 from '../data/Drinks2.jpg';
import Drinks3 from '../data/Drinks3.jpg';
import Drinks4 from '../data/Drinks4.jpg';
import Drinks5 from '../data/Drinks5.jpg';

const tileData = [
  {
    key:1,
    image: Drinks1,
    title: 'Breakfast',
    author: 'jill111',
    cols: 2,
    featured: true,
  },
  {
    key: 2,
    image: Drinks2,
    title: 'Tasty burger',
    author: 'director90',
  },
  {
    key: 3,
    image: Drinks3,
    title: 'Camera',
    author: 'Danson67',
  },
  {
    key: 4,
    image: Drinks4,
    title: 'Morning',
    author: 'fancycrave1',
    featured: true,
  },
  {
    key: 5,
    image: Drinks5,
    title: 'Hats',
    author: 'Hans',
  },
];

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    //flexWrap: 'nowrap',
    width: 900,
    height: 850,
    // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
    //transform: 'translateZ(0)',
  },
  title: {
    color: theme.palette.primary.light,
  },
  titleBar: {
    background:
      'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
  },
}));

export default function Home() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <GridList style={{ width: "900px", height: "700px" }}  className={classes.gridList} cols={2.5}>
        {tileData.map((tile) => (
          <GridListTile key={tile.key}>
            <img src={tile.image} alt={tile.title} />
            <GridListTileBar
              title={tile.title}
              classes={{
                root: classes.titleBar,
                title: classes.title,
              }}
              actionIcon={
                <IconButton aria-label={`star ${tile.title}`}>
                  <StarBorderIcon className={classes.title} />
                </IconButton>
              }
            />
          </GridListTile>
        ))}
      </GridList>
    </div>
  );
}