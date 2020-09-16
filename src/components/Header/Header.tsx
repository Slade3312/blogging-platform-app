import React, { useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { connect, ConnectedProps } from 'react-redux';
import { useCookies } from 'react-cookie';
import headerClass from './Header.module.scss';
import Button from '../Button/Button';
import { State } from '../../types';
import * as actions from '../../store/actions/actions';
import { getUser } from '../../services/serviceAPI';

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

const Header: React.FC<Props> = ({ user, setUserAction }) => {
  const [cookies, setCookie] = useCookies(['token']);
  const history = useHistory();

  const logOut = () => {
    setCookie('token', '', { maxAge: -1 });
    setUserAction(null);
    history.push('/');
  };

  useEffect(() => {
    if (cookies.token) {
      getUser(cookies.token)
        .then((value) => {
          setUserAction(value.user);
        })
        .catch((err) => console.log(err));
    }
  }, [cookies.token, setUserAction]);

  const RegisteredСontent = () => {
    if (user) {
      const { username } = user;
      let { image } = user;
      image = image === null ? ' https://static.productionready.io/images/smiley-cyrus.jpg ' : image;
      return (
        <>
          <div className={headerClass.infoUser}>
            <button type="button" className={headerClass.create}>
              Create article
            </button>
            <Link to="/profile" className={headerClass.link}>
              <h6 className={headerClass.h6}>{username}</h6>
              <img src={image} alt="Avatar" />
            </Link>
            <button type="button" className={headerClass.logOut} onClick={logOut}>
              Log Out
            </button>
          </div>
        </>
      );
    }
    return null;
  };

  const UnregisteredСontent = () => {
    return (
      <>
        <Link to="/sign-in">
          <Button className="sign">Sign-In</Button>
        </Link>
        <Link to="/sign-up">
          <Button className="sign">Sign-Up</Button>
        </Link>
      </>
    );
  };

  return (
    <div className={headerClass.wrapper}>
      <h2 className={headerClass.h2}>
        <Link to="/">Realworld Blog</Link>
      </h2>
      {user ? <RegisteredСontent /> : <UnregisteredСontent />}
    </div>
  );
};

export default connector(Header);
