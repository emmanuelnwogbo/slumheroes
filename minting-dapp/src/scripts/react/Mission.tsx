import React from 'react';

interface Props {
  
}

interface State {
  currentThing: number
}

const defaultState: State = {
  currentThing: 1
};

export default class Mission extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = defaultState;
  }

  private nextSlide(): void {
    if (this.state.currentThing === 3) {
      let next = 1;
      this.setState({
        currentThing: next
      });

      return
    }

    let next = this.state.currentThing;
    next+=1;
    this.setState({
      currentThing: next
    });
  }

  render() {
    return (
      <>
        <div className="mission">
          <h2 className="mission__h2">Mission/Roadmap</h2>
          <div className="mission__slides">
            <div className={
              this.state.currentThing === 1 ? 'currentthing mission__slide' : this.state.currentThing > 2 ? 'notcurrentthing mission__slide' : 'previousthing mission__slide'}>
              <div className="mission__slideleft">
                <div className="mission__slideleft">
                  <h2>Social Impact</h2>
                  <p>
                  Building and expanding the chess in a slum initiative to reach and change lives on a broader scale
                  </p>
                </div>
              </div>
              <div className="mission__slideright">
                <figure>
                  <img src="/build/images/unsplash.png"/>
                </figure>
              </div>
            </div>
            <div className={
              this.state.currentThing === 2 ? 'currentthing mission__slide' : this.state.currentThing > 2 ? 'previousthing mission__slide' : 'notcurrentthing mission__slide' }>
              <div className="mission__slideleft">
                <div className="mission__slideleft">
                  <h2>On-chain utility</h2>
                  <p>
                  we would like to explore the use case of story telling and documentation on the blockchain. ( from comic books, animated series, technology for social change etc.)
                  </p>
                </div>
              </div>
              <div className="mission__slideright">
                <figure>
                  <img src="/build/images/unsplash.png"/>
                </figure>
              </div>
            </div>
            <div className={
              this.state.currentThing === 3 ? 'currentthing mission__slide' : this.state.currentThing > 3 ? 'previousthing mission__slide' : 'notcurrentthing mission__slide' }>
              <div className="mission__slideleft">
                <div className="mission__slideleft">
                  <h2>Community</h2>
                  <p>
                  We want to build a community of people that are willing to be a part of something big . A community of impact makers that believe in utilizing web3.0 for social change and good.
                  </p>
                </div>
              </div>
              <div className="mission__slideright">
                <figure>
                  <img src="/build/images/unsplash.png"/>
                </figure>
              </div>
            </div>
          </div>
          <div className="mission__slidearrow" onClick={() => this.nextSlide()}>
            <figure>
              <img src="/build/images/nextslide.svg"/>
            </figure>
          </div>
        </div>
      </>
    );
  }
}