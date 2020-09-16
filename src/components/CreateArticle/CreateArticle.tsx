import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { connect, ConnectedProps } from 'react-redux';
import { useCookies } from 'react-cookie';
import { Button } from 'antd';
import { useForm } from 'react-hook-form';
import createArticleClass from './CreateArticle.module.scss';
import FormAddTags from './FormAddTags';
import { CreateArticleBody, FormDataArticle, FormDataTags, State } from '../../types';
import * as actions from '../../store/actions/actions';
import { getUser } from '../../services/serviceAPI';
import { InputFormCreateArticleProps, InputFormTag } from './config';
import InputForm from '../InputForm/InputForm';

function mapStateToProps(state: State) {
  const { user } = state;
  return {
    user,
  };
}

const mapDispatch = actions;
const connector = connect(mapStateToProps, mapDispatch);

type PropsFromRedux = ConnectedProps<typeof connector>;
type Props = PropsFromRedux;

const CreateArticle: React.FC<Props> = ({ user, setUserAction }) => {
  const { register, handleSubmit, errors } = useForm<FormDataArticle>({ mode: 'onChange' });
  const [tags, setTags] = useState<string[]>([]);
  // const [responseErrorObj, setResponseError] = useState<ErrorResponse>({});
  const [cookies, setCookie] = useCookies(['token']);
  const history = useHistory();

  const onSubmit = (data: FormDataArticle) => {
    const { title, description, body, tagList } = data;
    const reqBody: CreateArticleBody = {
      article: { title, description, body, tagList },
    };
    console.log(data, tags);
  };

  const contentInput = InputFormCreateArticleProps.map((input) => {
    const { rules, ...propsInput } = input;
    const propsInputWithError = { ...propsInput, errors };
    return <InputForm {...propsInputWithError} ref={register(rules)} />;
  });

  const addedTags = tags.map((item) => (
    <div key={item} className={createArticleClass.wrapperTag}>
      <InputForm value={item} type="text" readOnly name="" style={{ width: '300px' }} />
      <button
        type="button"
        className={createArticleClass.deleteTag}
        onClick={() => setTags(tags.filter((tag) => tag !== item))}
      >
        DELETE
      </button>
    </div>
  ));

  return (
    <div className={createArticleClass.wrapper}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <h2 className={createArticleClass.title}>Create new article</h2>
        {contentInput}
        <h3 className={createArticleClass.titleTag}>Tag</h3>
        <Button className={createArticleClass.submit} type="primary" htmlType="submit">
          Send
        </Button>
      </form>
      <section className={createArticleClass.sectionTags}>
        {addedTags}
        <FormAddTags onAdd={(value) => setTags([...tags.filter((tag) => tag !== value), value])} />
      </section>
    </div>
  );
};

export default connector(CreateArticle);
