import React from "react";
import {Navigate, Route, Routes} from "react-router-dom";
import {
	AUTH_ROUTE,
	HOME_ROUTE,
	PROFILE_ROUTE,
	SETTINGS_ROUTE,
	SIGNUP_ROUTE,
	TASK_ROUTE,
	TASKS_ROUTE
} from "@utils/constants/routes";
import HomePage from "@views/Home/HomePage/HomePage";
import AuthPage from "@views/Auth/AuthPage/AuthPage";
import TasksPage from "@views/Tasks/TasksPage/TasksPage";
import ProfilePage from "@views/Profile/ProfilePage/ProfilePage";
import SettingsPage from "@views/Settings/SettingsPage/SettingsPage";
import TaskPage from "@views/Task/TaskPage/TaskPage";
import {useSelector} from "react-redux";
import {RootState} from "@store/index";

const AppRouter = () => {
	const isAuth = useSelector((state: RootState) => state.authState.isAuth);

	if (isAuth) {
		return (
			<Routes>
				<Route path={HOME_ROUTE} element={<HomePage />} />
				<Route path={SIGNUP_ROUTE} element={<AuthPage />} />
				<Route path={AUTH_ROUTE} element={<AuthPage />} />
				<Route path={TASKS_ROUTE} element={<TasksPage />} />
				<Route path={PROFILE_ROUTE} element={<ProfilePage />} />
				<Route path={SETTINGS_ROUTE} element={<SettingsPage />} />
				<Route path={TASK_ROUTE} element={<TaskPage />} />
				<Route path="*" element={<Navigate to={HOME_ROUTE} />} />
			</Routes>
		);
	}

	return (
		<Routes>
			<Route path={HOME_ROUTE} element={<HomePage />} />
			<Route path={SIGNUP_ROUTE} element={<AuthPage />} />
			<Route path={AUTH_ROUTE} element={<AuthPage />} />
			<Route path={TASKS_ROUTE} element={<TasksPage />} />
			<Route path={TASK_ROUTE} element={<TaskPage />} />
			<Route path="*" element={<Navigate to={HOME_ROUTE} />} />
		</Routes>
	);
};

export default AppRouter;
