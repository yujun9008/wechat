
import React from 'react';
import { SegmentedControl, WingBlank ,  Picker, List, WhiteSpace } from 'antd-mobile';
import styles from './normalCardBox.less';
import EasyCard from '../easyCard/EasyCard.js'

class NormalCardBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      chooseData:[
          {
            label: '收益额',
            value: 1,
          },
          {
            label: '收益额完成率',
            value: 2,
          },
      ]

    }
    this.handleQuotaChange = this.handleQuotaChange.bind(this);
  }
  handleQuotaChange(val){
    this.props.handleQuotaChange(val);
  }
  render() {
    const {departmentData} = this.props;
    let easyCards = departmentData &&  departmentData.businessDepartList.map((ele,index)=>{
        return(<EasyCard cardData={ele} key={index} quota={this.props.quota[0]}/>);
    });
    let sumObj =departmentData.businessDepartSum;
    easyCards.unshift(<EasyCard cardData={sumObj} key={-1} quota={this.props.quota[0]}/>);
    let quotaContent = "";
    if(this.props.timeType == "week"){
      quotaContent = <div className={styles.listLine}>
                        <div className={styles.listContent}>指标</div>
                        <div className={styles.listExtra}>收益额</div>
                      </div>
    }else if(this.props.timeType == "month"){
      quotaContent = <Picker
                        data={this.state.chooseData}
                        cols={1}
                        value={this.props.quota}
                        onChange={this.handleQuotaChange}
                      >
                        <List.Item arrow="horizontal">指标</List.Item>
                      </Picker>
    }


    return (
      <div className={styles.normalCardBox}>
        <div className={styles.chooseBox}>
          {quotaContent}
        </div>
        <div className={styles.listBox}>
          {easyCards}
        </div>
    </div>
    )
  }
}
export default NormalCardBox;
