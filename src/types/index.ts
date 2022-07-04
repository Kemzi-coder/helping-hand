export interface ITask {
	title: string;
	tags: ITag[];
	description: string;
	creator: IUser;
	id: string;
	date: string;
	isActive: boolean;
}

export interface IAchieve {
	id: string;
	description: string;
}

export interface IUser {
	username: string;
	avatar: string;
}

export interface ITag {
	id?: string;
	text: string;
}

export interface IStat {
	value: number | string;
	title: string;
}

export interface IconProps {
	className?: string;
	width?: number;
	height?: number;
}

export interface ISlide {
	id: number;
	title: string;
	text: string;
	buttonText?: string;
	buttonPath?: string;
}

export interface ITheme {
	name: string;
	styles: {[key: string]: string};
}

export type PrimaryColor = "" | "lighter" | "light";
