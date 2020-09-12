import { State, Actions, ActionsGetType } from '../../types';



const initialState: State = {
  articles: [],
  articlesCount: 0
};

export default function reducer(state: State = initialState, action: ActionsGetType): State {
  switch (action.type) {

    case Actions.getArticles: {
      const { articles, articlesCount } = action.payload
      return { ...state, articles, articlesCount }
    }

    default: return state;
  }
}


