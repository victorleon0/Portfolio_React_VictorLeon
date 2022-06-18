import { SAVE_COMMENT } from './CommentsActionsTypes';

export function saveComment(comment) {
  return {
    type: SAVE_COMMENT,
    payload: comment,
  };
}

