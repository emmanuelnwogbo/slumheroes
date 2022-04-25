import React from 'react';

interface Props {
  
}

interface State {

}

const defaultState: State = {
  
};

export default class Jumbotron extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = defaultState;
  }

  render() {
    return (
      <>
        <div className="jumbotron">
          <div className="jumbotron__left">
            <h2 className="jumbotron__left--h2">slum heroes</h2>
            <span className="jumbotron__left--paragraph">
              <p>
              Slum heroes is a collection of 10000 randomly generated NFTs. Our goal is to create onchain and IRL( in real life) social impact. We are set to prove that web3 can indeed change the dynamics of the world as we see.
              </p>
            </span>
            <div className="jumbotron__left--btns">
              <button className="jumbotron__left--learnmorebtn">Learn more</button>
            </div>
          </div>
          <div className="jumbotron__right">
            <figure>
              <img src="/build/images/Rectangle.svg"/>
            </figure>
            <figure>
              <img src="/build/images/nftpreview.svg"/>
            </figure>
          </div>
        </div>
      </>
    );
  }
}