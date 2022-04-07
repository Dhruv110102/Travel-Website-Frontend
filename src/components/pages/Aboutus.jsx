import React from "react";
import styled from "styled-components";
import Me from "../assets/Me.jpeg";
import pratham from "../assets/pratham1.png"
import Testimonials from "./Testimonials";
import shivang from "../assets/Shivang1.jpeg"
export default function About() {
  return (
    <Section id="testimonials">
      <div className="title">
        <h2>Development Team</h2>
      </div>
      <div className="testimonials">
        <div className="testimonial">
          <p>
            Dhruv Deshmukh
          </p>
          <div className="info">
            <img src={Me} alt="" />
            <div className="details">
              <h4>19BCE10018</h4>
              <span>Developer-Front End</span>
            </div>
          </div>
        </div>
        
        <div className="testimonial">
          <p>
            Pratham Gupta
          </p>
          <div className="info">
            <img src={pratham} alt="" />
            <div className="details">
              <h4>19BCE10096</h4>
              <span>Developer-Front End</span>
            </div>
          </div>
        </div>
        <div className="testimonial">
          <p>
            Shivang Kansal
          </p>
          <div className="info">
            <img src={shivang} alt="" />
            <div className="details">
              <h4>19BCE10225</h4>
              <span>Developer-Front End</span>
            </div>
            
          </div>
        </div>
      </div>
      <Testimonials/>
      
    </Section>
    
  );
}

const Section = styled.section`
  margin: 5rem 0;
  .title {
    text-align: center;
    margin-bottom: 2rem;
  }
  .testimonials {
    display: flex;
    justify-content: center;
    margin: 0 2rem;
    gap: 2rem;
    .testimonial {
      background-color: aliceblue;
      padding: 2rem;
      border-radius: 0.5rem;
      box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
      transition: 0.3s ease-in-out;
      &:hover {
        transform: translateX(0.4rem) translateY(-1rem);
        box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
      }
      .info {
        display: flex;
        justify-content: center;
        gap: 1rem;
        align-items: center;
        margin-top: 1rem;
        img {
          border-radius: 3rem;
          height: 3rem;
        }
        .details {
          span {
            font-size: 0.9rem;
          }
        }
      }
    }
  }
  @media screen and (min-width: 280px) and (max-width: 768px) {
    .testimonials {
      flex-direction: column;
      margin: 0;
      .testimonial {
        justify-content: center;
        .info {
          flex-direction: column;
          justify-content: center;
        }
      }
    }
  }
`;
