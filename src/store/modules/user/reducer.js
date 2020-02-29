import { produce } from 'immer';

const INITIAL_STATE = {
  profile: null,
};

export default function user(state = INITIAL_STATE, actions) {
  switch (actions.type) {
    case '@auth/SIGN_IN_SUCCESS': {
      const { user: profile } = actions.payload;

      return produce(state, draft => {
        draft.profile = profile;
      });
    }

    default:
      return state;
  }
}
