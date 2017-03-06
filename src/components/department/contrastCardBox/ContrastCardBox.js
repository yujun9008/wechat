
import React from 'react';
import styles from './contrastCardBox.less';
import { Icon } from 'antd-mobile';
import util from '../../../common/util';
class ContrastCardBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      checkAll:false,
      checkedList:[],
      incomeQuotaCofig:[
        {name:"事业部",field:"businessDepart",unit:""},
        {name:"收益额",field:"income",fieldAdd:"incomeCompared",unit:"w"},
        {name:"流水",field:"flow",fieldAdd:"flowCompared",unit:"w"},
        {name:"收益率",field:"incomeRate",fieldAdd:"incomeRateCompared",unit:"%"},
        {name:"ARPU",field:"arpu",fieldAdd:"arpuCompared",unit:""},
        {name:"报名人数",field:"signPersonNum",fieldAdd:"signPersonNumCompared",unit:""},
        {name:"销转",field:"transfer",fieldAdd:"transferCompared",unit:"%"},
        {name:"机会数",field:"chance",fieldAdd:"chanceCompared",unit:""},
        {name:"推广费比",field:"cashProp",fieldAdd:"cashPropCompared",unit:"%"},
        {name:"CPA",field:"cpa",fieldAdd:"cpaCompared",unit:""},
        {name:"RPA",field:"rpa",fieldAdd:"rpaCompared",unit:""},
        {name:"人工费比",field:"labourCostProp",fieldAdd:"labourCostPropCompared",unit:"%"},
        {name:"人均薪资",field:"perPay",fieldAdd:"perPayCompared",unit:""},
        {name:"坐席占比",field:"seatProp",fieldAdd:"seatPropCompared",unit:"%"},
        {name:"人均单产量",field:"perProduction",fieldAdd:"perProductionCompared",unit:""},
        {name:"人均机会",field:"perChance",fieldAdd:"perProductionCompared",unit:""},
      ],
      completenessQuotaCofig:[
        {name:"事业部",field:"businessDepart",unit:""},
        {name:"收益额完成率",field:"incomeBudgetCompleteness",unit:"%"},
        {name:"流水完成率",field:"flowBudgetCompleteness",unit:"%"},
        {name:"推广费使用率",field:"arpu",unit:"%"},
        {name:"人工费使用率",field:"labourCostBudgetUserness",unit:"%"},
        {name:"退费使用率",field:"refundBudgetUserness",unit:"%"},
        {name:"其它消耗率",field:"otherExpensesBudgetUserness",unit:"%"},
        {name:"收益率对比",field:"incomeRate",fieldAdd:"incomeRateDifference",unit:"%"},
        {name:"推广费比对比",field:"cashProp",fieldAdd:"cashPropDifference",unit:"%"},
        {name:"人工费比对比",field:"labourCostProp",fieldAdd:"labourCostDifference",unit:"%"},
        {name:"退费费比对比",field:"refundRate",fieldAdd:"refundPropDifference",unit:"%"},
        {name:"其它费比对比",field:"otherExpensesProp",fieldAdd:"otherExpensesPropDifference",unit:"%"},
      ],
    }
    this.handleTitleClick = this.handleTitleClick.bind(this);
    this.handleCheckAll = this.handleCheckAll.bind(this);
  }
  componentDidMount(){
    this.handleCheckAll();
  }
  componentWillReceiveProps(nextProps) {
    //重装选中的数组
        if(nextProps.dataList != this.props.dataList) {
          this.state.checkedList.map((record,index)=>{
            (function(){
              nextProps.dataList.map((item)=>{
                if(record.businessDepartId == item.businessDepartId){
                  this.state.checkedList[index] = item;
                }
              });
            })(record,index);
          });
        }
        this.setState({
          checkedList:this.state.checkedList.concat()
        });
    }
  handleCheckAll(){
    if(this.state.checkAll){
      //取消全部
      this.setState({
        checkedList:[],
        checkAll:false,
      });

    }else{
      //选中全部
      this.setState({
        checkedList:this.props.dataList.concat(),
        checkAll:true,
      });
    }
  }
  handleTitleClick(id){
    this.props.dataList.map((item)=>{
      if(id == item.businessDepartId){
          //维护选中的长度
          if(this.state.checkedList.indexOf(item)>-1){
            //删除
            this.state.checkedList.splice(this.state.checkedList.indexOf(item), 1);
            //取消全选
            this.setState({
              checkedList:this.state.checkedList,
              checkAll:false
            });
          }else{
            //增加
            this.state.checkedList.push(item);
            if(this.state.checkedList.length == this.props.dataList.length){
              //如果选中数组的长度与总数组长度相等,激活全选
              this.setState({
                checkedList:this.state.checkedList,
                checkAll:true
              });
            }else{
              this.setState({
                checkedList:this.state.checkedList
              });
            }
          }
      }
    });
  }

  render() {
    const {quotaType,dataList} = this.props;
    //头部可选项
    let titles = this.props.dataList.map((item,index)=>{
      if(quotaType == 1){
        //收益额
        return(
          <div
            key={item.businessDepartId}
            className={styles.chooseBox__item + " "+ ((this.state.checkedList.indexOf(item)>-1) ? styles['chooseBox__item--checked'] : "")}
            onClick={()=>(this.handleTitleClick(item.businessDepartId))}
          >
            <h5>{item.businessDepart}</h5>
            <p>{util.takeInt(item.income)}</p>
            <span>{(item.incomeCompared >0 ? "↑" : "↓") +item.incomeCompared+"%"}</span>
          </div>
        );
      }else if(quotaType == 2){
        //收益额完成率
        return(
          <div
            key={item.businessDepartId}
            className={styles.chooseBox__item + " "+ ((this.state.checkedList.indexOf(item)>-1) ? styles['chooseBox__item--checked'] : "")}
            onClick={()=>(this.handleTitleClick(item.businessDepartId))}
          >
            <h5>{item.businessDepart}</h5>
            <p>{item.incomeBudgetCompleteness + "%"}</p>
          </div>
        )
      }
    });
    titles.unshift(
      <div
        key={-1}
        onClick={this.handleCheckAll}
        className={this.state.checkAll ? styles.checkAll : styles.cancelAll}
      >
        {this.state.checkAll ? "全部取消" : "全部选中"}
      </div>
      );
    //内容部分左侧表头
    let quotaCofig = [];
    if(quotaType == 1){
      quotaCofig = this.state.incomeQuotaCofig;
    }else if(quotaType == 2){
      quotaCofig = this.state.completenessQuotaCofig;
    };
    let contentHead = quotaCofig.map((item,index)=>{
      if(item.field == 'businessDepart'){
          return (<div key={item.field + index} className={styles.blank}></div>);
      }else{
          return (<div key={item.field + index}>{item.name} </div>);
      }
    });
    //内容右侧表内容
    let contentbody = this.state.checkedList.map((item)=>{
      let tds = [];
      quotaCofig.map((record)=>{
        if(record.fieldAdd){
          //有右下角角标数值
            tds.push(
              <div  key={item.businessDepartId + record.field}>
                {(record.unit == "w") ? (util.takeInt(item[record.field])) : (item[record.field] + record.unit)}
                <span>{(item[record.fieldAdd] > 0 ? "↑" : "↓")+ item[record.fieldAdd]+"%"}</span>
              </div>
            );
        }else{
          if(record.field == "businessDepart"){
            //如果是事业部 加头部删除按钮
            tds.push(
              <div  key={item.businessDepartId + record.field}>
                <Icon type="cross-circle-o" onClick={()=>(this.handleTitleClick(item.businessDepartId))}/>
                {item[record.field]+ record.unit}
              </div>
            );

          }else{
            //普通数据
            tds.push(
              <div  key={item.businessDepartId + record.field}>
                {(record.unit == "w") ? (util.takeInt(item[record.field])) : (item[record.field] + record.unit)}
              </div>
            );
          }

        }
      });
      return(
        <div className={styles.bodyItem} >
          {tds}
        </div>
      );
    });

    return(
      <div className={styles.contrastCardBox }>
        <div className={styles.chooseBox+" "} >
          <div className="clearfix" style={{width:(dataList.length+1)*200+12}}>
            {titles}
          </div>
        </div>

        <div className={styles.contentBox + " " +(quotaType==1 ? styles.quotaIncome : styles.quotaCompleteness)}>
          <div className={styles.contentheadBox}>
            {contentHead}
          </div>
          <div className={styles.contentBodyBox}>
            <div className='clearfix' style={{width:this.state.checkedList.length*200+20}}>
              {contentbody}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default ContrastCardBox;
