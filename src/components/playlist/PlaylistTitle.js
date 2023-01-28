import React, { useState, useRef, useEffect } from 'react';

import useToken from '../../hooks/useToken';

import { putPlaylistName } from '../../services/playlistsApi';

import PageTitle from '../../styles/playlistPage/PageTitle';

const EditableInput = props => {
  const token = useToken();
  const playlistId = props.playlistId;
  const inputRef = useRef(null);
  const [inputVisible, setInputVisible] = useState(false);
  const [text, setText] = useState(props.text);

  function onClickOutSide(e) {
    if (inputRef.current && !inputRef.current.contains(e.target)) {
      const body = {
        name: text,
      };
      putPlaylistName({ token, playlistId, body });
      setInputVisible(false);
    }
  }

  useEffect(() => {
    if (inputVisible) {
      document.addEventListener('mousedown', onClickOutSide);
    }

    return () => {
      document.removeEventListener('mousedown', onClickOutSide);
    };
  });

  return (
    <PageTitle>
      {inputVisible ? (
        <input
          ref={inputRef}
          value={text}
          onChange={e => {
            setText(e.target.value);
          }}
        />
      ) : (
        <span onClick={() => setInputVisible(true)}>{text}</span>
      )}
    </PageTitle>
  );
};

export default EditableInput;

