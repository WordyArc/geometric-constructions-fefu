import {
    ABOUT_ROUTE,
    CHAT_ROUTE,
    HOME_ROUTE,
    INFO_ROUTE,
    LOGIN_ROUTE,
    TASK_ROUTE,
    TASKSPAGE_ROUTE
} from "./utils/consts";
import GraphicEditor from "./components/GraphicEditor/GraphicEditor";
import Task from "./components/Tasks/Task/Task";
import TasksPage from "./components/Tasks/TasksPage";
import Info from "./components/Info/Info";
import About from "./components/About/About";

export const privateRoutes = [
    {
        path: Task,
        Component: <Task/>
    }
]

export const publicRoutes = [
    {
        path: HOME_ROUTE,
        Component: <GraphicEditor/>
    },
    {
        path: INFO_ROUTE,
        Component: <Info/>
    },
    {
        path: TASKSPAGE_ROUTE,
        Component: <TasksPage/>
    },
    {
        path: ABOUT_ROUTE,
        Component: <About/>
    },
    {
        path: TASK_ROUTE,
        Component: <Task/>
    }
]

