import {render} from "../../render";
import {
	Button,
	createTheme,
	CssBaseline,
	TextField,
	ThemeProvider,
} from "@mui/material";
import {Announce} from "../../../types/schemas";
import {useState} from "react";
import {useReplicant} from "@nodecg/react-hooks";

const theme = createTheme();

const App = () => {
	const [announce, setAnnounce] = useReplicant<Announce>("announce");
	const [text, setText] = useState<string>("");

	return (
		<ThemeProvider theme={theme}>
			<div style={{display: "flex"}}>
				<TextField
					label='情報を入力'
					variant='filled'
					onChange={(event) => setText(event.target.value)}
				></TextField>
				<Button
					onClick={() => {
						setAnnounce(text);
					}}
					variant='contained'
				>
					Update
				</Button>
			</div>
			<h3 style={{margin: 0}}>表示中の情報</h3>
			<div>{announce}</div>
		</ThemeProvider>
	);
};

render(
	<>
		<CssBaseline />
		<App />
	</>,
);
