import React from 'react'
import { Link } from 'react-router-dom';
import Fade from 'react-reveal/Fade';
import { Link as LinkRoll } from 'react-scroll'
import './MenusSA.css'

import Contact2 from '../contact/Contact2'
import SubCardBg from '../../assets/sub-card-bg-min.jpg'


const MenusSA = () => {
  return (
    <>

<div className="mh-cards-header container">
      <h1>  RODEO RECOVERY TREATMENT CENTER OFFERS VARIOUS SUBSTABCE ABUSE PROGRAMS </h1>
      <p>At a Rodeo Recovery Treatment Center, clients receive individual therapy alongside a range of additional treatments, including relapse prevention, trauma therapy, mindfulness meditation, transportation, yoga, and more. We offer support that clients need to allow them to gradually go back to treatment. </p>
</div>

{/* Mental Health Thumbnails */}

          
<div class="sa-thumbnail-wrap container">

 <div class="sa-thumbnails"> 
  <img src={SubCardBg} alt="Mental Health" loading="lazy"/>
    <div class="centered">
      <Fade left>
      <h5>SUBSTANCE ABUSE TREATMENT​</h5>
      </Fade>
      <Fade right>
      <h1>ALCOHOLISM</h1>
      </Fade>
      <LinkRoll activeClass="active" to="top" spy={true} smooth={true} duration={500}>
        <Link to="/alcohol">
            <button>Learn More</button>
        </Link>
      </LinkRoll>
    </div>
  </div>

  <div class="sa-thumbnails"> 
  <img src={SubCardBg} alt="Mental Health" loading="lazy"/>
    <div class="centered">
      <Fade left>
      <h5>SUBSTANCE ABUSE TREATMENT​</h5>
      </Fade>
      <Fade right>
      <h1>COCAINE</h1>
      </Fade>
      <LinkRoll activeClass="active" to="top" spy={true} smooth={true} duration={500}>
        <Link to="/cocaine">
            <button>Learn More</button>
        </Link>
      </LinkRoll>
    </div>
  </div>

  <div class="sa-thumbnails"> 
  <img src={SubCardBg} alt="Mental Health" loading="lazy"/>
    <div class="centered">
      <Fade left>
      <h5>SUBSTANCE ABUSE TREATMENT​</h5>
      </Fade>
      <Fade right>
      <h1>FENTANYL</h1>
      </Fade>
      <LinkRoll activeClass="active" to="top" spy={true} smooth={true} duration={500}>
        <Link to="/fentanyl">
            <button>Learn More</button>
        </Link>
      </LinkRoll>
    </div>
  </div>

  <div class="sa-thumbnails"> 
  <img src={SubCardBg} alt="Mental Health" loading="lazy"/>
    <div class="centered">
      <Fade left>
      <h5>SUBSTANCE ABUSE TREATMENT​</h5>
      </Fade>
      <Fade right>
      <h1>HEROIN</h1>
      </Fade>
      <LinkRoll activeClass="active" to="top" spy={true} smooth={true} duration={500}>
        <Link to="/heroin">
            <button>Learn More</button>
        </Link>
      </LinkRoll>
    </div>
  </div>

  <div class="sa-thumbnails"> 
  <img src={SubCardBg} alt="Mental Health" loading="lazy"/>
    <div class="centered">
      <Fade left>
      <h5>SUBSTANCE ABUSE TREATMENT​</h5>
      </Fade>
      <Fade right>
      <h1>KRATOM</h1>
      </Fade>
      <LinkRoll activeClass="active" to="top" spy={true} smooth={true} duration={500}>
        <Link to="/kratom">
            <button>Learn More</button>
        </Link>
      </LinkRoll>
    </div>
  </div>

  <div class="sa-thumbnails"> 
  <img src={SubCardBg} alt="Mental Health" loading="lazy"/>
    <div class="centered">
      <Fade left>
      <h5>SUBSTANCE ABUSE TREATMENT​</h5>
      </Fade>
      <Fade right>
      <h1>MDMA</h1>
      </Fade>
      <LinkRoll activeClass="active" to="top" spy={true} smooth={true} duration={500}>
        <Link to="/mdma">
            <button>Learn More</button>
        </Link>
      </LinkRoll>
    </div>
  </div>

  <div class="sa-thumbnails"> 
  <img src={SubCardBg} alt="Mental Health" loading="lazy"/>
    <div class="centered">
      <Fade left>
      <h5>SUBSTANCE ABUSE TREATMENT​</h5>
      </Fade>
      <Fade right>
      <h1>METH</h1>
      </Fade>
      <LinkRoll activeClass="active" to="top" spy={true} smooth={true} duration={500}>
        <Link to="/meth">
            <button>Learn More</button>
        </Link>
      </LinkRoll>
    </div>
  </div>

  <div class="sa-thumbnails"> 
  <img src={SubCardBg} alt="Mental Health" loading="lazy"/>
    <div class="centered">
      <Fade left>
      <h5>SUBSTANCE ABUSE TREATMENT​</h5>
      </Fade>
      <Fade right>
      <h1>OPIATE</h1>
      </Fade>
      <LinkRoll activeClass="active" to="top" spy={true} smooth={true} duration={500}>
        <Link to="/opiate">
            <button>Learn More</button>
        </Link>
      </LinkRoll>
    </div>
  </div>

  <div class="sa-thumbnails"> 
  <img src={SubCardBg} alt="Mental Health" loading="lazy"/>
    <div class="centered">
      <Fade left>
      <h5>SUBSTANCE ABUSE TREATMENT​</h5>
      </Fade>
      <Fade right>
      <h1>OPIOID</h1>
      </Fade>
      <LinkRoll activeClass="active" to="top" spy={true} smooth={true} duration={500}>
        <Link to="/opioid">
            <button>Learn More</button>
        </Link>
      </LinkRoll>
    </div>
  </div>

  <div class="sa-thumbnails"> 
  <img src={SubCardBg} alt="Mental Health" loading="lazy"/>
    <div class="centered">
      <Fade left>
      <h5>SUBSTANCE ABUSE TREATMENT​</h5>
      </Fade>
      <Fade right>
      <h1>OXYCODONE</h1>
      </Fade>
      <LinkRoll activeClass="active" to="top" spy={true} smooth={true} duration={500}>
        <Link to="/oxycodone">
            <button>Learn More</button>
        </Link>
      </LinkRoll>
    </div>
  </div>

  <div class="sa-thumbnails"> 
  <img src={SubCardBg} alt="Mental Health" loading="lazy"/>
    <div class="centered">
      <Fade left>
      <h5>SUBSTANCE ABUSE TREATMENT​</h5>
      </Fade>
      <Fade right>
      <h1>PRESCRIPTION</h1>
      </Fade>
      <LinkRoll activeClass="active" to="top" spy={true} smooth={true} duration={500}>
        <Link to="/prescription">
            <button>Learn More</button>
        </Link>
      </LinkRoll>
    </div>
  </div>

  <div class="sa-thumbnails"> 
  <img src={SubCardBg} alt="Mental Health" loading="lazy"/>
    <div class="centered">
      <Fade left>
      <h5>SUBSTANCE ABUSE TREATMENT​</h5>
      </Fade>
      <Fade right>
      <h1>XANAX</h1>
      </Fade>
      <LinkRoll activeClass="active" to="top" spy={true} smooth={true} duration={500}>
        <Link to="/xanax">
            <button>Learn More</button>
        </Link>
      </LinkRoll>
    </div>
  </div>

</div>



<Contact2 />

    </>

  )
}

export default MenusSA