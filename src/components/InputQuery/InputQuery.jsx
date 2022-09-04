import { useState } from 'react';

import { StyledForm } from './inputQuery.styled.js';

export const InputQuery = ({ onSubmitFunc, valueQ }) => {
  const [query, setQuery] = useState(valueQ ?? '');

  const onHandleSubmit = e => {
    e.preventDefault();
    if (!query) return;

    onSubmitFunc(query);
    setQuery('');
  };

  return (
    <StyledForm onSubmit={onHandleSubmit}>
      <input
        type="text"
        value={query}
        placeholder="choose you movie"
        onChange={e => setQuery(e.target.value)}
      />
      <button type="submit">Find</button>
    </StyledForm>
  );
};