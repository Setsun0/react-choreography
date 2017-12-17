import React from 'react';
import choreography from '../decorator/choreography';
import { opacity, translate } from '../presets';

const SlideTopTransition = choreography([translate.top, opacity]);

const SlideBottomTransition = choreography([translate.bottom, opacity]);
const SlideLeftTransition = choreography([translate.left, opacity]);
const SlideRightTransition = choreography([translate.right, opacity]);

class SlideTransition extends React.Component {
  static defaultProps = {
    direction: 'left',
  };

  render() {
    const { direction, ...rest } = this.props;

    switch (direction) {
      case 'left':
        return <SlideLeftTransition {...rest} />;
      case 'right':
        return <SlideRightTransition {...rest} />;
      case 'top':
        return <SlideTopTransition {...rest} />;
      case 'bottom':
        return <SlideBottomTransition {...rest} />;
    }
  }
}

export default SlideTransition;
