import React from "react";
import {InformationFader} from "./information";
import {Clock} from "./clock";
import heartrate from "../assets/heartrate.png";

export const Footer: React.FC = () => {
	return (
		<div className='footer'>
			<span className='left'>
				<InformationFader />
			</span>
			<span className='right'>
				<img
					src={heartrate}
					id='heartrate'
					style={{width: 32, height: 28, marginRight: 155}}
				/>
				<Clock />
			</span>
		</div>
	);
};
