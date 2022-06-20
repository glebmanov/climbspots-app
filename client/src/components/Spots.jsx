import React from 'react';
import { useSelector } from 'react-redux';
import { setActiveSpotId } from '../store/weatherSlice';

import Button from '../components/Button';

const Spots = () => {
  const spots = useSelector(state => state.weather.spots);
  const activeSpotId = useSelector(state => state.weather.activeSpotId);

  return (
    <>
      {spots.map(({ id, name }) => (
        <Button
          className='col-5 col-lg-12 mb-2 mx-lg-0 mx-1'
          key={id}
          name={name}
          handler={setActiveSpotId}
          value={{ activeSpotId: id }}
          isActive={activeSpotId === id}
        />
      ))}
    </>
  );
};

export default Spots;
