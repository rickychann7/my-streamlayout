import { useReplicant } from '@nodecg/react-hooks';
import type { Speedruncom } from '../../../types/schemas';
import { useEffect, useState } from 'react';
import { CSSTransition, TransitionGroup } from "react-transition-group";

export const InformationFader = () => {
  const [speedruncom] = useReplicant<Speedruncom>("speedruncom", {bundle: "nodecg-speedruncom"});
  const categoryInfo = speedruncom?.categoryName +" 世界記録: " + speedruncom?.completeTime;
  const footerInformation = [categoryInfo, "スーパーマリオワールドRTA新人大会　参加者募集中！"]
  const [infoIndex, setInfoIndex] = useState(0);

  useEffect(() => {
    const interval =setInterval(() => {
      setInfoIndex((prevIndex) => (prevIndex +1) % footerInformation.length);
    }, 3000);
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