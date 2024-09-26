import { useReplicant } from '@nodecg/react-hooks';
import type { Speedruncom } from '../../../types/schemas';
import { useEffect, useState } from 'react';
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { Announce } from '../../../types/schemas';

export const InformationFader = () => {
  const [announce] = useReplicant<Announce>("announce");
  const [speedruncom] = useReplicant<Speedruncom>("speedruncom", {bundle: "nodecg-speedruncom"});
  const categoryInfo = speedruncom?.categoryName +" 世界記録: " + speedruncom?.completeTime;
  const footerInformation = [categoryInfo, announce]
  const [infoIndex, setInfoIndex] = useState(0);

  useEffect(() => {
    const interval =setInterval(() => {
      setInfoIndex((prevIndex) => (prevIndex +1) % footerInformation.length);
    }, 30000);
    return () => clearInterval(interval);
  }, []);

  return (
    <TransitionGroup>
      <CSSTransition key={infoIndex} timeout={500} classNames="fade">
        <div className="fade-container">{footerInformation[infoIndex]}</div>
      </CSSTransition>
    </TransitionGroup>
  );
};