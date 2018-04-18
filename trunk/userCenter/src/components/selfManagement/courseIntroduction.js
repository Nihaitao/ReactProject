import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'dva';
import { Button, Row, Col, Icon, Checkbox, Input, Form, Select, Cascader, Avatar } from 'antd';
const FormItem = Form.Item;
const Option = Select.Option;

import styles from './index.css';
class CourseIntroduction extends React.Component {
    state = {
       
    };

    


    render() {

        const nodataHtml = <div className={styles.nodata_container}><div className={styles.nodata}></div></div>
        


        return (
            <div>
                   
               {nodataHtml}
              
            </div>
        );
    }
}

export default connect(({ }) => ({

}))(Form.create()(CourseIntroduction));
