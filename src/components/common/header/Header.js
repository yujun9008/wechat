
import React from 'react';
import styles from './header.less';
import { SegmentedControl, WingBlank ,Icon } from 'antd-mobile';
const quotaSum = require('../../../images/quotaSum.png');
const quotaRatio = require('../../../images/quotaRatio.png');
class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      showImgFlag:false,
      imgFlag:true
    }
    this.onTimeValueChange=this.onTimeValueChange.bind(this);
    this.onShowTypeChange = this.onShowTypeChange.bind(this);
  }
  onTimeValueChange(e){
    this.props.onTimeChange(e.nativeEvent.selectedSegmentIndex+1);
  }
  onShowTypeChange(){
    this.setState({
      imgFlag : !this.state.imgFlag
    },function(){
      this.props.onShowTypeChange(this.state.imgFlag);
    });
  }
  componentDidMount(){
    let showImgFlag = this.props.showImgFlag ? this.props.showImgFlag : false;
    this.setState({
      showImgFlag:showImgFlag
    })
  }
  render() {
    return (
        <div className={styles.title}>
          <div className={styles.title__in}>
              <SegmentedControl
                selectedIndex={this.props.selectedIndex}
                values={['月累计', '周累计']}
                onChange={this.onTimeValueChange}
                enabled={((!this.state.imgFlag) && (this.props.quotaType == 2)) ? false : true}
              />
            <div className={styles.quotaType + (this.state.showImgFlag ? " " : " dn")} onClick={this.onShowTypeChange}>
                <img className={styles.quotaTypeIcon + (this.state.imgFlag ? "" : " dn")} src={quotaSum}/>
                <img className={styles.quotaTypeIcon + (this.state.imgFlag ? " dn" : "")} src={quotaRatio} />
              </div>
          </div>
        </div>
    );
  }
}
export default Header;
