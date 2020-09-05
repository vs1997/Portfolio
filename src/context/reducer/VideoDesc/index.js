import { ADD_VIDEO_DESC } from '../../action/type';

const initialState = {
  videoTitle: '',
  videoDesc: '',
  videoSource: '',
};

const videoDescription = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case ADD_VIDEO_DESC:
      return {
        videoTitle: payload.videoTitle,
        videoDesc: payload.videoDesc,
        videoSource: payload.videoSource,
      };

    default:
      return state;
  }
};

export default videoDescription;
