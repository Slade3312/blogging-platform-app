import React from 'react';
import { useForm } from 'react-hook-form';
import articleFormClass from './ArticleForm.module.scss';
import { FormDataTags } from '../../types';
import { InputFormTag } from './config';
import InputForm from '../InputForm/InputForm';

const FormAddTags: React.FC<{ onAdd: (value: string) => void }> = ({ onAdd }) => {
  const { register, handleSubmit, errors, reset } = useForm<FormDataTags>({ mode: 'onChange' });

  const addTags = (data: FormDataTags) => {
    onAdd(data.tag);
    reset();
  };

  const { rules, ...propsInputTag } = InputFormTag;
  const propsInputTagWithError = { ...propsInputTag, errors };

  return (
    <form onSubmit={handleSubmit(addTags)} className={articleFormClass.wrapperTag}>
      <InputForm {...propsInputTagWithError} ref={register(rules)} />
      <button type="submit" className={articleFormClass.addTagButton}>
        Add tag
      </button>
    </form>
  );
};

export default FormAddTags;
