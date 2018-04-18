import React from 'react';
import ReactDOM from 'react-dom';
import { Row, Col, Icon, Input, Tabs, List, Avatar, Spin ,message, Button, Timeline } from 'antd';
const TabPane = Tabs.TabPane;
import { connect  } from 'dva';
import { Link } from 'dva/router';
import InfiniteScroll from 'react-infinite-scroller';
const fakeDataUrl = 'https://randomuser.me/api/?results=5&inc=name,gender,email,nat&noinfo';
import NoDataView from '../common/nodata';

import styles from './index.css';

const styleObj = {
	infinite_container:{
		border: '1px solid #e8e8e8',
		borderRadius: '4px',
		padding: '8px 24px',
	},
	demo_loading: {
		position: 'absolute',
		bottom: '-40px',
		left: '50%',
	}
} 
const RecordList = (props) => {
		const {dispatch,state,handleInfiniteOnLoad} = props;
		const {data ,paging, loading, hasMore } = state;
    const ButtonText = ({ type, text }) => (
        <span>
            <Button type={type} style={{ marginRight: 8 }}>{text}</Button>
        </span>
    );
    function showTotal(total) {
        let TotalCount = data.TotalCount||data.length;
            return TotalCount&&`共 ${TotalCount} 条`;
    }
    const pagination = {
        showQuickJumper: false,
        pageSize: paging.PageSize,
        current: paging.PageIndex,
        total: paging.total,
        showTotal: showTotal,
        onChange: ((page) => { 
            dispatch({type:'paging/currentPage',page});
        }),
    };
    const listHtml= <InfiniteScroll
          initialLoad={false}
          pageStart={0}
          loadMore={handleInfiniteOnLoad.bind(this)}
          hasMore={!state.loading && state.hasMore}
          useWindow={true}
        >
        <Timeline>
            { 
            data.map((datalite)=>{
                return <Timeline.Item key={datalite[0].LookDate}>
                <Row>
                <Col span={3}>
                {datalite[0].LookDate}
                </Col>
                <Col span={19}>
               <List
            itemLayout="horizontal"
            size="large"
            dataSource={datalite}
            renderItem={item => (
                <List.Item
                    key={item.ID}
                    actions={[<Link to={"/coursedetail/"+item.ID}>
                    <Button type="defalut" >删除</Button>, <Button type="primary" >继续学习</Button>
                    </Link>]}
                >
                    <List.Item.Meta
                        avatar={<Avatar style={{ width: '160px', height: '100px' }} src={item.CoverPath} />}
                        title={<div style={{ marginTop: '20px' }}><h4>{item.Name}</h4></div>}
                        description={
                            <div>
                                {item.description}<br />
                                <div className={styles.arrow}></div>
                                已学
                            <span style={{ color: '#f97a1e', marginRight: '10px' }}>{(item.LookHours/item.TotalHours*100).toFixed(2)+'%'}</span>
                                用时
                              <span style={{ color: '#f97a1e', marginRight: '8px' }}>{item.LearnTimes}</span>
                                用时
                              <span style={{ color: '#f97a1e', marginRight: '8px' }}>{item.LookDate}</span>
                                学习至
                              <span style={{ color: '#f97a1e', marginRight: '8px' }}>{item.ChapterName}</span>
                            </div>
                        }
                    />
    
                </List.Item>
            )}
            >
            {/* {state.loading &&state.hasMore && <Spin style={styleObj.demo_loading}/>} */}
            </List> 
            </Col>
        </Row>
            </Timeline.Item>
                    
                
            })
             } 
        </Timeline>
        </InfiniteScroll>

		return data.length >0 ? listHtml:<NoDataView/>;
}

class classRecordComponent extends React.Component {
    constructor(props){
        super(props)
        this.state={
            data:[],
            paging: props.paging,
            loading: false,
            hasMore: true,
            pagingSize:8,
        }
    }
    componentDidMount(){
			const {myClass} = this.props;
			this.setState({
					data:myClass.MyLessonRecords,
			})
			 
    }
	componentWillReceiveProps(nextProps){
            const {myClass} = nextProps;
            const {pagingSize} = this.state;
			const  data = myClass.MyLessonRecords;
			if(data){//初始化数据第一页
				let datalite = data.length> pagingSize?data.slice(0,pagingSize):data;
					this.setState({
						data:datalite,
				})
			}
		}
    render() { 
      return (
		 <div className={styles.infinite_container}>
            <RecordList 
            dispatch={this.props.dispatch}  
						state = {this.state}
						handleInfiniteOnLoad= {this.handleInfiniteOnLoad}
            />
        </div>
      );
		}
	
		handleInfiniteOnLoad = (page) => {
            let {pagingSize,data} = this.state;
            const baseData = this.props.myClass.MyLessonRecords;
            let end = (page+1)*pagingSize;
            let start = page*pagingSize;
            end = end > baseData.length-1?baseData.length-1:end;
            const newdata = baseData.slice(start,end);
			if (start>end||data.length == baseData.length) {
				message.warning('已经没有了');
				this.setState({
					hasMore: false,
					loading: false,
				});
				return;
            }
            
			const hideMsg = message.loading('加载中...');
            data = data.concat(newdata)
			this.setState({
				loading: true,
			});
			setTimeout(()=>{
				this.setState({
					data,
					loading: false,
                });
                hideMsg();
                window.dispatchEvent(new Event('resize'));
			},1000)
		}

  }
  
export default connect(({myClass,paging}) => ({myClass,paging}))(classRecordComponent);
  
