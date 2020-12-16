import React from 'react';
import styled from 'styled-components';
import { colors, font } from '../imports/variables';

const WorkWrapper = styled.div`
  display: flex;
  margin: 270px 0 200px 0;
  /* margin: 270px 0 0 0; */
  width: 100%;
`;

const FeaturedWrapper = styled.div`
  width: 100%;
  .heading {
    font-size: ${font.h2};
    font-family: 'Oswald', sans-serif;
    color: ${colors.accent};
    margin-bottom: 100px;
    text-transform: uppercase;
  }
`;

const FeaturedItem = styled.div`
  width: 325px;
  .title {
    font-family: 'Oswald', sans-serif;
    font-size: ${font.h4};
    color: ${colors.accent};
    text-transform: uppercase;
    margin-bottom: 20px;
  }
  .details {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 60px;
    .service {
      font-weight: 300;
      font-size: ${font.h5};
      .subheading {
        font-family: 'Oswald', sans-serif;
        font-size: 0.85rem;
        font-weight: 300;
        text-transform: uppercase;
        letter-spacing: 3px;
        opacity: 0.65;
        margin-bottom: 10px;
      }
    }
  }
  .links {
    display: flex;
    width: 70px;
    justify-content: space-between;
    align-items: center;
    a {
      text-decoration: none;
      color: ${colors.lightGrey};
      transition: 0.3s ease-in-out;
      &:hover {
        color: ${colors.accent};
      }
    }
  }
  //? Begin temp image placeholder //
  .temp-image {
    background: lightcoral;
    height: 325px;
    width: 325px;
    margin-bottom: 15px;
  }
  //? End temp image placeholder //
`;

export default function Work() {
  return (
    <WorkWrapper>
      <FeaturedWrapper>
        <div className="heading">Featured Projects</div>
        <FeaturedItem>
          <div className="temp-image" />
          <div className="title">Zach Cossman Designs v3</div>
          <div className="details">
            <div className="service">
              <div className="subheading">Service</div>
              Web
            </div>
            <div className="links">
              <a href="#">
                <i className="fab fa-lg fa-github" />
              </a>
              <a href="#">
                <i className="fas fa-lg fa-external-link-alt" />
              </a>
            </div>
          </div>
        </FeaturedItem>
      </FeaturedWrapper>
    </WorkWrapper>
  );
}