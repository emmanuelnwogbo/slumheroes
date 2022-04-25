import React from 'react';

interface Props {
  
}

interface State {
  
}

const defaultState: State = {
  
};

export default class MobileStory extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = defaultState;
  }

  render() {
    return (
      <>
      <div className="mobilestory">
      <div className="mobilestory__text">
          <div className="mobilestory__text--para">
             <p>Slum heroes is a collection of 10000 randomly generated NFTs. Our goal is to create onchain and IRL( in real life) social impact. We are set to prove that web3 can indeed change the dynamics of the world as we see.</p>
          </div>
        </div>
        <div className="mobilestory__text">
          <h2 className="mobilestory__text--h2">the story begins</h2>
          <div className="mobilestory__text--para">
            <p>Within Chess in Slums, the meaning of growth has changed over the course of our history. A business poised for growth may find its humble beginnings in a garage, but it can not live there forever. A non-profit achieves its goals not by defining itself through limitation, but by pushing the boundaries of what is possible... </p>
          </div>
          <span className="mobilestory__learnmore">
            <button>Learn more</button>
          </span>
        </div>
        <div className="mobilestory__photo">
          <figure>
              <img src="/build/images/Rectanglestory.png"/>
          </figure>
          <figure>
              <img src="/build/images/boywithtrophy.svg"/>
          </figure>
        </div>
      </div>
      </>
    );
  }
}