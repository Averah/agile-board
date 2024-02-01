import { Box, Button, Grid, Paper, Typography } from "@mui/material";
import { observer } from "mobx-react-lite";
import { useCallback, useState } from "react";
import { DragDropContext, Droppable } from "react-beautiful-dnd";
import { useStore } from "../../hooks/useStore";
import Column from "./Column";
import NewTaskForm from "./NewTaskForm";


const getListStyle = isDraggingOver => ({
    background: isDraggingOver ? 'lightblue' : 'lightgrey',
    padding: 8,
    minHeight: 500,
});


function Dashboard() {
    const { boards } = useStore();
    const [newTask, setNewTask] = useState(null);

    const onDragEnd = useCallback((event) => {
        const { source, destination, draggableId: taskId } = event;
        boards.active.moveTask(taskId, source, destination);

    }, [boards]);

    const addNewTask = (sectionId) => {
        setNewTask(sectionId)
    }

    const closeForm = useCallback(() => {
        setNewTask(null)
    }, [setNewTask])

    return (
        <Box p={2}>
            <DragDropContext onDragEnd={onDragEnd}>
                <Grid container spacing={3}>
                    {boards?.active?.sections.map(section => {
                        return (
                            <Grid item key={section.id} xs>
                                <Paper>
                                    <Box p={1} display="flex" alignItems="center" justifyContent="space-between">
                                        <Typography variant="h5">{section?.title}</Typography>
                                        <Button varian="outlined" color="primary" onClick={() => addNewTask(section.id)}>
                                            Add Task
                                        </Button>

                                    </Box>
                                    <Droppable droppableId={section.id}>
                                        {(provided, snapshot) => (
                                            <div {...provided.droppableProps} ref={provided.innerRef} style={getListStyle(snapshot.isDraggingOver)}>
                                                <Column section={section} />
                                                {provided.placeholder}
                                            </div>
                                        )}

                                    </Droppable>
                                </Paper>
                            </Grid>
                        )
                    })}
                </Grid>
            </DragDropContext>
            <NewTaskForm open={!!newTask} handleClose={closeForm} activeSection={newTask} />
        </Box>
    )
}

export default observer(Dashboard)