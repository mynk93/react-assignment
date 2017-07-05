import * as types from 'constants';


/*
  To change view
  Params: {
    view: Path to change view to
  }
*/
export function changeView(view) {
  return { 
    type: types.DUMMY,
    meta: {
      transition: () => ({
        path : view
      })
  }};
}

