import React from 'react';
import styled from 'styled-components';

const WeatherPanel = ({ weatherData }) => {
  if (!weatherData) return <p>Loading...</p>;

  return (
    <Panel>
      <CityName>{weatherData.name}</CityName>
      <Temperature>{weatherData.data.temperature}°C</Temperature>
      <Description>{weatherData.data.condition}</Description>
    </Panel>
  );
};

export default WeatherPanel;

const Panel = styled.div`
  background-color: #eceff1;
  padding: 20px;
  border-radius: 8px;
  text-align: center;
`;

const CityName = styled.h2`
  font-size: 2em;
`;

const Temperature = styled.p`
  font-size: 4em;
  margin: 10px 0;
`;

const Description = styled.p`
  font-size: 1.2em;
  color: #78909c;
`;
