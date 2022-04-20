import React from 'react';

interface Props {
  
}

interface State {

}

const defaultState: State = {
  
};

export default class CoreTeam extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = defaultState;
  }

  render() {
    return (
      <>
        <div className="coreteam">
          <div className="coreteam__title">
            <h2 className="coreteam__title--h2">core team</h2>
          </div>
          <div className="coreteam__items">
            <div className="coreteam__item">
              <figure>
              <img src="/build/images/unsplash.png"/>
              </figure>
              <span className="coreteam__item--labels">
                <p></p>
                <p>Creative Director</p>
              </span>
            </div>
            <div className="coreteam__item">
              <figure>
              <img src="/build/images/unsplash.png"/>
              </figure>
              <span className="coreteam__item--labels">
                <p></p>
                <p>Lead Dev</p>
              </span>
            </div>
            <div className="coreteam__item">
              <figure>
              <img src="/build/images/unsplash.png"/>
              </figure>
              <span className="coreteam__item--labels">
                <p></p>
                <p>Covener(Chess in the slums)</p>
              </span>
            </div>
            <div className="coreteam__item">
              <figure>
              <img src="/build/images/unsplash.png"/>
              </figure>
              <span className="coreteam__item--labels">
                <p></p>
                <p>Covener(Chess in the slums)</p>
              </span>
            </div>
          </div>
        </div>
      </>
    );
  }
}