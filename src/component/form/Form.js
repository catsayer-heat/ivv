import React, {Component} from 'react'
import ajaxReq from '../../common/ajaxReq'
import './form.scss'

class Form extends Component {
    constructor(props) {
        super(props)
        this.state = {
            showForm: [],
            fixForm: [],
        }
    }

    //设置表单数据--展示
    setForm = data => {
        return data.map((val, index)=>{
            return (
                <li key={index} className="form-cnt">
                    <span>{index+1}</span>
                    <span>{val.name}</span>
                    <span>{val.type}</span>
                    <span className="operate">
                        <em>编辑</em>
                        <em>删除</em>
                        <em>上移</em>
                        <em>下移</em>
                    </span>
                </li>
            )
        })
    }
    //请求表单数据
    componentDidMount() {
        ajaxReq.call(this, {
            url: '/power/form/get_form'
        }).then(res=>{
            this.setState({
                showForm: res.data.custom,
                fixForm: res.data.fixed
            })
        })
    }
    render() {
        return (
            <div className="form">
                <div className="form-layout">
                    <div className="form-name">
                        展示字段
                    </div>
                    <div className="form-props">
                        <span>序号</span>
                        <span>字段名</span>
                        <span>类别</span>
                        <span className="operate">操作</span>
                    </div>
                    <ul>
                        {this.setForm(this.state.showForm)}
                    </ul>
                    <div className="form-name">
                        更多字段
                    </div>
                    <ul>
                        {this.setForm(this.state.fixForm)}
                    </ul>
                </div>
                <span className="add-form">
                    <i className="el-icon-plus"></i>
                </span>
            </div>
        )
    }
}

export default Form
