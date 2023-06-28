import React from "react";
import styled from "styled-components";

import { useNina } from "../context/nina";

function HubInfo() {
  const { hub } = useNina();

  if (!hub) {
    return null;
  }

  return (
    <HubInfoContainer className="HubInfo">
      <HubImage src={hub.data.image} />
      <HubLink href={hub.data.externalUrl} target="_blank" rel="noreferrer">View on Nina</HubLink>
    </HubInfoContainer>
  );
}

const HubInfoContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 1em;
`;

const HubLink = styled.a`
  position: fixed;
  right: 6px;
  bottom: 4px;
  text-decoration: none;
  color: #0070f3;
`;

const HubImage = styled.img`
  max-width: 250px;
`;

export default HubInfo;
