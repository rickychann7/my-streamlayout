import {
	Button,
	createTheme,
	CssBaseline,
	TextField,
	ThemeProvider,
} from "@mui/material";
import {render} from "../../render";
import {useState} from "react";

const theme = createTheme();

const App = () => {
	const [gameName, setGameName] = useState<string>("");
	const [categoryName, setCategoryName] = useState<string>("");

	return (
		<ThemeProvider theme={theme}>
			<div style={{display: "inline-flex"}}>
				<TextField
					variant='filled'
					label='ゲーム名'
					onChange={(event) => {
						setGameName(event.target.value);
					}}
				></TextField>
				<TextField
					variant='filled'
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
			<h3 style={{margin: 0}}>現在の情報</h3>
			<div style={{display: "inline"}}>
				<div>ゲーム名:{gameName}</div>
				<div>カテゴリ名:{categoryName}</div>
			</div>
		</ThemeProvider>
	);
};

render(
	<>
		<CssBaseline />
		<App />
	</>,
);
