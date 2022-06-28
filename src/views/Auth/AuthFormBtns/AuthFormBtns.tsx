import React, {memo} from "react";
import Button from "@components/Button/Button";
import TelegramIcon from "@icons/TelegramIcon/TelegramIcon";
import GoogleIcon from "@icons/GoogleIcon/GoogleIcon";
import styles from "./AuthFormBtns.module.scss";

const AuthFormBtns = memo(() => (
	<div className={styles.btns}>
		<Button
			className={styles.btn}
			text="Google"
			variant="outline"
			startIcon={GoogleIcon}
		/>
		<Button
			className={styles.btn}
			text="Telegram"
			variant="outline"
			startIcon={TelegramIcon}
		/>
	</div>
));

export default AuthFormBtns;
