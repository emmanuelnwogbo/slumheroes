import React from 'react';

interface Props {
  
}

interface State {
  
}

const defaultState: State = {
  
};

export default class MobileMission extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = defaultState;
  }

  render() {
    return (
      <>
      <div className="mobilemission">
        <h2 className="mobilemission__h2">Mission/Roadmap</h2>
        <div className="mobilemission__items">
          <div className="mobilemission__item">
            <div className="mobilemission__item--header">
              <p>Social Impact</p>
            </div>
            <figure className="mobilemission__item--fig">
              <img src="/build/images/unsplash.png"/>
            </figure>
            <div className="mobilemission__item--paragraph">
              <p>
              Building and expanding the chess in a slum initiative to reach and change lives on a broader scale.
              </p>
            </div>  
          </div>
          <div className="mobilemission__item">
            <div className="mobilemission__item--header">
              <p>On-chain utility</p>
            </div>
            <figure className="mobilemission__item--fig">
              <img src="/build/images/unsplash.png"/>
            </figure>
            <div className="mobilemission__item--paragraph">
              <p>
              we would like to explore the use case of story telling and documentation on the blockchain. ( from comic books, animated series, technology for social change etc.)
              </p>
            </div>  
          </div>
          <div className="mobilemission__item">
            <div className="mobilemission__item--header">
              <p>Community</p>
            </div>
            <figure className="mobilemission__item--fig">
              <img src="/build/images/unsplash.png"/>
            </figure>
            <div className="mobilemission__item--paragraph">
              <p>
              We want to build a community of people that are willing to be a part of something big . A community of impact makers that believe in utilizing web3.0 for social change and good.
              </p>
            </div>  
          </div>
        </div>
      </div>
      </>
    );
  }
}