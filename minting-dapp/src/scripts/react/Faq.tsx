import React from 'react';

interface Props {
  
}

interface State {

}

const defaultState: State = {
  
};

export default class Faq extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = defaultState;
  }

  render() {
    return (
      <>
        <div className="faq">
          <div className="faq__title">
            <h2 className="faq__title--h2">faq</h2>
          </div>
          <div className="faq__content">
            <div>Collection Size - 10,000</div>
            <div>Mint Prize - 0.05ETH</div>
            <div>CHAIN - ETHEREUM</div>
            <div className="faq__btn">
              <button className="faq__btn--btn">Learn more</button>
            </div>
          </div>
        </div>
      </>
    );
  }
}