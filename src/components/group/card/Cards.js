import React from 'react';
import { Icon } from 'antd-mobile';
import styles from './Card.less';
import util from '../../../common/util';
//Card组件的 子组件
export default class Cards extends React.Component {
  constructor(props) {
    super(props);

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
    const { title, value, ratio } = this.state;
    const { isRatioValue } = this.props;
    return (
      <div className={styles.roots}>
        <p className={styles.titles}>{title}</p>
        <p className={styles.values}>{isRatioValue ? (value + '%') : ( value)}</p>
        <p className={styles.footers}>
          <span className={styles.ratios}>{ratio*1 < 0 ? <Icon type="arrow-down" /> : <Icon type="arrow-up" />}{ratio + '%'}</span>
        </p>
      </div>
    )
  }
}
