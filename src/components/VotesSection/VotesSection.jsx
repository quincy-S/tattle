import React from "react";
import StyledVotesSection from "./StyledVotesSection";
import { ArrowDown2, ArrowUp2 } from "iconsax-react";

const VotesSection = ({ handleDecrease, counter, handleIncrease }) => {
  return (
    <StyledVotesSection>
      <ArrowUp2 variant="Broken" onClick={handleIncrease} />
      {counter}
      <ArrowDown2 variant="Broken" onClick={handleDecrease} />
    </StyledVotesSection>
  );
};

export default VotesSection;
