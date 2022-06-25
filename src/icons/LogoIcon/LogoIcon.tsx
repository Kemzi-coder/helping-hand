import React, {FC} from "react";
import {IconProps} from "@customTypes/index";
import classNames from "classnames";
import styles from "./LogoIcon.module.scss";

const LogoIcon: FC<IconProps> = ({width, height, className}) => (
	<svg
		className={classNames(className, styles.icon)}
		width={width || 79}
		height={height || 32}
		viewBox="0 0 79 32"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
	>
		<path
			d="M30.5004 12.0006H21.0004V15.5006C21.0004 17.9819 18.9817 20.0006 16.5004 20.0006C14.0192 20.0006 12.0004 17.9819 12.0004 15.5006V7.9006L7.9442 10.3381C6.73795 11.0569 6.00045 12.3631 6.00045 13.7631V16.7194L1.00045 19.6069C0.0441989 20.1569 -0.287051 21.3819 0.269199 22.3381L5.2692 31.0006C5.8192 31.9569 7.0442 32.2819 8.00045 31.7319L14.4629 28.0006H23.0004C25.2067 28.0006 27.0004 26.2069 27.0004 24.0006H28.0004C29.1067 24.0006 30.0004 23.1069 30.0004 22.0006V18.0006H30.5004C31.3317 18.0006 32.0005 17.3319 32.0005 16.5006V13.5006C32.0005 12.6694 31.3317 12.0006 30.5004 12.0006ZM39.7317 9.6631L34.7317 1.0006C34.1817 0.0443511 32.9567 -0.280649 32.0005 0.269351L25.5379 4.0006H19.1504C18.4004 4.0006 17.6692 4.2131 17.0317 4.60685L14.9379 5.9131C14.3504 6.2756 14.0004 6.91935 14.0004 7.60685V15.5006C14.0004 16.8819 15.1192 18.0006 16.5004 18.0006C17.8817 18.0006 19.0004 16.8819 19.0004 15.5006V10.0006H30.5004C32.4317 10.0006 34.0005 11.5694 34.0005 13.5006V15.2819L39.0005 12.3944C39.9567 11.8381 40.2817 10.6194 39.7317 9.6631Z"
			fill="#00D4C3"
		/>
		<path
			d="M61.644 9.4C61.776 9.4 61.89 9.448 61.986 9.544C62.082 9.64 62.13 9.754 62.13 9.886V21.514C62.13 21.646 62.082 21.76 61.986 21.856C61.89 21.952 61.776 22 61.644 22H57.936C57.804 22 57.69 21.952 57.594 21.856C57.498 21.76 57.45 21.646 57.45 21.514V17.68H53.85V21.514C53.85 21.646 53.802 21.76 53.706 21.856C53.61 21.952 53.496 22 53.364 22H49.656C49.524 22 49.41 21.958 49.314 21.874C49.218 21.778 49.17 21.658 49.17 21.514V9.886C49.17 9.754 49.218 9.64 49.314 9.544C49.41 9.448 49.524 9.4 49.656 9.4H53.364C53.496 9.4 53.61 9.448 53.706 9.544C53.802 9.64 53.85 9.754 53.85 9.886V13.576H57.45V9.886C57.45 9.754 57.498 9.64 57.594 9.544C57.69 9.448 57.804 9.4 57.936 9.4H61.644ZM76.937 9.4C77.069 9.4 77.183 9.448 77.279 9.544C77.375 9.64 77.423 9.754 77.423 9.886V21.514C77.423 21.646 77.375 21.76 77.279 21.856C77.183 21.952 77.069 22 76.937 22H73.229C73.097 22 72.983 21.952 72.887 21.856C72.791 21.76 72.743 21.646 72.743 21.514V17.68H69.143V21.514C69.143 21.646 69.095 21.76 68.999 21.856C68.903 21.952 68.789 22 68.657 22H64.949C64.817 22 64.703 21.958 64.607 21.874C64.511 21.778 64.463 21.658 64.463 21.514V9.886C64.463 9.754 64.511 9.64 64.607 9.544C64.703 9.448 64.817 9.4 64.949 9.4H68.657C68.789 9.4 68.903 9.448 68.999 9.544C69.095 9.64 69.143 9.754 69.143 9.886V13.576H72.743V9.886C72.743 9.754 72.791 9.64 72.887 9.544C72.983 9.448 73.097 9.4 73.229 9.4H76.937Z"
			fill="#00D4C3"
		/>
	</svg>
);

export default LogoIcon;