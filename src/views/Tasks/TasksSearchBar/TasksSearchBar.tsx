import React, {FC, memo, useState} from "react";
import SearchBar from "@components/SearchBar/SearchBar";
import styles from "../TasksPage/TasksPage.module.scss";
import useAppDispatch from "../../../hooks/useAppDispatch";
import TasksService from "../../../services/tasks/tasks.service";

interface TasksSearchBarProps {
	page: number;
	limit: number;
	isFetching: boolean;
}

const TasksSearchBar: FC<TasksSearchBarProps> = memo(
	({page, limit, isFetching}) => {
		const dispatch = useAppDispatch();
		const [value, setValue] = useState("");

		const handleChange = (val: string) => setValue(val);

		const handleClear = () => {
			setValue("");
			dispatch(TasksService.search({page, limit, search: ""}));
		};

		const handleSearch = () => {
			dispatch(
				TasksService.search({page, limit, search: value.toLowerCase().trim()})
			);
		};

		return (
			<SearchBar
				onClear={handleClear}
				isDisabled={isFetching}
				className={styles.search}
				onChange={handleChange}
				onSearch={handleSearch}
				value={value}
			/>
		);
	}
);

export default TasksSearchBar;
