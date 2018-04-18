import React from 'react';
import ReactDOM from 'react-dom';
import {connect } from 'dva';
import {Link } from 'dva/router';
import { Row, Col, Icon, Input, Tabs, List, Avatar, Button, Timeline } from 'antd';

import NoDataView from '../common/nodata';
const TabPane = Tabs.TabPane;


import styles from './index.css';

const AlreadypayClass = ({dispatch, myClass,paging}) => {
		// console.log(myClass.MyLessons);
		const data = myClass.MyLessons;
		// const data = [
		//     {
		//         avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
		//         title: '金融市场学',
		//         description: '一级建造师  赵静满 407课',
		//         progress: '13%',
		//         time: '10分',
		//         class: '1-1',
		//         content: '已学 13%  用时 10分  学习至 1-1 课程介绍'
		//     },
		//     {
		//         avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
		//         title: '金融市场学',
		//         description: '一级建造师  赵静满 407课',
		//         progress: '13%',
		//         time: '10分',
		//         class: '1-1',
		//         content: '已学 13%  用时 10分  学习至 1-1 课程介绍'
		//     },
		//     {
		//         avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
		//         title: '企业管理咨询',
		//         description: '一级建造师  赵静满 407课',
		//         progress: '13%',
		//         time: '10分',
		//         content: '已学 13%  用时 10分  学习至 1-1 课程介绍'
		//     }
		// ];

		const ButtonText = ({ type, text }) => (
				<span>
					
						<Button  type={type} style={{ marginRight: 8 }}><Icon type="play-circle" style={{ marginRight: '5px' }} />{text}</Button>
				</span>
		);
		
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
					dispatch({type: 'myClass/fetchMyLessons',payload:paging});
				}),
		};


		const listHtml = <List
				pagination={pagination}
				itemLayout="horizontal"
				size="large"
				dataSource={data}
				renderItem={item => (
						<List.Item
								key={item.ID}
								actions={[<Link to={"/coursedetail/"+item.ID}>
								<ButtonText type={item.ChapterName?"primary":"danger"} text={item.ChapterName?"继续学习":"开始听课"} />
								</Link>
								]}
						>
								<List.Item.Meta
										avatar={<Avatar style={{ width: '160px', height: '100px',border:'1px solid #eee' }} src={item.CoverPath} />}
										title={<div style={{ marginTop: '20px' }}><h4>{item.Name}</h4></div>}
										description={
												<div>
													{item.description}<br />
													<div className={styles.arrow}></div>
													已学&nbsp;
													<span style={{ color: '#f97a1e', marginRight: '8px' }}>{(item.LookHours/item.TotalHours*100).toFixed(2)+'%'}</span>
													用时&nbsp;
													<span style={{ color: '#f97a1e', marginRight: '8px' }}>{item.LearnTimes}</span>
													学习至&nbsp;
													<span style={{ color: '#f97a1e', marginRight: '8px' }}>{item.ChapterName||'暂无'}</span>
													{/* {item.ChapterName&&<span style={{ color: '#f97a1e', marginLeft: '10px' }}>
													继续学习</span>} */}
												</div>
										}
								/>
						</List.Item>
				)}
		/>

		const content = data.length >0  ? listHtml:<NoDataView/>;



		return (
				<div>
						 {content}
				</div>
		);
};



export default connect(({ myClass,paging}) => ({myClass,paging}))(( AlreadypayClass));
