import React from 'react';

interface Props {
  
}

interface State {
  
}

const defaultState: State = {
  
};

export default class MobileJumbotron extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = defaultState;
  }

  render() {
    return (
      <>
      <div className="mobilejumbotron">
        <div className="mobilejumbotron__header">
          <h1>slum heroes</h1>
        </div>
        <div className="mobilejumbotron__nftsample">
            <figure>
              <img src="/build/images/Rectangle.png"/>
            </figure>
            <figure>
              <img src="/build/images/nftpreview.svg"/>
            </figure>
        </div>
        <div className="mobilestory__text--para">
             <p>Slum heroes is a collection of 10000 randomly generated NFTs. Our goal is to create onchain and IRL( in real life) social impact. We are set to prove that web3 can indeed change the dynamics of the world as we see.</p>
          </div>
          
        <div className="mobilejumbotron__learnmore">
          <button>Learn more</button>
        </div>
      </div>
      </>
    );
  }
}