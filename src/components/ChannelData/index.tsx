import React from 'react';

import { Container, InputWrapper, Messages, Input, InputIcon } from './styles';

import ChannelMessage, {Mention} from '../ChannelMessage'

const ChannelData:React.FC = () =>  {
  return (
    <Container>
      <Messages>
        <ChannelMessage
          author="Mateus Santana"
          date="19/06/2020"
          content="Tudo Bem ?"
        />

        <ChannelMessage
          author="Fulano"
          date="19/06/2020"
          content={
            <>
            <Mention>@Mateus Santana</Mention> tudo bem?
            </>
          }
          hasMention
          isBot
        />
      </Messages>

      <InputWrapper>
        <Input placeholder="Conversarem #chat-livre"/>
        <InputIcon/>
      </InputWrapper>

    </Container>
  );
}

export default ChannelData;
