import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import LineCard from '../lineCard/LineCard';
import CircleCard from '../circleCard/CircleCard';
import Card from '../card/Card';
import Cards from '../card/Cards';
import styles from './GroupWeek.less';

export default class GroupMonth extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      groupData:{},
      togIncome: false,     //收益额显示隐藏切换
      togFlow: false,       //流水显示隐藏切换
      togCashProp: false,   //推广费比显示隐藏切换
      togLabourCost:false   //人工费比显示隐藏切换
    }

    this.toggle = this.toggle.bind(this);
  }
  componentWillReceiveProps(nextProps){
    if(nextProps.groupData != this.props.groupData){
      const { groupData } = nextProps;
      this.setState({groupData});
    }
  }
  //统一切换隐藏
  toggle(parm,flag){
    this.setState({
      [parm]:flag
    })
  }

  render() {
    const { groupData } = this.state;
    return (
      <div className={styles.root}>
        <div className={styles.title}>关键指标分析</div>
        <div className={styles.grid}>
          <Card title={'收益额'} value={groupData.income} ratio={groupData.incomeCompared} toggle={this.toggle.bind(this,'togIncome')} />
          <div className={styles.item} style={{display:this.state.togIncome ? 'flex' :'none'}}>
              <Cards title={'流水'} value={groupData.flow} ratio={groupData.flowCompared}/>
              <Cards title={'收益率'} value={groupData.incomeRate} ratio={groupData.incomeRateCompared} isRatioValue={true}/>
          </div>
          <Card title={'流水'} value={groupData.flow} ratio={groupData.flowCompared} toggle={this.toggle.bind(this,'togFlow')}/>
          <div className={styles.item} style={{display:this.state.togFlow ? 'flex' :'none'}}>
              <Cards title={'ARPU'} value={groupData.arpu} ratio={groupData.arpuCompared}/>
              <Cards title={'报名人数'} value={groupData.signPersonNum} ratio={groupData.signPersonNumCompared}/>
          </div>
          <div className={styles.item} style={{display:this.state.togFlow ? 'flex' :'none'}}>
              <Cards title={'销转'} value={groupData.transfer} ratio={groupData.transferCompared} isRatioValue={true}/>
              <Cards title={'机会数'} value={groupData.chance} ratio={groupData.chanceCompared}/>
          </div>
          <Card title={'推广费用'} value={groupData.cash} ratio={groupData.cashBudgetUseness} hasChild={0} />
          <Card title={'人工费用'} value={groupData.labourCost} ratio={groupData.labourCostBudgetUserness} hasChild={0} />
          <Card title={'退费'} value={groupData.refund} ratio={groupData.refundBudgetUserness} hasChild={0} />
          <Card title={'其他费用'} value={groupData.otherExpenses} ratio={groupData.otherExpensesBudgetUserness} hasChild={0} />
          <Card title={'推广费比'} value={groupData.cashProp} ratio={groupData.cashPropCompared} isRatioValue={true} toggle={this.toggle.bind(this,'togCashProp')} />
          <div className={styles.item} style={{display:this.state.togCashProp ? 'flex' :'none'}}>
              <Cards title={'CPA'} value={groupData.cpa} ratio={groupData.cpaCompared }/>
              <Cards title={'RPA'} value={groupData.rpa} ratio={groupData.rpaCompared} isRatioValue={true}/>
          </div>
          <div className={styles.item} style={{display:this.state.togCashProp ? 'flex' :'none'}}>
              <Cards title={'销转'} value={groupData.transfer} ratio={groupData.transferCompared} isRatioValue={true}/>
              <Cards title={'ARPU'} value={groupData.arpu} ratio={groupData.arpuCompared}/>
          </div>
          <Card title={'人工费比'} value={groupData.labourCostProp} ratio={groupData.labourCostPropCompared} isRatioValue={true} toggle={this.toggle.bind(this,'togLabourCost')}/>
          <div className={styles.item} style={{display:this.state.togLabourCost ? 'flex' :'none'}}>
              <Cards title={'人均薪资'} value={groupData.perPay} ratio={groupData.perPayCompared}/>
              <Cards title={'坐席占比'} value={groupData.seatProp} ratio={groupData.seatPropCompared}/>
          </div>
          <div className={styles.item} style={{display:this.state.togLabourCost ? 'flex' :'none'}}>
              <Cards title={'人均单产量'} value={groupData.perProduction} ratio={groupData.perProductionCompared}/>
          </div>
          <div className={styles.item} style={{display:this.state.togLabourCost ? 'flex' :'none'}}>
            <Cards title={'人均机会'} value={groupData.perChance} ratio={groupData.perChanceCompared} isRatioValue={true}/>
            <Cards title={'RPA'} value={groupData.rpa} ratio={groupData.rpaCompared} isRatioValue={true}/>
          </div>
          <Card title={'退费费比'} value={groupData.refundRate} ratio={groupData.refundRateCompared} isRatioValue={true} hasChild={0}/>
          <Card title={'其他费比'} value={groupData.otherExpensesProp} ratio={groupData.otherExpensesPropCompared} isRatioValue={true}  hasChild={0} />
        </div>
      </div>
    );
  }
}
