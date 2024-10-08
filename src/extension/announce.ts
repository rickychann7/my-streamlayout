import type NodeCG from "@nodecg/types";
import type {Announce} from "../types/schemas";

export const announce = (nodecg: NodeCG.ServerAPI) => {
	const announce = nodecg.Replicant<Announce>(
		"announce",
	) as unknown as NodeCG.ServerReplicantWithSchemaDefault<Announce>;

	announce.on("change", (newVal) => {
		nodecg.log.info("Announce updates: " + newVal);
	});
};
