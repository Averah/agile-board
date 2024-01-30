import { types } from "mobx-state-tree";
import BoardStore from "./board";
import UsersStore from "./users";

const RootStore = types.model('RootStore', {
    users: UsersStore,
    boards: BoardStore,
})

export default RootStore;