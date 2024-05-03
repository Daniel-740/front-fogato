import React from 'react';
import Lottie from 'react-lottie';
import animationLoader from '../../public/lotties/loader.json';

export const Loader = ({ height, width }) => {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationLoader,
        rendererSettings: {
          preserveAspectRatio: "xMidYMid slice"
        }
      };
    
    return (
      <div>
        <Lottie 
          options={defaultOptions}
          height={height}
          width={width}
        />
      </div>
    );
  }