import React from 'react';

interface Props {
  
}

interface State {
  
}

const defaultState: State = {
  
};

export default class MobileStory extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = defaultState;
  }

  render() {
    return (
      <>
      <div className="mobilestory">
        <div className="mobilestory__text">
          <h2 className="mobilestory__text--h2">the story begins</h2>
          <div className="mobilestory__text--para">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam placerat hendrerit rutrum. Quisque malesuada accumsan ante, porttitor eleifend nisl mollis pretium. Proin magna leo, laoreet rhoncus metus finibus, consectetur rhoncus mauris. Sed feugiat, neque quis mattis imperdiet, libero diam lobortis metus, non accumsan enim orci at purus. </p>
          </div>
          <span className="mobilestory__learnmore">
            <button>Learn more</button>
          </span>
        </div>
        <div className="mobilestory__photo">
          <figure>
              <img src="/build/images/storyrectangle.svg"/>
          </figure>
          <figure>
              <img src="/build/images/boywithtrophy.svg"/>
          </figure>
        </div>
      </div>
      </>
    );
  }
}