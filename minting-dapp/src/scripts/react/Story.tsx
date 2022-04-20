import React from 'react';

interface Props {
  
}

interface State {

}

const defaultState: State = {
  
};

export default class Story extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = defaultState;
  }

  render() {
    return (
      <>
        <div className="story">
          <h2 className="story__h2">the story begins</h2>
          <div className="story__content">
            <div className="story__contentleft">
              <figure>
                <img src="/build/images/storyrectangle.svg"/>
              </figure>
              <figure>
                <img src="/build/images/boywithtrophy.svg"/>
              </figure>
            </div>
            <div className="story__contentright">
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam placerat hendrerit rutrum. Quisque malesuada accumsan ante, porttitor eleifend nisl mollis pretium. Proin magna leo, laoreet rhoncus metus finibus, consectetur rhoncus mauris. Sed feugiat, neque quis mattis imperdiet, libero diam lobortis metus, non accumsan enim orci at purus. </p>
              <span className="story__contentright--btn">
                <button className="story__contentright--learnmorebtn">Learn more</button>
              </span>
            </div>
          </div>
        </div>
      </>
    );
  }
}