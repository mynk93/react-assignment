import * as types from 'constants';


/*
  To change view
  Params: {
    view: Path to change view to
  }
*/
export function changeView(view) {
  console.log("In Change View")
  return { 
    type: types.DUMMY,
    meta: {
      transition: () => ({
        path : view
      })
  }};
}

