import React from 'react';
import ReactDOM from 'react-dom';
import {connect} from 'dva';
import {
		Row,
		Col,
		Icon,
		Input,
		Form,
		List,
		Avatar,
		Button,
		Timeline
} from 'antd';
const FormItem = Form.Item;

const myComments = ({
		dispatch,
		paging,
		myClass,
		form: {
				getFieldDecorator,
				validateFieldsAndScroll
		}
}) => {
		const data = myClass.MyComments;
		// const data = [     {         title: '辛亥革命，中国近代史的里程碑',         class: '中国近代史',
		//         chapter: '第一章',         time: '2017-08-19 19：02',     },     {
		//  title: '辛亥革命，中国近代史的里程碑',         class: '中国近代史',         chapter: '第一章',
		//     time: '2017-08-19 19：02',     },     {         title: '辛亥革命，中国近代史的里程碑',
		//       class: '中国近代史',         chapter: '第一章',         time: '2017-08-19
		// 19：02',     } ];

		const ButtonText = ({type, text}) => (
				<span>
						<Button type={type} style={{
								marginRight: 8
						}}>{text}</Button>
				</span>
		);

		const formItemLayout = {
				labelCol: {
						xs: {
								span: 15
						},
						sm: {
								span: 5
						}
				},
				wrapperCol: {
						xs: {
								span: 15
						},
						sm: {
								span: 16
						}
				}
		};

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
				dispatch({type: 'myClass/fetchMyComments',payload:paging});
			}),
	};

		return (
				<div>
						<List
								style={{
								paddingLeft: '20px'
						}}
								pagination={pagination}
								itemLayout="horizontal"
								size="large"
								dataSource={data}
								renderItem={item => (
								<List.Item
										key={item.ID}
										actions={[ < ButtonText type = "defalut" text = "删除" />, < ButtonText type = "primary" text = "编辑" />
								]}>
										<List.Item.Meta
												title={< div style = {{ marginTop: '20px' }} > <h4>{item.Content}</h4> </div>}
												description={< div > {
												item.AddTime
										} < span style = {{ marginLeft: '20px', marginRight: '10px' }} > {
												item.CourseName
										} </span> </div >}/>
								</List.Item>
						)}/>
						<div
								style={{
								background: '#f0f2f5',
								height: '145px',
								marginTop: '20px'
						}}>
								<Form
										style={{
										paddingTop: '20px',
										marginLeft: '40px'
								}}>
										<FormItem {...formItemLayout} label="">
												{getFieldDecorator('type', {})(<Input
														style={{
														height: '60px',
														width: '1050px'
												}}/>)}
										</FormItem>

								</Form>

								<div
										style={{
										float: 'right',
										paddingRight: '10px'
								}}>
										<Button style={{
												marginRight: '10px'
										}}>取消</Button>
										<Button
												type="primary"
												style={{
												backgroundColor: 'red',
												borderColor: 'red'
										}}>确认</Button>
								</div>

						</div>
				</div>
		);
};

export default connect(({myClass, paging}) => ({myClass, paging}))(Form.create()(myComments));