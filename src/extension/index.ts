import type NodeCG from '@nodecg/types';
import { announce } from './announce';

export default (nodecg: NodeCG.ServerAPI) => {
  nodecg.log.info('NodeCG server is started!');
  announce(nodecg);
};
