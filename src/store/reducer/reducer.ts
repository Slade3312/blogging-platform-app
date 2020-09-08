import { TempState, TempActions } from '../../types';

const initialState: TempState = {
  Temp: true
};

export default function reducer(state: TempState = initialState, action: TempActions): TempState {
  switch (action.type) {

    default: return state;
  }
}


