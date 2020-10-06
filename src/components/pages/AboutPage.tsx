import React from 'react';
import {useHistory} from 'react-router-dom'

const AboutPage: React.FC = () => {
  const history = useHistory()
  return (
    <>
      <h1>Info page</h1>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Porro culpa
        voluptates beatae aliquam pariatur quam eveniet dolore assumenda
        deserunt impedit? Expedita minima sunt velit. Quisquam natus deserunt
        cupiditate nobis eum!
      </p>
      <button className='btn' onClick={()=> history.push('/')}>Go back</button>
    </>
  );
};

export default AboutPage;
