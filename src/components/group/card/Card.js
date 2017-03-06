import React from 'react';
import { Icon } from 'antd-mobile';
import styles from './Card.less';
import util from '../../../common/util';
export default class Card extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      value: 0,
      ratio: 0,
      showDetail: false
    }
    this.toggle = this.toggle.bind(this);
  }

  componentWillReceiveProps(nextProps){
    if(nextProps.value != this.props.value){
      const { title, value, ratio, showDetail} = nextProps;
      this.setState({
        title,
        value,
        ratio,
        showDetail
      })
    }
  }

  toggle() {
    const {showDetail} = this.state;
    this.setState({
      showDetail: !showDetail
    });
    this.props.toggle(!showDetail);
  }

  render() {
    const { title, value, ratio, showDetail } = this.state;
    const { isRatioValue, hasChild } = this.props;
    return (
      <div className={styles.root}>
        <p className={styles.title}>{title}</p>
        <p className={styles.value}>{isRatioValue ? (value + '%') : ('￥' + value)}</p>
        <p className={styles.footer}>
          <span className={styles.ratio}>{ratio*1 < 0 ? <Icon type="arrow-down" /> : <Icon type="arrow-up" />}{Math.abs(ratio) + '%'}</span>
          {hasChild === 0 ? <span className={styles.arrows}></span> : <span className={styles.arrow} onClick={this.toggle}><Icon type={showDetail ? 'up':'down'} /></span>}
        </p>
      </div>
    )
  }
}
