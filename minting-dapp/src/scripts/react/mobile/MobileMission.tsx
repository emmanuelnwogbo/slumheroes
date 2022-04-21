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
              <p>Phase 1</p>
            </div>
            <figure className="mobilemission__item--fig">
              <img src="/build/images/unsplash.png"/>
            </figure>
            <div className="mobilemission__item--paragraph">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam placerat hendrerit a maximus augue porttitor.
              </p>
            </div>  
          </div>
          <div className="mobilemission__item">
            <div className="mobilemission__item--header">
              <p>Phase 2</p>
            </div>
            <figure className="mobilemission__item--fig">
              <img src="/build/images/unsplash.png"/>
            </figure>
            <div className="mobilemission__item--paragraph">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam placerat hendrerit a maximus augue porttitor.
              </p>
            </div>  
          </div>
          <div className="mobilemission__item">
            <div className="mobilemission__item--header">
              <p>Phase 3</p>
            </div>
            <figure className="mobilemission__item--fig">
              <img src="/build/images/unsplash.png"/>
            </figure>
            <div className="mobilemission__item--paragraph">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam placerat hendrerit a maximus augue porttitor.
              </p>
            </div>  
          </div>
          <div className="mobilemission__item">
            <div className="mobilemission__item--header">
              <p>Phase 4</p>
            </div>
            <figure className="mobilemission__item--fig">
              <img src="/build/images/unsplash.png"/>
            </figure>
            <div className="mobilemission__item--paragraph">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam placerat hendrerit a maximus augue porttitor.
              </p>
            </div>  
          </div>
        </div>
      </div>
      </>
    );
  }
}