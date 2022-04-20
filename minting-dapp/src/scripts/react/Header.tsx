import React from 'react';

interface Props {
  
}

interface State {

}

const defaultState: State = {
  
};

export default class Header extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = defaultState;
  }

  render() {
    return (
      <>
        <div className="header">
          <div className="header__name">
            <figure>
              <img src="/build/images/SlumHeroes.svg" alt="SVG as an image" />
            </figure>
          </div>
          <div className="header__links">
            <span className="header__link header__link--focus">home</span>
            <span className="header__link">join the club</span>
            <span className="header__link">roadmap</span>
            <span className="header__link">faq</span>
          </div>
        </div>
      </>
    );
  }
}