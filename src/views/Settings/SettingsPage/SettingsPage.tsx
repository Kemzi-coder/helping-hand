import React, {FC} from "react";
import Typography from "@components/Typography/Typography";
import classNames from "classnames";
import {Outlet} from "react-router-dom";
import SettingsTabs from "@views/Settings/SettingsTabs/SettingsTabs";
import styles from "./SettingsPage.module.scss";

const SettingsPage: FC = () => (
	<div className="page">
		<div className="container container--small">
			<Typography className={styles.title} variant="h2" component="h2">
				Налаштування
			</Typography>
			<div className={styles.inner}>
				<SettingsTabs />
				<div className={classNames("wrapper", styles.wrapper)}>
					<Outlet />
				</div>
			</div>
		</div>
	</div>
);

export default SettingsPage;
