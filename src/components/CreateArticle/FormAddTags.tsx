import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { connect, ConnectedProps } from 'react-redux';
import { useCookies } from 'react-cookie';
import { Button } from 'antd';
import { useForm } from 'react-hook-form';
import createArticleClass from './CreateArticle.module.scss';
import { CreateArticleBody, FormDataArticle, FormDataTags, State } from '../../types';
import * as actions from '../../store/actions/actions';
import { getUser } from '../../services/serviceAPI';
import { InputFormCreateArticleProps, InputFormTag } from './config';
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
    <form onSubmit={handleSubmit(addTags)} className={createArticleClass.wrapperTag}>
      <InputForm {...propsInputTagWithError} ref={register(rules)} />
      <button type="submit" className={createArticleClass.addTagButton}>
        Add tag
      </button>
    </form>
  );
};

export default FormAddTags;
