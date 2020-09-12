import React from 'react';
import { format } from 'date-fns';
import { Link } from 'react-router-dom';
import MarkdownPreview from '@uiw/react-markdown-preview';
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
    description,
    slug,
    full,
    body,
  } = props;

  const source = ` 
 # English-for-kids
Application  for learning English by children

## Критерии оценки:
**Максимальный балл за задание: 170 баллов при кросс-чеке / 200 баллов при проверке ментором**   

## Basic scope +50/+80  

- **Вёрстка, дизайн, UI главной страницы приложения: (+10)**
  - [ ] присутствуют все указанные в задании элементы как на мобильной, так и на десктопной версии
  - [ ] выполнены требования к оформлению приложения 
`;

  // function Demo() {
  //   return ;
  // }

  const bodyContent = full ? (
    <section className={articleClass.body}>
      <MarkdownPreview source={source} />
    </section>
  ) : null;
  const createDate = format(new Date(createdAt), 'MMMMd,y');
  const tagButtons = tagList.map((tag) => (
    <Button key={tag} className="tag">
      {tag}
    </Button>
  ));
  return (
    <div className={articleClass.wrapper}>
      <header className={articleClass.header}>
        <h2 className={articleClass.h2}>
          <Link to={`/articles/${slug}`}>{title}</Link>
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
      <section className={articleClass.description}>
        <span>{description}</span>
      </section>
      {bodyContent}
    </div>
  );
};

export default Article;
