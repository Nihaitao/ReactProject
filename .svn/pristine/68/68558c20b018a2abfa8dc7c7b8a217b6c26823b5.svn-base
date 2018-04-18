import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'dva';
import { Table, Popconfirm, Button, Content, Row, Col, Icon, Switch, Checkbox, Input, InputNumber, Popover, Radio } from 'antd';
const ButtonGroup = Button.Group;
const RadioGroup = Radio.Group;

import styles from '../../system.css';

class AllocationItem extends React.Component {
    constructor(props){
        super(props)
      }
    state = {

    };
    onClickEditAllocationPattern() {
        this.props.dispatch({
            type: 'supportAllocation/changeAllocationItyemId',
            payload: 2,
          });

    }

    onClickEditSort(){
        this.props.dispatch({
            type: 'supportAllocation/changeAllocationItyemId',
            payload: 3,
          });
    }

    onClickAddNewPattern(){
        this.props.dispatch({
            type: 'supportAllocation/changeAllocationItyemId',
            payload: 4,
          });
    }


    render() {
       

        const columns = [{
            title: '优先级',
            dataIndex: 'prferLevel',
            key: 'prferLevel'
        }, {
            title: '条件',
            dataIndex: 'condition',
            key: 'condition'
        },

        {
            title: '分配到',
            dataIndex: 'arrangeTo',
            key: 'arrangeTo',
        }];

        const dataSource = [{
            prferLevel: '1',
            condition: '地域 属于 湖南 或 湖北',
            arrangeTo: '湖南客服组'
        }];

        const radioStyle = {
            display: 'block',
            height: '40px',
            lineHeight: '30px',
        };

        const content = (
            <div>
                <RadioGroup onChange={this.onChange} value={this.state.value}>
                    <Radio style={radioStyle} value={1}>按分配规则进行分配。 当指定客服不可接待时，访客将按照系统设定的分配规则进行分配</Radio>
                    <Radio style={radioStyle} value={2}>留言给他。 当指定客服不可接待时，将引导访客留言给指定客服</Radio>
                    <div style={{float:'right'}}>
                        <Button type="primary" htmlType="submit" style={{ width: '80px' }}>保存</Button>
                        <Button style={{ width: '80px', marginLeft: '10px' }}>取消</Button>
                    </div>
                </RadioGroup>
                
            </div>
        );

        return (
            <div>
                <div className={styles.promotion_head} >
                    <h4>基础分配规则</h4>
                    <p>当有顾客发起对话后，将会按照所选择的基础分配规则进行分配</p>
                    <div style={{ marginTop: '12px' }}>
                        <h4>当前规则：<span style={{ color: '#32CD32' }}>按排序优先分配</span></h4>
                    </div>
                </div>
                <div className={styles.promotion_head} style={{ borderBottom: '10px solid #f1f1f1' }}>
                    <a style={{ color: '#63B8FF' }} onClick={this.onClickEditAllocationPattern.bind(this)}>修改基础分配规则</a>
                    <a style={{ color: '#63B8FF', marginLeft: '15px' }} onClick={this.onClickEditSort.bind(this)}>查看和调整客服排序</a>
                </div>

                <div className={styles.promotion_head} style={{ borderBottom: '10px solid #f1f1f1' }}>
                    <h4>回头客分配</h4>
                    <p>优先把回头客分配给上一次和他对话的客服</p>
                    <Switch defaultChecked className={styles.cell_switch} style={{ position: 'absolute', top: '20px', right: '20px' }} />
                </div>
                <div className={styles.promotion_head} style={{ borderBottom: '10px solid #f1f1f1' }}>
                    <h4>销售线索保护</h4>
                    <p>优先把访客分配给第一次和他对话的客服</p>
                    <Switch defaultChecked className={styles.cell_switch} style={{ position: 'absolute', top: '20px', right: '20px' }} />
                </div>
                <div className={styles.promotion_head} style={{ borderBottom: '10px solid #f1f1f1' }}>
                    <span>客服不可接待时</span>
                    <Popover placement="rightTop" content={content} trigger="click">
                        <a style={{ color: '#63B8FF', marginLeft: '15px' }}>按分配规则分配</a>
                    </Popover>
                </div>
                <div className={styles.promotion_head} >
                    <h4>高级条件分配</h4>
                    <p style={{ width: '75%' }}>当设定高级条件分配后，顾客的对话会优先按照高级条件分配中的规则进行分配。不符合高级条件规则的对话，最后会按基础分配规则进行分配</p>
                    <Switch defaultChecked className={styles.cell_switch} style={{ position: 'absolute', top: '20px', right: '20px' }} />
                </div>
                <div className={styles.promotion_head} style={{ height: '180px' }} >
                    <a style={{ color: '#63B8FF' }} onClick={this.onClickAddNewPattern.bind(this)} >添加新规则</a>
                    <a style={{ color: '#63B8FF', marginLeft: '15px' }}>调整优先级</a>
                    <Table dataSource={dataSource} columns={columns} pagination={false} style={{ marginTop: '10px' }} />
                </div>

            </div>
        );
    }
}



export default connect(({ supportAllocation }) => ({ supportAllocation }))((AllocationItem));
