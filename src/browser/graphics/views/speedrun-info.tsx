import type { Speedruncom } from '../../../types/schemas';
import { render } from '../../render';
import { useReplicant } from '@nodecg/react-hooks';

const App = () => {
  const [speedruncom] = useReplicant<Speedruncom>('speedruncom', { bundle: 'nodecg-speedruncom' });

  return (
    <div id="container">
      <p>Title: {speedruncom?.gameName}</p>
      <p>Category: {speedruncom?.categoryName}</p>
      <p>World Record: {speedruncom?.completeTime}</p>
    </div>
  );
};

render(<App />);
