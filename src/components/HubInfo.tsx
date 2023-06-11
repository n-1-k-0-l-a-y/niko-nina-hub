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
      <div>
        <HubLink href={hub.data.externalUrl} target="_blank" rel="noreferrer">
          <ul className="c-rainbow">
            <li className="c-rainbow__layer c-rainbow__layer--white">View on Nina</li>
            <li className="c-rainbow__layer c-rainbow__layer--orange">View on Nina</li>
            <li className="c-rainbow__layer c-rainbow__layer--red">View on Nina</li>
            <li className="c-rainbow__layer c-rainbow__layer--violet">View on Nina</li>
            <li className="c-rainbow__layer c-rainbow__layer--blue">View on Nina</li>
            <li className="c-rainbow__layer c-rainbow__layer--green">View on Nina</li>
            <li className="c-rainbow__layer c-rainbow__layer--yellow">View on Nina</li>
          </ul>
        </HubLink>
      </div>
    </HubInfoContainer>
  );
}
const HubInfoContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 1em;
`;

const HubLink = styled.a`
  text-decoration: none;
  position: fixed;
  right: 2em;
  bottom: 0;
`;

const HubImage = styled.img`
  max-width: 250px;
`;

export default HubInfo;
