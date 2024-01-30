import { types } from "mobx-state-tree";

const Task = types.model('Task', {
    id: types.identifier,
    title: types.string,
    description: types.string,
    assignee: types.string,
})

const BoardSection = types.model('BoardSection', {
    id: types.identifier,
    title: types.string,
    tasks: types.array(Task),
})

const Board = types.model('Board', {
    id: types.identifier,
    title: types.string,
    sections: types.array(BoardSection),
})

const BoardStore = types.model('BoardStore', {
    boards: types.array(Board),
});

export default BoardStore;