import React from "react";
import { Link } from 'react-router-dom';
import beersImg from './../assets/beers.png';
import newBeerImg from './../assets/new-beer.png';
import randomBeerImg from './../assets/random-beer.png';

function Home() {
  return (
    <div>
      <Link to='/beers'>
        <div>
          <img src={beersImg} alt="beersImage" />
          <h2>All Beers</h2>
          <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus pharetra egestar lectus, sit amet eleifend ex tincidunt in. Nam dictum arcu ut dignissim varius.</p>
        </div>
      </Link>
      <Link to='/random-beer'>
        <div>
          <img src={randomBeerImg} alt="randomBeerImage" />
          <h2>Random Beer</h2>
          <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus pharetra egestar lectus, sit amet eleifend ex tincidunt in. Nam dictum arcu ut dignissim varius.</p>
        </div>
      </Link>
      <Link to='/new-beer'>
        <div>
          <img src={newBeerImg} alt="newBeerImage" />
          <h2>New Beer</h2>
          <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus pharetra egestar lectus, sit amet eleifend ex tincidunt in. Nam dictum arcu ut dignissim varius.</p>
        </div>
      </Link>
    </div>

  );
}

export default Home;