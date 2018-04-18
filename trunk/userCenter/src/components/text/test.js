import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'dva';
import { Row, Col, Icon, Input, Tabs, Table, Button } from 'antd';
const TabPane = Tabs.TabPane;

const MAX_SHOW_NUM = 2;

class HotDiscuss extends Component {

    static propTypes = {
        //验证
        repliedCommentList: PropTypes.array,
    };

    constructor(props) {
        super(props);
        this.state = {
            //子评论折叠
            isClick: true,
            //评论
            disClick: false,
            //点赞
            handle_like: false,
            //子评论点赞
            child_handle_like: false,

        }
    }

    //生命周期
    componentWillMount() {
        //要数据
        this.props.getDiscussListData(this.props.routeParams);
        //分享
        YztApp._setShareIsAvailable(false);
    }


//子评论
    renderContent(detail, repliedCommentList) {

        //childitem: 子评论数组
        //isShowMoreBtn: 子评论是否显示折叠几个字

        let childitem, isShowMoreBtn;
        if (repliedCommentList && repliedCommentList.length) {
            
            // >2条显示文字
            isShowMoreBtn = repliedCommentList.length > 2;
            
            // 展开/折叠
            repliedCommentList = repliedCommentList.slice(0, this.state.isClick ? MAX_SHOW_NUM : repliedCommentList.length);
            
            childitem = repliedCommentList.map((c, k) => {
                return (
                    <div key={k} className="child_box">
                            <p className="child_img">
                                <img src={c.imageUrl} alt=""/>
                            </p>
                        <div className="dis_child_text" >
                            <div className="child_context">
                                <span ref="child_like" className="dis_praise">{c.likeCount}</span>
                                <p className="dis_child_left">
                                    <span className="dis_child_name" >{c.senderName}</span>
                                    <span className="dis_child_name hf" >回复</span>
                                    <span className="dis_child_name" >{c.receiverName}</span>
                                </p>
                            </div>
                            <p className="dis_date">{c.createdTimeStr}</p>
                            <p className="child_text">{c.content}</p>
                        </div>
                    </div>
                )
            })
        }
       
    }

    render() {
        const {
            detail,
            //detail.repliedCommentList,
            } = this.props;
        return this.renderContent(detail, detail.repliedCommentList)
    }


// 展开/收起
    child_open(){
        this.setState({
            isClick: !this.state.isClick,
        })
    }

}
