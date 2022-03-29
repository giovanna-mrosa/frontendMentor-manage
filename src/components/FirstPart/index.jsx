import React from "react";
import { Nav } from '../Nav' ;
import { NavMob } from "../NavMob";
import Carousel from 'react-elastic-carousel';
import { Card2SecondContentDesk } from "../Card2SecondContentDesk";

import graphicsImg from '../../assets/illustration-intro.svg'
import avatar1 from '../../assets/avatar-anisha.png'
import avatar2 from '../../assets/avatar-ali.png'
import avatar3 from '../../assets/avatar-richard.png'
import avatar4 from '../../assets/avatar-shanai.png'

import './styles.scss'
import { Card2SecondContentMob } from "../Card2SecondContentMob";


export function FirstPart() {
  return (
    <div className="first-container">
      {window.screen.width > 768 ? (
        <Nav />
        ) : (
        <NavMob />
        )
      }
      <div className="content">
        <div className="card1">
          <div className="card1-content">
            <h1>Bring everyone together to build better products.</h1>
            <p>Manage makes it simple for software teams to pan day-to-day tasks while keeping the larger team goals in view.</p>
            <button type="button" className="btn-start2">Get Started</button>
          </div>
          <img src={graphicsImg} alt="Graphics icon" />
        </div>
        <div className="card2">
          <div className="card2-content1">
            <h1>What's different about Manage?</h1>
            <p>Manage provides all the functionality your team needs, without the complexity. Our software is tailor-made for modern digital product teams.</p>
          </div>
          {window.screen.width > 768 ? (
            <Card2SecondContentDesk />
            ) : (
            <Card2SecondContentMob />
            )
          }
          
        </div>
        <div className="card3">
          <h1>What they've said</h1>
          <Carousel 
            itemsToShow={window.screen.width > 768 ? (3) : (1)} 
            className="carousel-box"
            pagination={window.screen.width > 768 ? (false) : (true)}
            showArrows={false}
          >
            <div className="feedback">
              <img src={avatar1} alt="Avatar 1" />
              <h5>Anisha Li</h5>
              <p>“Manage has supercharged our team’s workflow. The ability to maintain visibility on larger milestones at all times keeps everyone motivated.”</p>
            </div>
            <div className="feedback">
              <img src={avatar2} alt="" />
              <h5>Ali Bravo</h5>
              <p>“We have been able to cancel so many other subscriptions since using Manage. There is no more cross-channel confusion and everyone is much more focused.”</p>
            </div>
            <div className="feedback">
              <img src={avatar3} alt="" />
              <h5>Richard Watts</h5>
              <p>“Manage allows us to provide structure and process. It keeps us organized and focused. I can’t stop recommending them to everyone I talk to!”</p>
            </div>
            <div className="feedback">
              <img src={avatar4} alt="" />
              <h5>Shanai Gough</h5>
              <p>“Their software allows us to track, manage and collaborate on our projects from anywhere. It keeps the whole team in-sync without being intrusive.”</p>
            </div>
          </Carousel>          
          <button type="button" className="btn-start3">Get Started</button>
        </div>
      </div>
    </div>    
  )
}