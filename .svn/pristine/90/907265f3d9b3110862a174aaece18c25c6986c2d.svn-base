import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'dva';
import { message } from 'antd';
import { Link ,routerRedux} from 'dva/router';
import { Row, Col, Icon, Input, Tabs, Table, List, Avatar, Button, Timeline ,Modal} from 'antd';
const TabPane = Tabs.TabPane;
const {TextArea} = Input;
import NoDataView from '../common/nodata';


const askItem = ({ dispatch,askComplaint,modals}) => {
    const dataSource = askComplaint.Asks;

    const columns = [{
        title: '提交时间',
        dataIndex: 'AddTime',
        key: 'AddTime',
    }, {
        title: '提问内容',
        dataIndex: 'Title',
        key: 'Title',
    }, {
        title: '状态',
        dataIndex: 'Status',
        key: 'Status',
        render: (text, record) => (
            record.Status ? <span >已处理</span> : <span style={{color:'#f97a1e'}}>等待处理</span>
        ),
    }, {
        title: '操作',
        dataIndex: 'operation',
        key: 'operation',
        render: (text, record) => (
            <span>
                <Button>删除</Button> 
                <Button style={{ marginLeft:'10px' }} type="primary"
                onClick={()=>dispatch(routerRedux.push('/askdetails/'+record.ID))}
                >查看</Button> 
            </span>
        ),
    }
    ];
 

    return (
        <div>
            <Table columns={columns} dataSource={dataSource} pagination={false} />
            <br/>
            <div style={{ float: 'right' }}>
              <Button type="danger" onClick={()=>dispatch({type:'modals/askVisible',visible:true})}>我要提问</Button>
              <AskModal dispatch={dispatch} modals={modals}/>
            </div>

        </div>
    );
};

class AskModal extends React.Component{
    constructor(){
        super();
        this.state={
            loading:false,
            content:null,
        }
    }
    handleOk(){
        let content = this.state.content;
        if(!content) return message.warning('内容不能为空')
        this.setState({loading:true});
        this.props.dispatch({type:'askComplaint/postAsk',content,hideModal:this.hideModal.bind(this)})
        
    }
    handleCancel(){
        this.hideModal();
    }
    hideModal(){
        this.setState({loading:false});
        this.props.dispatch({type:'modals/askVisible',visible:false})
    }
    onChangeValue(e){
        let content = e.target.value;
        if(content){
            this.setState({content})
        }
    }
    render(){
        let {modals} = this.props;
        return(
        <Modal
          title="提问"
          visible={modals.askVisible}
          onOk={()=>this.handleOk()}
          onCancel={()=>this.handleCancel()}
          footer={[
            <Button key="submit" type="primary" loading={this.state.loading} onClick={()=>this.handleOk()}>
              提交
            </Button>,
          ]}
        >
        <TextArea rows={4} onChange={(e)=>this.onChangeValue(e)} />
        </Modal>)
    }
}


export default connect(({askComplaint,modals})=>({askComplaint,modals}))((askItem));
