import React from 'react';

interface Props {
  
}

interface State {
  sidenavopen: boolean
}

const defaultState: State = {
  sidenavopen: false
};

export default class MobileHeader extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = defaultState;
  }

  private sidenavToggle(): void{
    if (this.state.sidenavopen) {
      this.setState({
        sidenavopen: false
      });

      return;
    }

    this.setState({
      sidenavopen: true
    })
  }

  render() {
    return (
      <>
      <div className="mobileheader">
        <div className="mobileheader__left">
          <figure>
            <img src="/build/images/SlumHeroes.svg" alt="SVG as an image" />
          </figure>
        </div>
        <div className="mobileheader__right" onClick={() => this.sidenavToggle()}>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div className={this.state.sidenavopen ? 'mobileheader__sidenav open' : 'mobileheader__sidenav'} 
          onClick={() => this.sidenavToggle()}>
          <div className="mobileheader__sidenav--body">
            <figure>
              <img src="/build/images/SlumHeroes.svg" alt="SVG as an image" />
            </figure>
          </div>
        </div>
      </div>
      </>
    );
  }
}