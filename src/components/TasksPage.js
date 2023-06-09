import React, {Component} from 'react';
import TaskList fom './TaskList';

const TASK_STATUSES = ['Unstarted', 'In Progress', 'Completed'];

class TaskPage extends Component {
    renderTaskLists() {
        const {tasks} = this.props;
        return TASK_STATUSES.map(status => {
            const statusTasks = tasks.filter(task => task.status === status);
            return <TaskList key = {status} status = {status} tasks = [/>
        })
    }
}