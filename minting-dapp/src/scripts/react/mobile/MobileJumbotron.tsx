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
        <div className="mobilejumbotron__learnmore">
          <button>Learn more</button>
        </div>
      </div>
      </>
    );
  }
}