import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <section className="heading-top">
        <div className="heading-texttop">
          <p className="h1">
            <span className="food-design">Food</span> Factory
          </p>
          <p className="slogan fst-italic">A taste of home</p>
        </div>
      </section>

      <section className="main-top">
        <div className="nav-top">
          <ul className="nav justify-content-center">
            <li className="nav-item">
              <a className="nav-link fs-4" aria-current="page" href="#">
                Home
              </a>
            </li>
            <li className="nav-item">
              <Link className="nav-link fs-4" to="/profile">
                Profile
              </Link>
            </li>
            <li className="nav-item">
              <a className="nav-link fs-4" href="#">
                Contact
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link fs-4">About Us</a>
            </li>
          </ul>
        </div>
      </section>

      <section className="top top-full">
        <div className="upper-portion">
          <div className="upper-portion-left">
            <h2>
              <span className="color"> Skip</span> The Diet,
              <br />
              Just Eat Healthy
              <br />
              With Food Network
            </h2>
            <p>
              Imagine you don't need a diet because we provide healthy and
              delicious food for you!
            </p>
            <a className="button" href="">
              Order Food
            </a>
          </div>
          <div className="upper-portion-right">
            <img src="../../images/female/Group 8425.png" alt="" />
          </div>
        </div>
      </section>
      <section className="second-top">
        <div className="middle-portion">
          <div className="upper-portion-right">
            <img src="../../images/female/Person Image.png" alt="" />
          </div>
          <div className="upper-portion-left">
            <h2>About Me</h2>
            <p>
              lorem ispsum jnfjn hhs hsbh hbh sbdh bdbn hsbj abb bhsa dnb bdh
              abdbas db b dcusbc cuc cbsd ccb bhasgdugad ghatpat ami jabo
              protidin diye adda dibo tmra ki bolo jaba amr sathe na jaba
              naaaaaaaa.
            </p>
            <a className="button" href="">
              Contact Me
            </a>
          </div>
        </div>
      </section>
      <section className="middle-second">
        <h2>My Receipies</h2>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s.
        </p>
      </section>

      <section>
        <div className="all-together">
          <div className="Recipie Recipie-design">
            <div className="food-image">
              <img src="../../images/food/Project Cover.jpg" alt="" />
            </div>
            <div className="recipie-title">
              <h2>Recipie Title</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lacus,
                fermentum amet faucibus sed id nisi lectus at.
              </p>
            </div>
          </div>
          <div className="Recipie Recipie-design">
            <div className="food-image">
              <img src="../../images/food/Project Cover1.jpg" alt="" />
            </div>
            <div className="recipie-title">
              <h2>Recipie Title</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lacus,
                fermentum amet faucibus sed id nisi lectus at.
              </p>
            </div>
          </div>

          <div className="Recipie" className="Recipie-design">
            <div className="food-image">
              <img src="../../images/food/Project Cover.png" alt="" />
            </div>
            <div className="recipie-title">
              <h2>Recipie Title</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lacus,
                fermentum amet faucibus sed id nisi lectus at.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="second-last">
          <div className="second-last-heading">
            <div className="second-last-first-upper">
              <h1>700K</h1>
            </div>
            <div>
              <p>Youtube Subscribers</p>
            </div>
          </div>

          <div className="second-last-heading2">
            <div className="second-last-first-upper">
              <h1>2.4m</h1>
            </div>
            <div className="second-last-first-upper-second">
              <p>Instagram Followers</p>
            </div>
          </div>

          <div className="second-last-heading3">
            <div className="second-last-first-upper">
              <h1>100K</h1>
            </div>
            <div>
              <p>Dribbble Shot Likes</p>
            </div>
          </div>
        </div>
        <section className="last-part">
          <div>
            <h1>
              <span className="orange-color">FOOD</span> NETWORK
            </h1>
          </div>
          <div>
            <p>Eat healthy to live healthy. Live healthy to live happy</p>
          </div>
        </section>
      </section>
      <script src="script.js"></script>
    </div>
  );
};

export default Home;
