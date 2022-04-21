import React from 'react';

interface Props {
  
}

interface State {

}

const defaultState: State = {
  
};

export default class MobileFaq extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = defaultState;
  }

  render() {
    return (
      <>
        <div className="mobilefaq">
          <h2>Faq</h2>
          <div className="mobilefaq__items">
            <span>Collection Size - 10,000</span>
            <span>Mint Prize - 0.04ETH</span>
            <span>CHAIN - ETHEREUM</span>
          </div>
        </div>
      </>
    );
  }
}