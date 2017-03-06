
import React from 'react';
import styles from './easyCard.less';
import util from '../../../common/util';

class EasyCard extends React.Component {
  constructor(props) {
    super(props);
    this.onTimeValueChange=this.onTimeValueChange.bind(this);
  }
  onTimeValueChange(e){
    this.props.onTimeChange(e.nativeEvent.selectedSegmentIndex+1);
  }
  render() {
    const {cardData,quota} = this.props;
    if(quota===1){
      return (
          <div className={styles.box}>
            <div className={styles['item--left']}>{cardData.businessDepart}</div>
            <div className={styles['item--center']}>{util.takeInt(cardData.income)}</div>
            <div className={styles['item--right']}>{cardData.incomeCompared>0 ? ("↑" + cardData.incomeCompared + "%") : ("↓" + cardData.incomeCompared + "%")}</div>
          </div>
      );
    }else if(quota===2){
      return (
          <div className={styles.box}>
            <div className={styles['item--left']}>{cardData.businessDepart}</div>
            <div className={styles['item--rightHarf']}>{cardData.incomeBudgetCompleteness+"%"}</div>
          </div>
      );
    }
  }
}
export default EasyCard;
