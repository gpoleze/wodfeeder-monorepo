import { PayloadAction } from "@reduxjs/toolkit";
import { connect } from "react-redux";
import { Dispatch } from "redux";

import { State } from "store/globalStates/type";
import {
    nameChanged,
    selectWorkoutName,
    WorkoutDispatchProps,
    WorkoutStateProps,
    descriptionChanged,
    selectWorkoutDescription,
    selectWorkoutObservations,
} from "views/Workout";
import Workout from "views/Workout/Workout.view";

const mapStateToProps = (state: State): WorkoutStateProps => ({
    workoutName: selectWorkoutName(state),
    workoutDescription: selectWorkoutDescription(state),
    workoutObservations: selectWorkoutObservations(state),
});

const mapDispatchToProps = (dispatch: Dispatch): WorkoutDispatchProps => ({
    setWorkoutName: (name: string): PayloadAction<string> => dispatch(nameChanged(name)),
    setWorkoutDescription: (description: string): PayloadAction<string> => dispatch(descriptionChanged(description)),
    setWorkoutObservations: (observatioins: string): PayloadAction<string> =>
        dispatch(descriptionChanged(observatioins)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Workout);
