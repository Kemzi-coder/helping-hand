import React, {FC} from "react";
import {IconProps} from "@customTypes/components";
import classNames from "classnames";
import styles from "./GoogleIcon.module.scss";

const GoogleIcon: FC<IconProps> = ({height, width, className}) => (
	<svg
		className={classNames(className, styles.icon)}
		width={width || 24}
		height={height || 24}
		viewBox="0 0 24 24"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
	>
		<path
			d="M23.7687 9.75166C19.9275 9.74981 16.0864 9.75074 12.2452 9.75118C12.2457 11.3124 12.2434 12.8737 12.2462 14.4345C14.4707 14.434 16.6952 14.4335 18.9193 14.4345C18.6615 15.9306 17.7542 17.2987 16.4676 18.141C15.6588 18.6739 14.7295 19.0198 13.7714 19.1843C12.8072 19.3455 11.8109 19.3662 10.8491 19.1754C9.871 18.9841 8.93735 18.5848 8.12286 18.0219C6.82049 17.1252 5.82657 15.8134 5.31624 14.3369C4.79442 12.8352 4.79058 11.1643 5.31863 9.66397C5.68501 8.60656 6.29484 7.62978 7.09594 6.83488C8.08409 5.84357 9.36879 5.13491 10.7529 4.8443C11.9381 4.59637 13.1879 4.64369 14.3483 4.9877C15.3345 5.28114 16.2437 5.81074 16.9885 6.5077C17.7413 5.77416 18.4903 5.03643 19.2417 4.30153C19.6358 3.90596 20.05 3.5277 20.4317 3.12135C19.2905 2.08643 17.9527 1.25451 16.491 0.728614C13.8594 -0.220462 10.8917 -0.240606 8.24242 0.657938C5.25691 1.65955 2.71478 3.84743 1.3053 6.61281C0.814584 7.56569 0.456315 8.58276 0.241095 9.6289C-0.30034 12.2353 0.0770422 15.0143 1.30386 17.3883C2.10118 18.9378 3.24427 20.3153 4.63086 21.3952C5.93901 22.4174 7.46376 23.1725 9.0804 23.5939C11.1203 24.1301 13.2917 24.1179 15.3451 23.66C17.2008 23.2414 18.9566 22.3725 20.3585 21.1041C21.8403 19.7697 22.8973 18.0116 23.4569 16.1223C24.0672 14.0614 24.1513 11.8613 23.7687 9.75166Z"
			fill="#00D4C3"
		/>
	</svg>
);
export default GoogleIcon;
