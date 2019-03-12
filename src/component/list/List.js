import React, { Component } from 'react'
import { Table, Button } from 'element-react'
import ajaxReq from '../../common/ajaxReq'
import './list.scss'

class List extends Component {
  constructor(props) {
    super(props);

    this.state = {
      columns: [
        {
          label: "日期",
          prop: "date",
          width: 180
        },
        {
          label: "姓名",
          prop: "name",
          width: 180
        },
        {
          label: "地址",
          prop: "address"
        },
        {
          label: "操作",
          width: 190,
          prop: "address",
          render: function () {
            return (
              <span>
                <Button plain={true} type="info" size="small">详情</Button>
                <Button type="primary" size="small">编辑</Button>
                <Button type="danger" size="small">删除</Button>
              </span>
            )
          }
        }
      ],
      data: [{
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }]
    }
  }
  componentDidMount() {
    ajaxReq.call(this,{
      url: '/artist/get_artistsList',
      params: {
        page: 1,
        page_size: 10
      }
    }).then(res=>{
      console.log(res)
    })
  }
  render() {
    return (
      <div className="list">
        <Table
          style={{ maxWidth: '100%' }}
          columns={this.state.columns}
          maxHeight={700}
          data={this.state.data}
          border={true}
        />
      </div>
    )
  }
}

export default List