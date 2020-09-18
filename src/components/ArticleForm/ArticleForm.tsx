import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { connect, ConnectedProps } from 'react-redux';
import { useCookies } from 'react-cookie';
import { Button, Spin } from 'antd';
import { useForm } from 'react-hook-form';
import articleFormClass from './ArticleForm.module.scss';
import FormAddTags from './FormAddTags';
import { ArticleType, ArticleFormBody, FormDataArticle, State } from '../../types';
import { createArticleRequest, getArticle, updateArticleRequest } from '../../services/serviceAPI';
import { InputFormCreateArticleProps } from './config';
import InputForm from '../InputForm/InputForm';

function mapStateToProps(state: State) {
  const { user } = state;
  return {
    user,
  };
}

const connector = connect(mapStateToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;
type Props = PropsFromRedux;

const ArticleForm: React.FC<Props> = () => {
  const { register, handleSubmit, errors } = useForm<FormDataArticle>({ mode: 'onChange' });
  const [tagList, setTagList] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);
  const [article, setArticle] = useState<ArticleType | null>(null);
  const [cookies] = useCookies(['token']);
  const history = useHistory();
  const { id } = useParams();

  if (cookies.token === undefined) history.push('/sign-in');

  useEffect(() => {
    setLoading(id);
    if (id) {
      getArticle(id)
        .then((value) => {
          setLoading(false);
          setArticle(value.article);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [id]);

  useEffect(() => {
    setTagList(article ? article.tagList : []);
  }, [article]);

  const onSubmit = (data: FormDataArticle) => {
    const { title, description, body } = data;
    const reqBody: ArticleFormBody = {
      article: { title, description, body, tagList },
    };

    if (id && article) {
      updateArticleRequest(reqBody, cookies.token, article.slug)
        .then((value) => {
          const { slug } = value.article;
          history.push(`/articles/${slug}`);
        })
        .catch((err) => console.log(err));
    } else {
      createArticleRequest(reqBody, cookies.token)
        .then((value) => {
          const { slug } = value.article;
          history.push(`/articles/${slug}`);
        })
        .catch((err) => console.log(err));
    }
  };

  const contentInput = InputFormCreateArticleProps.map((input) => {
    let defaultValue: string | undefined;
    switch (input.name) {
      case 'title':
        defaultValue = article?.title;
        break;
      case 'description':
        defaultValue = article?.description;
        break;
      case 'body':
        defaultValue = article?.body;
        break;
      default:
        break;
    }
    const { rules, ...propsInput } = input;
    const propsInputWithError = { ...propsInput, errors, defaultValue };
    return <InputForm {...propsInputWithError} ref={register(rules)} />;
  });

  const addedTags = tagList.map((item) => (
    <div key={item} className={articleFormClass.wrapperTag}>
      <InputForm value={item} type="text" readOnly name="" style={{ width: '300px' }} />
      <button
        type="button"
        className={articleFormClass.deleteTag}
        onClick={() => setTagList(tagList.filter((tag) => tag !== item))}
      >
        DELETE
      </button>
    </div>
  ));

  return loading ? (
    <Spin className={articleFormClass.spin} tip="Loading..." />
  ) : (
    <div className={articleFormClass.wrapper}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <h2 className={articleFormClass.title}>Create new article</h2>
        {contentInput}
        <h3 className={articleFormClass.titleTag}>Tag</h3>
        <Button className={articleFormClass.submit} type="primary" htmlType="submit">
          Send
        </Button>
      </form>
      <section className={articleFormClass.sectionTags}>
        {addedTags}
        <FormAddTags onAdd={(value) => setTagList([...tagList.filter((tag) => tag !== value), value])} />
      </section>
    </div>
  );
};

export default connector(ArticleForm);
