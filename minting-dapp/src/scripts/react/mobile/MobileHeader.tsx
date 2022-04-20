import React from 'react';

interface Props {
  
}

interface State {

}

const defaultState: State = {
  
};

export default class MobileHeader extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = defaultState;
  }

  render() {
    return (
      <>
      <div className="mobileheader">
        <div className="mobileheader__left">
          <figure>
            <img src="/build/images/SlumHeroes.svg" alt="SVG as an image" />
          </figure>
        </div>
        <div className="mobileheader__right">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
      </>
    );
  }
}