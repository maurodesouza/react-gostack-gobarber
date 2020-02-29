import { produce } from 'immer';

const INITIAL_STATE = {
  token: null,
  signed: false,
  loading: false,
};

export default function auth(state = INITIAL_STATE, actions) {
  switch (actions.type) {
    case '@auth/SIGN_IN_SUCCESS': {
      const { token } = actions.payload;

      return produce(state, draft => {
        draft.token = token;
        draft.signed = true;
      });
    }

    default:
      return state;
  }
}
