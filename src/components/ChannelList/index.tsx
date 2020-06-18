import React from 'react';

import { Container,Category ,AddCategoryIcon } from './styles';

import  ChannelButton from '../ChannelButton';


const ChannelList:React.FC = () =>  {
  return (
    <Container>

      <Category>
        <span>Canis de texto</span>
        <AddCategoryIcon/>
      </Category>

      <ChannelButton channelName="chat-livre"/>
      <ChannelButton channelName="trabalho"/>
      <ChannelButton channelName="csgo"/>
      <ChannelButton channelName="volorant"/>
      <ChannelButton channelName="gta"/>
    </Container>
  );
}

export default ChannelList;
