import React, { useState } from 'react';
import { format } from 'date-fns';
import { Link, useHistory } from 'react-router-dom';
import { connect, ConnectedProps } from 'react-redux';
import ReactMarkdown from 'react-markdown';
import { useCookies } from 'react-cookie';
import articleClass from './Article.module.scss';
import { ArticleType, State } from '../../types';
import { deleteArticleRequest, setFavoriteArticle, deleteFavoriteArticle } from '../../services/serviceAPI';
import exclamationImg from '../../img/deleteBlog.png';

function mapStateToProps(state: State) {
  const { user } = state;
  return {
    user,
  };
}

const connector = connect(mapStateToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;
type Props = PropsFromRedux;

const Article: React.FC<ArticleType & Props> = ({
  title,
  author: { username, image },
  createdAt,
  tagList,
  favoritesCount,
  favorited,
  description,
  slug,
  full,
  body,
  user,
}) => {
  const [isModalDelete, setIsModalDelete] = useState(false);
  const [cookies] = useCookies(['token']);
  const [currentLikes, setCurrentLikes] = useState({ favoritesCount, favorited });

  const history = useHistory();

  const deleteArticle = () => {
    deleteArticleRequest(slug, cookies.token)
      .then(() => {
        history.push('./?page=1');
      })
      .catch((err) => console.log(err));
  };

  const addDeleteLikes = () => {
    if (cookies.token === undefined) return;
    if (currentLikes.favorited) {
      deleteFavoriteArticle(cookies.token, slug)
        .then((value) => {
          setCurrentLikes({
            favoritesCount: value.article.favoritesCount,
            favorited: value.article.favorited,
          });
        })
        .catch((err) => console.log(err));
    } else {
      setFavoriteArticle(cookies.token, slug)
        .then((value) => {
          setCurrentLikes({
            favoritesCount: value.article.favoritesCount,
            favorited: value.article.favorited,
          });
        })
        .catch((err) => console.log(err));
    }
  };

  const bodyContent = full ? (
    <section className={articleClass.body}>
      <ReactMarkdown source={body} />
    </section>
  ) : null;

  const createDate = format(new Date(createdAt), 'MMMMd,y');
  const tagButtons = tagList.map((tag) => (
    <button key={tag} aria-label="tag" type="button" className={articleClass.tagButton}>
      {tag}
    </button>
  ));

  const modalDelete = isModalDelete ? (
    <div className={articleClass.modalWindow}>
      <span className={articleClass.textModal}>
        <img src={exclamationImg} alt="exclamation point" />
        Are you sure to delete this arcticle
      </span>
      <div className={articleClass.wrapperButtons}>
        <button type="button" className={articleClass.buttonModal} onClick={() => setIsModalDelete(false)}>
          No
        </button>
        <button type="button" className={articleClass.buttonModal} onClick={deleteArticle}>
          Yes
        </button>
      </div>
    </div>
  ) : null;

  const editButtons =
    user?.username === username && full ? (
      <div className={articleClass.buttonWrapper}>
        <button type="button" className={articleClass.delete} onClick={() => setIsModalDelete(true)}>
          DELETE
        </button>
        {modalDelete}
        <button type="button" className={articleClass.edit} onClick={() => history.push(`${slug}/edit`)}>
          Edit
        </button>
      </div>
    ) : null;

  const { likes, activeLikes, likesRegistration } = articleClass;
  let classLikes = currentLikes.favoritesCount === 0 ? [likes] : [likes, activeLikes];
  classLikes = cookies.token === undefined ? classLikes : [...classLikes, likesRegistration];

  return (
    <div className={articleClass.wrapper}>
      <header className={articleClass.header}>
        <h2 className={articleClass.h2}>
          <Link to={`/articles/${slug}`}>{title}</Link>
          <button type="button" aria-label="likes" className={classLikes.join(' ')} onClick={addDeleteLikes} />
          {currentLikes.favoritesCount}
          <br />
          {tagButtons}
        </h2>
        <div className={articleClass.infoUser}>
          <div>
            <h6 className={articleClass.h6}>{username}</h6>
            <span className={articleClass.span}>{createDate}</span>
          </div>
          <img src={image} alt="Avatar" />
        </div>
      </header>
      <section className={articleClass.description}>
        <span className={articleClass.descriptionText}>{description}</span>
        {editButtons}
      </section>
      {bodyContent}
    </div>
  );
};

export default connector(Article);

// http://localhost:3000/articles/hello-world-ssjni
