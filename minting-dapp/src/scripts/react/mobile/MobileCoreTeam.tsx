import React from 'react';

interface Props {
  
}

interface State {

}

const defaultState: State = {
  
};

export default class MobileCoreTeam extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = defaultState;
  }

  render() {
    return (
      <>
        <div className="mobilecoreteam">
          <h2 className="mobilecoreteam__h2">Core Team</h2>
          <div className="mobilecoreteam__items">
            <div className="mobilecoreteam__item">
              <figure className="mobilecoreteam__item--fig">
                <img src="/build/images/unsplash.png"/>
              </figure>
              <span className="mobilecoreteam__item--labels">
                <p></p>
                <p>Creative Director</p>
              </span>
            </div>
            <div className="mobilecoreteam__item">
              <figure className="mobilecoreteam__item--fig">
                <img src="/build/images/unsplash.png"/>
              </figure>
              <span className="mobilecoreteam__item--labels">
                <p></p>
                <p>Lead Dev</p>
              </span>
            </div>
            <div className="mobilecoreteam__item">
              <figure className="mobilecoreteam__item--fig">
                <img src="/build/images/unsplash.png"/>
              </figure>
              <span className="mobilecoreteam__item--labels">
                <p></p>
                <p>Covener(Chess in the slums)</p>
              </span>
            </div>
            <div className="mobilecoreteam__item">
              <figure className="mobilecoreteam__item--fig">
                <img src="/build/images/unsplash.png"/>
              </figure>
              <span className="mobilecoreteam__item--labels">
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