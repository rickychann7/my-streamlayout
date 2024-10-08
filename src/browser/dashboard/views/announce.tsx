import {render} from "../../render";
import {Box, Button, TextField} from "@mui/material";
import {Announce} from "../../../types/schemas";
import {useState} from "react";
import {useReplicant} from "@nodecg/react-hooks";

const App = () => {
	const [announce, setAnnounce] = useReplicant<Announce>("announce");
	const [text, setText] = useState<string>("");

	return (
		<div id='container'>
			<TextField
				onChange={(event) => setText(event.target.value)}
				label='Text'
				variant='outlined'
				sx={{
					"& .MuiOutlinedInput-root": {
						"& fieldset": {
							borderColor: "lightblue",
						},
					},
				}}
			></TextField>
			<Box sx={{display: "flex", gap: 1}}>
				<Button
					onClick={() => {
						setAnnounce(text);
					}}
					variant='contained'
				>
					Update
				</Button>
				<div style={{fontSize: "0.8em"}}>{announce}</div>
			</Box>
		</div>
	);
};

render(<App />);
