import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
//Color, dinamico
//opacity
//scale
 
const Wrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  height: 18px;
  background-color: #A52A2A;
  border: 2px solid #fff;
  border-radius: 100%;
  opacity: 0.5;
  user-select: none;
  scale: 3;
  transform: translate(-50%, -50%);
  cursor: ${props => (props.onClick ? 'pointer' : 'default')};
  &:hover {
    z-index: 1;
  }
`;

const Marker = props => (
  
  <Wrapper
    style={{
      width: props.magnitud * 10, 
      height: props.magnitud * 10,
      backgroundColor: props.color
    }}
    title={props.text}
    {...props.onClick ? { onClick: props.onClick } : {}}
  />
);

Marker.defaultProps = {
  onClick: null,
};

Marker.propTypes = {
  onClick: PropTypes.func,
  text: PropTypes.string.isRequired,
};



export default Marker;