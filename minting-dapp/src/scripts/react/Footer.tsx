import React from 'react';

interface Props {
  
}

interface State {

}

const defaultState: State = {
  
};

export default class Footer extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = defaultState;
  }

  render() {
    return (
      <>
        <div className="footer">
          <div className="footer__left">
            <span><img src="/build/images/Instagram.svg" alt="" /></span>
            <span><img src="/build/images/Facebook.svg" alt="" /></span>
            <span><img src="/build/images/Twitter.svg" alt="" /></span>
          </div>
          <div className="footer__right">
            <p>Copyright 2022 Novus</p>
          </div>
        </div>
      </>
    );
  }
}