import {Button, createTheme, TextField, ThemeProvider} from "@mui/material";
import {render} from "../../render";
import {useState} from "react";

const theme = createTheme({
	palette: {
		mode: "dark",
	},
});

const App = () => {
	const [gameName, setGameName] = useState<string>("");
	const [categoryName, setCategoryName] = useState<string>("");

	return (
		<ThemeProvider theme={theme}>
			<div style={{display: "inline-flex"}}>
				<TextField
					label='ゲーム名'
					onChange={(event) => {
						setGameName(event.target.value);
					}}
				></TextField>
				<TextField
					label='カテゴリ名'
					onChange={(event) => {
						setCategoryName(event.target.value);
					}}
				></TextField>
				<Button
					variant='contained'
					color='primary'
					onClick={() => {
						nodecg.sendMessage("updateSrcValue", [gameName, categoryName]);
					}}
				>
					更新
				</Button>
			</div>
			<div>
				{gameName},{categoryName}
			</div>
		</ThemeProvider>
	);
};

render(
	<>
		<App />
	</>,
);
