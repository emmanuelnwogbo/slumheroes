import React from 'react';

interface Props {
  
}

interface State {
  sidenavopen: boolean
}

const defaultState: State = {
  sidenavopen: false,
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
            <div className="mobileheader__sidenavitems">
              <div className="mobileheader__sidenavitem">home</div>
              <div className="mobileheader__sidenavitem">join the club</div>
              <div className="mobileheader__sidenavitem">road map</div>
              <div className="mobileheader__sidenavitem">faq</div>
            </div>
            <div className="mobileheader__sidenavitem mobileheader__sidenavitem--socials">
              <a className="mobileheader__sidenavitem--social">
                <svg xmlns="http://www.w3.org/2000/svg" className=" fill-current stroke-current h-2 w-2 mr-1" viewBox="0 0 40 40"><path d="M38.526 8.625a15.199 15.199 0 01-4.373 1.198 7.625 7.625 0 003.348-4.211 15.25 15.25 0 01-4.835 1.847 7.6 7.6 0 00-5.557-2.404c-4.915 0-8.526 4.586-7.416 9.346-6.325-.317-11.934-3.347-15.69-7.953C2.01 9.869 2.97 14.345 6.358 16.612a7.58 7.58 0 01-3.446-.953c-.084 3.527 2.444 6.826 6.105 7.56a7.63 7.63 0 01-3.438.13 7.618 7.618 0 007.112 5.286A15.306 15.306 0 011.42 31.79a21.55 21.55 0 0011.67 3.42c14.134 0 22.12-11.937 21.637-22.643a15.499 15.499 0 003.799-3.941z"></path></svg>
              </a>
            </div>
          </div>
        </div>
      </div>
      </>
    );
  }
}