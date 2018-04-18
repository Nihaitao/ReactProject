import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'dva';
import { Table, Popconfirm, Button, Content, Row, Col, Icon, Switch, Checkbox, Input, InputNumber } from 'antd';
const ButtonGroup = Button.Group;


import styles from '../../system.css';

class EditAllocationPatternItem extends React.Component {
    state = {

    };

    onClickToGoBack(){
        this.props.dispatch({
            type: 'supportAllocation/changeAllocationItyemId',
            payload: 1,
          });
    }


    render() {
        return (
            <div>
                <div className={styles.promotion_head} style={{ height: '120px' }} style={{ borderBottom: '10px solid #f1f1f1' }}>
                    <div style={{ margin: '0', padding: '0' }}>
                        <div style={{ float: 'left', fontSize: '40px', width: '3%', marginRight: '55px' }}>
                            <Icon type="left" style={{ marginTop: '20px',cursor:'pointer' }} onClick={this.onClickToGoBack.bind(this)} />
                        </div>
                        <div style={{ width: '120%' }} >
                            <h4>基础分配规则设置</h4>
                            <p>当有顾客发起对话时，将会按照所选择的基础分配规则进行分配</p>
                            <br />
                            <a style={{ color: '#63B8FF', marginLeft: '68px' }} >查看和调整客服排序</a>
                        </div>
                    </div>
                </div>
                <div className={styles.promotion_head} style={{ height: '120px',borderBottom: '10px solid #f1f1f1' }}>
                    <h4>按排序轮流分配</h4>
                    <p>设定一个客服排序，新的对话按此排序，在可分配的客服间轮流分配</p>
                    <div style={{ position: 'absolute', top: '10px', right: '20px',color:'#00EE00' }}>
                    <Button shape="circle" icon="check-circle"  size="small"  style={{ color:'#00EE00' }}></Button>
                    <span style={{marginLeft:'5px'}} >当前规则</span>
                    </div>
                </div>
                <div className={styles.promotion_head}  style={{ borderBottom: '10px solid #f1f1f1' }}>
                    <h4>按排序优先分配</h4>
                    <p>设定一个客服排序，优先给排序靠前的客服分配到对话数量上限，才会分配给排序下一位的客服</p>
                    <div style={{ position: 'absolute', top: '5px', right: '8px',color:'#00EE00' }}>
                    <Button  type="primary">选择此方案</Button>
                    </div>
                </div>
                <div className={styles.promotion_head}  style={{ borderBottom: '10px solid #f1f1f1' }}>
                    <h4>按当前负载分配</h4>
                    <p>当有新对话进来时，优先分配给当前会话数量最少的客服</p>
                    <div style={{ position: 'absolute', top: '5px', right: '8px',color:'#00EE00' }}>
                    <Button  type="primary">选择此方案</Button>
                    </div>
                </div>
                <div className={styles.promotion_head}  style={{ borderBottom: '10px solid #f1f1f1' }}>
                    <h4>补齐分配</h4>
                    <p>当有新对话进来时，查看所有可分配客服在过去24小时的总对话数，优先分配给最少的客服</p>
                    <div style={{ position: 'absolute', top: '5px', right: '8px',color:'#00EE00' }}>
                    <Button  type="primary">选择此方案</Button>
                    </div>
                </div>
                <div className={styles.promotion_head}>
                    <h4>随机分配</h4>
                    <p>当有新对话进来时，安全随机分配给当前可分配客服</p>
                    <div style={{ position: 'absolute', top: '5px', right: '8px',color:'#00EE00' }}>
                    <Button  type="primary">选择此方案</Button>
                    </div>
                </div>

            </div>
        );
    }
}



export default connect(({ supportAllocation }) => ({ supportAllocation }))((EditAllocationPatternItem));

