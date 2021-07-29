import "./work-showcase.styles.css";

import ComingSoon from "../../assets/comingsoon.png";
import Container from "../../components/Container/Container";
import CrownClothing from "../../assets/crownclothing.png";
import { Link } from "react-router-dom";

const WorkShowCasePage = () => {
  console.log(CrownClothing);
  return (
    <div className='show-case-page'>
      <Container>
        <div className='showcase-card'>
          <div
            style={{ backgroundImage: `url(${CrownClothing})` }}
            className='showcase-image'></div>

          <div className='showcase-text'>
            <Link
              to={{ pathname: "http://crown-clothing-001.herokuapp.com/" }}
              target='_blank'>
              <h2>React | Redux | FireBase</h2>
              <h3>Crown Clothing Shop</h3>
            </Link>
          </div>
        </div>
        <div className='showcase-card'>
          <div
            style={{ backgroundImage: `url(${ComingSoon})` }}
            className='showcase-image'></div>
          <div className='showcase-text'>
            <Link
              to={{ pathname: "http://crown-clothing-001.herokuapp.com/" }}
              target='_blank'>
              <h2>Tech Stack</h2>
              <h3>Project coming soon...</h3>
            </Link>
          </div>
        </div>
        <div className='showcase-card'>
          <div
            style={{ backgroundImage: `url(${ComingSoon})` }}
            className='showcase-image'></div>
          <div className='showcase-text'>
            <Link
              to={{ pathname: "http://crown-clothing-001.herokuapp.com/" }}
              target='_blank'>
              <h2>Tech Stack</h2>
              <h3>Project coming soon...</h3>
            </Link>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default WorkShowCasePage;
