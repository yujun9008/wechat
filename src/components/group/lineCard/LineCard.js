import React from 'react';
import { Line } from 'rc-progress';
import styles from './LineCard.less';
import util from '../../../common/util';
class AppComponet extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      title: '',
      value: 0,
      ratio: 0,
      showLine:true
    };
  }

  componentWillReceiveProps(nextProps){
    if(nextProps.value != this.props.value){
      const { title, value, ratio,showLine} = nextProps;
      this.setState({
        title,
        value,
        ratio,
        showLine: showLine==0 ? false : true
      })
    }
  }

  render() {
      const {title, value, ratio, showLine} = this.state;
      return (
        <div className={styles.root}>
          <h3>{title}</h3>
          <p className={styles.value}>{showLine ? util.takeInt(value) : value+'%'}</p>
          <p className={styles.ratio}>{ratio + '%'}</p>
          {showLine? <div><Line percent={ratio} strokeWidth="3" trailWidth="3" strokeColor="#2db7f5" /></div> : ''}
        </div>
      )
  }
}

export default AppComponet;
