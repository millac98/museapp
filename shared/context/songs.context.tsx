import { createContext, useReducer, useContext, useMemo } from "react";

type ActionTypes = 'saveSongs' | 'saveFavorites' | 'filterList' | 'removeFavorites';

type Action = { type: ActionTypes; payload: any; }

type SongsState = { 
  songs: any;
  favorites: any;
  sortedSongs: any;
  isSortedList: boolean;
}

type Dispatch = (action: Action) => void;

type SongsProviderProps = { children: React.ReactNode };

const SongsContext = createContext<
{ songsState: SongsState; dispatch: Dispatch; } | undefined>(undefined);


const initialState = {
  songs: [],
  favorites: [],
  sortedSongs: [],
  isSortedList: false,
};

const reducer = (state, action) => {
  const actions = {
    saveSongs: {
      ...state,
      songs: action.payload,
      sortedSongs: action.payload,
    },
    saveFavorites: {
      ...state,
      favorites: [...state.favorites, action.payload],
    },
    removeFavorites: {
      ...state,
      favorites: state.favorites.filter(item => item !== action.payload),
    },
    filterSongs: {
      ...state,
      sortedSongs: action.payload,
    },
    sortList: {
      ...state,
      isSortedList: action.payload,
    }
  };

  return actions[action.type] || state;

};

const SongsProvider = ({ children }: SongsProviderProps): JSX.Element => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const value = { state, dispatch };

  return (
    <SongsContext.Provider value={value}>
      {children}
    </SongsContext.Provider>
  );
};


const useSongs = (): any => {
  const context = useContext(SongsContext);
  if (context === undefined) {
    throw new Error('useSongs must be used within a SongsProvider');
  }

  return context;
};

export { SongsProvider, useSongs, SongsContext };


