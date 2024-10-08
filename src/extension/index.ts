import type NodeCG from "@nodecg/types";
import {announce} from "./announce";
import {speedrun} from "./speedrun";

export default (nodecg: NodeCG.ServerAPI) => {
	nodecg.log.info("NodeCG server is started!");
	announce(nodecg);
	speedrun(nodecg);
};
