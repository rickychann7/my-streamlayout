import type NodeCG from "@nodecg/types";
import type {Speedruncom} from "../types/schemas";
import {formatTime} from "./lib/formatTime";

export const speedrun = (nodecg: NodeCG.ServerAPI) => {
	const speedruncomRep = nodecg.Replicant(
		"speedruncom",
	) as unknown as NodeCG.ServerReplicantWithSchemaDefault<Speedruncom>;

	async function fetchSpeedrunComData(dataArray: string[]) {
		if (!dataArray) return;
		const game_name = dataArray[0];
		const category_name = dataArray[1];

		if (!game_name || !category_name) {
			("error");
		} else {
			speedruncomRep.value.gameName = game_name;
			speedruncomRep.value.categoryName = category_name;
			nodecg.log.info("fetching api data...");
			await fetch(
				"https://www.speedrun.com/api/v1/leaderboards/" +
					game_name +
					"/category/" +
					category_name.split(" ").join("_") +
					"?embed=players&top=1",
			)
				.then(async (response) => response.json())
				.then(async (apiData) => {
					//@ts-ignore
					const runData = apiData.data;
					const formattedTime: string = formatTime(
						runData.runs[0].run.times.primary_t,
					);
					speedruncomRep.value.completeTime = formattedTime;
				});

			nodecg.log.info(
				game_name +
					" - " +
					category_name +
					": " +
					speedruncomRep.value.completeTime,
			);
			nodecg.sendMessage("finishUpdateSrcValue");
		}
	}

	nodecg.listenFor("updateSrcValue", (data) => {
		fetchSpeedrunComData(data);
	});
};
