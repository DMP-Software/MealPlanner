import React, { useState, ChangeEvent } from 'react';
import TextField from '@material-ui/core/TextField';

import './addRecipeForm.scss';

export const AddRecipeForm: React.FunctionComponent = () => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');

  const handleNameChange = (e: ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const handleDescriptionChange = (e: ChangeEvent<HTMLInputElement>) => {
    setDescription(e.target.value);
  };

  return (
    <form className="add-recipe-form">
      <TextField
        className="add-recipe-form__input"
        fullWidth={true}
        margin="normal"
        label="Recipe name"
        value={name}
        onChange={handleNameChange}
      />
      <TextField
        className="add-recipe-form__input"
        fullWidth={true}
        margin="normal"
        label="Description"
        multiline={true}
        rowsMax="20"
        value={description}
        onChange={handleDescriptionChange}
      />
    </form>
  );
};
