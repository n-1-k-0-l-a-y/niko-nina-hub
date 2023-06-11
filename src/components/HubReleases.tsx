import React from "react";
import styled from "styled-components";

import { useNina } from "../context/nina";

function HubReleases() {
  const { releases } = useNina();
  if (!releases) {
    return null;
  }

  releases.sort(
    (a, b) => new Date(a.datetime).getTime() - new Date(b.datetime).getTime()
  );

  return (
    <HubReleasesContainer>
      {releases.map((release) => (
        <ReleaseImage src={release.metadata.image} />
      ))}
    </HubReleasesContainer>
  );
}

const HubReleasesContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const ReleaseImage = styled.img`
  max-width: 250px;
`;

export default HubReleases;
