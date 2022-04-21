import React from 'react';

interface Props {
  
}

interface State {

}

const defaultState: State = {
  
};

export default class MobileFooter extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = defaultState;
  }

  render() {
    return (
      <>
        <div className="mobilefooter">
          <div className="mobilefooter__left">
            <span><img src="/build/images/Instagram.svg" alt="" /></span>
            <span><img src="/build/images/Facebook.svg" alt="" /></span>
            <span><img src="/build/images/Twitter.svg" alt="" /></span>
          </div>
          <div className="mobilefooter__right">
            <p>Copyright 2022 Novus</p>
          </div>
        </div>
      </>
    );
  }
}