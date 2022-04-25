import React from 'react';

interface Props {
  
}

interface State {

}

const defaultState: State = {
  
};

export default class Story extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = defaultState;
  }

  render() {
    return (
      <>
        <div className="story">
          <h2 className="story__h2">the story begins</h2>
          <div className="story__content">
            <div className="story__contentleft">
              <figure>
                <img src="/build/images/storyrectangle.svg"/>
              </figure>
              <figure>
                <img src="/build/images/boywithtrophy.svg"/>
              </figure>
            </div>
            <div className="story__contentright">
              <p>Within Chess in Slums, the meaning of growth has changed over the course of our history. A business poised for growth may find its humble beginnings in a garage, but it can not live there forever. A non-profit achieves its goals not by defining itself through limitation, but by pushing the boundaries of what is possible... </p>
              <span className="story__contentright--btn">
                <button className="story__contentright--learnmorebtn">Learn more</button>
              </span>
            </div>
          </div>
        </div>
      </>
    );
  }
}