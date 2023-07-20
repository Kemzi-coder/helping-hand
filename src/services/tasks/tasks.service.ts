import {AppDispatch} from "@store/index";
import {
	addTasks,
	setHasMore,
	setIsCreating,
	setIsFetching as setTasksIsFetching,
	setPage,
	setTasks
} from "@store/tasks/tasks.slice";
import {CreateTaskArgs, TasksParams} from "@customTypes/services/tasks";
import {
	setIsFetching as setTaskIsFetching,
	setIsVoting,
	setTask,
	updateTask
} from "@store/task/task.slice";
import TasksAPI from "../../APIs/tasks/tasks.api";

class TasksService {
	static fetchAll({page, limit}: TasksParams) {
		return async (dispatch: AppDispatch) => {
			dispatch(setTasksIsFetching(true));
			try {
				const response = await TasksAPI.fetchAll({page, limit});
				const {tasks, totalPages, page: pageFromApi} = response.data;

				console.log(response);

				dispatch(setHasMore(pageFromApi < totalPages));

				dispatch(setTasks(tasks));
			} catch (e) {
				console.log(e);
			} finally {
				dispatch(setTasksIsFetching(false));
			}
		};
	}

	static fetchMore({page, limit, search}: TasksParams) {
		return async (dispatch: AppDispatch) => {
			dispatch(setTasksIsFetching(true));
			try {
				const response = await TasksAPI.fetchAll({page, limit, search});
				const {tasks, totalPages, page: pageFromApi} = response.data;

				console.log(response);

				dispatch(setHasMore(pageFromApi < totalPages));
				dispatch(setPage(pageFromApi));

				dispatch(addTasks(tasks));
			} catch (e) {
				console.log(e);
			} finally {
				dispatch(setTasksIsFetching(false));
			}
		};
	}

	static fetchLatest(id?: string) {
		return async (dispatch: AppDispatch) => {
			dispatch(setTasksIsFetching(true));
			try {
				const response = await TasksAPI.fetchLatest(id);
				const {tasks} = response.data;
				console.log(response);

				dispatch(setTasks(tasks));
			} catch (e) {
				console.log(e);
			} finally {
				dispatch(setTasksIsFetching(false));
			}
		};
	}

	static search({page, limit, search}: TasksParams) {
		return async (dispatch: AppDispatch) => {
			dispatch(setTasksIsFetching(true));
			try {
				const response = await TasksAPI.fetchAll({page, limit, search});
				const {tasks, totalPages, page: pageFromApi} = response.data;
				console.log(response);

				dispatch(setHasMore(pageFromApi < totalPages));

				if (pageFromApi === 1) {
					dispatch(setTasks(tasks));
				} else {
					dispatch(addTasks(tasks));
				}
			} catch (e) {
				console.log(e);
			} finally {
				dispatch(setTasksIsFetching(false));
			}
		};
	}

	static fetchOne(id: string) {
		return async (dispatch: AppDispatch) => {
			dispatch(setTaskIsFetching(true));
			try {
				const response = await TasksAPI.fetchOne(id);

				console.log(response);

				dispatch(setTask(response.data));
			} catch (e) {
				console.log(e);
			} finally {
				dispatch(setTaskIsFetching(false));
			}
		};
	}

	static createOne({
		title,
		text,
		tags,
		limit
	}: CreateTaskArgs & {limit: number}) {
		return async (dispatch: AppDispatch) => {
			dispatch(setIsCreating(true));
			try {
				const response = await TasksAPI.createOne({
					title,
					text,
					tags
				});
				console.log(response);
				dispatch(this.fetchAll({page: 1, limit}));
			} catch (e) {
				console.log(e);
			} finally {
				dispatch(setIsCreating(false));
			}
		};
	}

	static clear() {
		return (dispatch: AppDispatch) => {
			dispatch(setTasks([]));
			dispatch(setHasMore(false));
			dispatch(setPage(1));
		};
	}

	static upvote(id: string) {
		return async (dispatch: AppDispatch) => {
			dispatch(setIsVoting(true));
			try {
				const response = await TasksAPI.upvote(id);
				console.log(response);
				dispatch(updateTask(response.data));
			} catch (e) {
				console.log(e);
			} finally {
				dispatch(setIsVoting(false));
			}
		};
	}
}

export default TasksService;
