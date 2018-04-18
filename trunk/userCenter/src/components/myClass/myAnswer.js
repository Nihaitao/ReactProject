import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'dva';
import { routerRedux } from 'dva/router';
import { Row, Col, Icon, Input, Form, List, Avatar, Button, Timeline } from 'antd';
const FormItem = Form.Item;
import NoDataView from '../common/nodata';

import styles from './index.css';

const myAnswer = ({ dispatch,myClass, paging}) => {
	const data = myClass.MyQuestions;
	const ButtonText = ({ type, text }) => (
		<span>
			<Button type={type} style={{ marginRight: 8 }}>{text}</Button>
		</span>
	);

	const formItemLayout = {
		labelCol: {
			xs: { span: 15 },
			sm: { span: 5 },
		},
		wrapperCol: {
			xs: { span: 15 },
			sm: { span: 16 },
		},
	};

	function viewAnswerDetails(item){
		dispatch({
			type:'myClass/fetchMyQuestionDetail',
			payload:{PID:item.ID}
		})
		
	}

	function showTotal(total) {
		return total&&`共 ${total} 条`;
	}

	const pagination = {
		showQuickJumper: true,
		pageSize: paging.PageSize,
		current: paging.PageIndex,
		total: paging.total,
		showTotal: showTotal,
		onChange: ((page) => { 
			paging.PageIndex = page;
			dispatch({type: 'myClass/fetchMyQuestions',payload:paging});
		}),
};



	const listHtml = <List style={{ paddingLeft: '20px', borderTop: '1px solid #e8e8e8' }}
		pagination={pagination}
		itemLayout="horizontal"
		size="large"
		dataSource={data}
		renderItem={item => (
			<List.Item
				key={item.ID}
				actions={[<Button type="defalut">删除</Button>,<Button type="primary" onClick={()=>viewAnswerDetails(item)}>查看</Button>]}
			>
				<List.Item.Meta
					title={<div style={{ marginTop: '20px' }}><h4>{item.Content}</h4></div>}
					description={
						<div>
							<div>{item.NewInterlocution&&item.NewInterlocution.AccountName+': '+item.NewInterlocution.Content }</div>
							{ item.AddTime }&nbsp;&nbsp;{item.CourseName}
						</div>
					}
				/>
			</List.Item>
		)}
	/>


	const nodataHtml = <div className={styles.nodata_container}><div className={styles.nodata}></div></div>

	const content = data.length >0 ?  listHtml:<NoDataView/>;


	return (
		<div>
			<div className={styles.answerClassify}>
				<Row>
					<Col span="1"></Col>
					<Col span="2" className={styles.active}>全部</Col>
					{/* <Col span="2"></Col>
					<Col span="3">已解决</Col>
					<Col span="2"></Col>
					<Col span="3">未解决</Col> */}
				</Row>
			</div>
			   {content}
		</div>
	);
};




export default connect(({ myClass ,paging}) => ({ myClass,paging }))((myAnswer));