import { Box, Grid, Paper, Typography } from "@mui/material";
import { observer } from "mobx-react-lite";
import { DragDropContext, Droppable } from "react-beautiful-dnd";
import { useStore } from "../../hooks/useStore";
import Column from "./Column";


const getListStyle = isDraggingOver => ({
    background: isDraggingOver ? 'lightblue' : 'lightgrey',
    padding: 8,
    minHeight: 500,
});


function Dashboard() {
    const { boards } = useStore();
    return (
        <Box p={2}>
            <DragDropContext onDragEnd={() => { }}>
                <Grid container spacing={3}>
                {boards?.active?.sections.map(section => {
                        return (
                            <Grid item key={section.id} xs>
                                <Paper>
                                    <Box p={1} display="flex" alignItems="center" justifyContent="center">
                                        <Typography variant="h5">{section?.title}</Typography>

                                    </Box>
                                    <Droppable droppableId={section.id}>
                                        {(provided, snapshot) => (
                                            <div {...provided.droppableProps} ref={provided.innerRef} style={getListStyle(snapshot.isDraggingOver)}>
                                                <Column section={section}/>
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
        </Box>
    )
}

export default observer(Dashboard)