import {Button, Checkbox} from "@mui/material";

export const ItemMenu = (props: {index: number; text: string}) => {
	return (
		<div style={{display: "flex"}}>
			<Checkbox />
			<div>{props.text[props.index]}</div>
			<Button startIcon='Delete'></Button>
		</div>
	);
};
