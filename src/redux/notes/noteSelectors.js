import { createSelector } from "reselect";

const selectNote = (state) => state.note;

export const selectAddedNote = createSelector(
  [selectNote],
  (note) => note.notes
);
