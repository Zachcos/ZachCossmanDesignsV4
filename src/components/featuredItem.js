import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import { motion } from 'framer-motion';
import { colors, font, breakpoints } from '../imports/variables';

const ItemWrapper = styled(motion.div)`
  height: 550px;
  position: relative;
  width: 100%;
  margin: 0 0 100px 0;
  .image-frame {
    height: 550px;
    margin-bottom: 50px;
    overflow: hidden;
    position: relative;
    width: 100%;
    img {
      top: 0;
      position: relative;
      transition: 0.3s ease-out;
      width: 100%;
      height: 100%;
      object-fit: cover;
      &:hover {
        transform: scale(1.05);
      }
    }
  }
  .title {
    color: ${colors.darkGrey};
    font-family: 'Oswald', sans-serif;
    font-size: ${font.base};
    font-weight: 100;
    margin-bottom: 20px;
    position: absolute;
    right: 30px;
    top: 30px;
  }
  @media screen and (max-width: ${breakpoints.phone}) {
    height: 350px;
    .image-frame {
      height: 350px;
    }
  }
`;

export default function FeaturedItem({ item, variants }) {
  return (
    <ItemWrapper variants={variants}>
      <Link to={item.slug}>
        <div className="image-frame">
          <img src={item.portImg} alt="" />
        </div>
        <div className="title">{item.title}</div>
      </Link>
    </ItemWrapper>
  );
}
