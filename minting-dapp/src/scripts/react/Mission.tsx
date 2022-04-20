import React from 'react';

interface Props {
  
}

interface State {

}

const defaultState: State = {
  
};

export default class Mission extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = defaultState;
  }

  render() {
    return (
      <>
        <div className="mission">
          <h2 className="mission__h2">Mission/Roadmap</h2>
          <div className="mission__slides">
            <div className="mission__slide">
              <div className="mission__slideleft">
                <div className="mission__slideleft">
                  <h2>Phase 1</h2>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam placerat hendrerit a maximus augue porttitor.
                  </p>
                </div>
              </div>
              <div className="mission__slideright">
                <figure>
                  <img src="/build/images/unsplash.png"/>
                </figure>
              </div>
            </div>
            <div></div>
            <div></div>
            <div></div>
          </div>
          <div className="mission__slidearrow">
            <figure>
              <img src="/build/images/nextslide.svg"/>
            </figure>
          </div>
        </div>
      </>
    );
  }
}