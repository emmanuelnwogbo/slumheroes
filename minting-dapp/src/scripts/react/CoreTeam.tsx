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
                <img src="/build/images/samson.png"/>
              </figure>
              <span className="coreteam__item--labels">
                <div className="coreteam__item--name">
                  <p>Samson</p>
                  <a target="_blank" href="https://twitter.com/Kvngspice_">
                    <svg xmlns="http://www.w3.org/2000/svg" className=" fill-current stroke-current h-2 w-2 mr-1" viewBox="0 0 40 40"><path d="M38.526 8.625a15.199 15.199 0 01-4.373 1.198 7.625 7.625 0 003.348-4.211 15.25 15.25 0 01-4.835 1.847 7.6 7.6 0 00-5.557-2.404c-4.915 0-8.526 4.586-7.416 9.346-6.325-.317-11.934-3.347-15.69-7.953C2.01 9.869 2.97 14.345 6.358 16.612a7.58 7.58 0 01-3.446-.953c-.084 3.527 2.444 6.826 6.105 7.56a7.63 7.63 0 01-3.438.13 7.618 7.618 0 007.112 5.286A15.306 15.306 0 011.42 31.79a21.55 21.55 0 0011.67 3.42c14.134 0 22.12-11.937 21.637-22.643a15.499 15.499 0 003.799-3.941z"></path></svg>
                  </a>
                </div>
                <p className="role">Creative Director</p>
              </span>
            </div>
            <div className="coreteam__item">
              <figure>
              <img src="/build/images/emmanuel.png"/>
              </figure>
              <span className="coreteam__item--labels">
              <div className="coreteam__item--name">
                  <p>Emmanuel</p>
                  <a target="_blank" href="https://twitter.com/nerdyemmanuel">
                    <svg xmlns="http://www.w3.org/2000/svg" className=" fill-current stroke-current h-2 w-2 mr-1" viewBox="0 0 40 40"><path d="M38.526 8.625a15.199 15.199 0 01-4.373 1.198 7.625 7.625 0 003.348-4.211 15.25 15.25 0 01-4.835 1.847 7.6 7.6 0 00-5.557-2.404c-4.915 0-8.526 4.586-7.416 9.346-6.325-.317-11.934-3.347-15.69-7.953C2.01 9.869 2.97 14.345 6.358 16.612a7.58 7.58 0 01-3.446-.953c-.084 3.527 2.444 6.826 6.105 7.56a7.63 7.63 0 01-3.438.13 7.618 7.618 0 007.112 5.286A15.306 15.306 0 011.42 31.79a21.55 21.55 0 0011.67 3.42c14.134 0 22.12-11.937 21.637-22.643a15.499 15.499 0 003.799-3.941z"></path></svg>
                  </a>
                </div>
                <p className="role">Engineer</p>
              </span>
            </div>
            <div className="coreteam__item">
              <figure>
                <img src="/build/images/tunde.png"/>
              </figure>
              <span className="coreteam__item--labels">
              <div className="coreteam__item--name">
                  <p>Tunde</p>
                  <a target="_blank" href="https://twitter.com/Tunde_OD">
                    <svg xmlns="http://www.w3.org/2000/svg" className=" fill-current stroke-current h-2 w-2 mr-1" viewBox="0 0 40 40"><path d="M38.526 8.625a15.199 15.199 0 01-4.373 1.198 7.625 7.625 0 003.348-4.211 15.25 15.25 0 01-4.835 1.847 7.6 7.6 0 00-5.557-2.404c-4.915 0-8.526 4.586-7.416 9.346-6.325-.317-11.934-3.347-15.69-7.953C2.01 9.869 2.97 14.345 6.358 16.612a7.58 7.58 0 01-3.446-.953c-.084 3.527 2.444 6.826 6.105 7.56a7.63 7.63 0 01-3.438.13 7.618 7.618 0 007.112 5.286A15.306 15.306 0 011.42 31.79a21.55 21.55 0 0011.67 3.42c14.134 0 22.12-11.937 21.637-22.643a15.499 15.499 0 003.799-3.941z"></path></svg>
                  </a>
                </div>
                <p className="role">Covener: Chess in the slums</p>
              </span>
            </div>
          </div>
        </div>
      </>
    );
  }
}