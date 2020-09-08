import React from 'react';
import { connect, ConnectedProps } from 'react-redux';
import * as action from '../store/actions/actions';
import { TempState } from '../types';

function mapStateToProps(state: TempState) {
  const { Temp } = state;

  return {
    Temp,
  };
}

const mapDispatch = action;
const connector = connect(mapStateToProps, mapDispatch);

type PropsFromRedux = ConnectedProps<typeof connector>;
type Props = PropsFromRedux;

const TempComponent: React.FC<Props> = (props) => {
  return <div />;
};

export default connector(TempComponent);
