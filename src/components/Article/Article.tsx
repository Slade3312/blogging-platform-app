import React from 'react';
import { format } from 'date-fns';
import articleClass from './Article.module.scss';
import { ArticleType } from '../../types';
import like from '../../img/Vector.png';
import Button from '../Button/Button';

const Article: React.FC<ArticleType> = (props) => {
  const {
    title,
    author: { username, image },
    createdAt,
    tagList,
    favoritesCount,
  } = props;
  const createDate = format(new Date(createdAt), 'MMMMd,y');
  const tagButtons = tagList.map((tag) => (
    <Button key={tag} className="tag">
      {tag}
    </Button>
  ));

  console.log(props);
  return (
    <div className={articleClass.wrapper}>
      <header className={articleClass.header}>
        <h2 className={articleClass.h2}>
          {title}
          <img src={like} alt="likes" />
          {favoritesCount}
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
    </div>
  );
};

export default Article;
