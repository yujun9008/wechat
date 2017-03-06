import React from 'react';
import { Circle } from 'rc-progress';
import styles from './CircleCard.less';
import util from '../../../common/util';

class AppComponet extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      title: '',
      value: 0,
      ratio: 0
    }
  }

  componentWillReceiveProps(nextProps){
    if(nextProps.value != this.props.value){
      const { title, value, ratio} = nextProps;
      this.setState({
        title,
        value,
        ratio
      })
    }
  }

  render() {
      const {title, value, ratio} = this.state;
      return (
        <div className={styles.root}>
          <div className={styles.cBody}>
            <p className={styles.value}>{value + '%'}</p>
            <h3 className={styles.h3}>{title}</h3>
          </div>
          <div style={{width:'70%',margin:'0 auto'}}><Circle percent={value} strokeWidth="3" trailWidth="3" strokeColor="#ff9800" /></div>
          <p className={styles.ratio}>{util.takeSign(ratio)}</p>
        </div>
      )
  }
}

export default AppComponet;
