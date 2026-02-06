import { createContext, useContext, useReducer } from "react";
import type { ReactNode } from "react";

export type Session = {
  id: string;
  title: string;
  summary: string;
  description: string;
  duration: number;
  date: string;
  image: string;
};

type SessionState = {
  upComingSessions: Session[];
};

type SessionContextValue = SessionState & {
  addSession: (session: Session) => void;
  cancelSession: (sessionId: string) => void;
};

const initialState: SessionState = {
  upComingSessions: []
}

export const SessionsContext = createContext<SessionContextValue | null>(
  null,
);

export function useSessionsContext() {
  const sessionsCtx = useContext(SessionsContext);

  if (sessionsCtx === null) {
    throw new Error("SessionsContext is null - that should not be the case!");
  }

  return sessionsCtx;
}

type SessionContextProviderProps = {
  children: ReactNode;
};

type AddSessionAction = {
  type: "ADD_SESSION";
  session: Session;
};

type CancelSessionAction = {
  type: "CANCEL_SESSION";
  sessionId: string;
};

type Action = AddSessionAction | CancelSessionAction;

function sessionsReducer(state: SessionState, action: Action) {
  if (action.type === "ADD_SESSION") {
    if (
      state.upComingSessions.some((session) => session.id === action.session.id)
    ) {
      return state;
    }
    return {
      ...state,
      upComingSessions: [...state.upComingSessions, action.session],
    };
  }

  if (action.type === "CANCEL_SESSION") {
    return {
      ...state,
      upComingSessions: state.upComingSessions.filter(
        (session) => session.id !== action.sessionId,
      ),
    };
  }

  return state;
}

export default function SessionsContextProvider({children}: SessionContextProviderProps) {
  const [sessionsState, dispatch] = useReducer(sessionsReducer, initialState);

  function addSession(session: Session) {
    dispatch({type: "ADD_SESSION", session })
  }

  function cancelSession(sessionId: string) {
    dispatch({type: "CANCEL_SESSION", sessionId})
  }

  const ctxValue = {
    upComingSessions: sessionsState.upComingSessions,
    addSession,
    cancelSession,
  };

  return (
    <SessionsContext.Provider value={ctxValue}>
      {children}
    </SessionsContext.Provider>
  );

}
