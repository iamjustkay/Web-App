import React from 'react'

import { Container, Row, Col } from 'react-bootstrap';
import { Button, Table, Checkbox, Form, Input,Select } from "antd";

const { Option } = Select;
const handleChange = (value) => {
  console.log(`selected ${value}`);
};
const onFinish = (values) => {
  console.log('Success:', values.Storename);

  

};

export default function Bookticket() {

  return (
    <Container>
      <Form 
  onFinish={onFinish}

  
  
  >
      <Row>
       <Col sm>
       <Form.Item
            label="Full Name"
              name="fullname"
            rules={[
                {
                 required: true,
                   message: 'Please input your fullname!',
                },
              ]}


            >
             <Input className='input_height' />
           </Form.Item>
           <Form.Item
            label="Contact"
              name="contact"
             
            rules={[
                {
                 required: true,
                   message: 'Please input  Contact!',
                },
              ]}
            >
             <Input  className='input_height'   />
           </Form.Item>
       </Col>
       <Col sm>
       <Form.Item
            label="Location"
              name="location"
            rules={[
                {
                 required: true,
                   message: 'Please input location!',
                },
              ]}
            >
             <Input className='input_height' />
           </Form.Item>
           <Form.Item
            label="Bus"
              name="buses"
            rules={[
                {
                 required: true,
                   message: 'Please input your preferred bus!',
                },
              ]}
            >
            <Select className='input_height'
      defaultValue="Select Bus" onChange={handleChange}
        >
     
  
      <Option value="Vip">VIP</Option>
      <Option value="Stc">STC</Option>
      <Option value="2mexpress">2m Express</Option>
      <Option value="Guo">GUO Transport</Option>
    </Select>
           </Form.Item>
       </Col>
       <Col sm>
       <Form.Item
            label="No. of Tickets"
              name="tickets"
            rules={[
                {
                 required: true,
                   message: 'Please input number of tickets!',
                },
              ]}
            >
             <Input className='input_height' />
           </Form.Item>
           <Form.Item
            label="Email"
              name="email"
            rules={[
                {
                 required: true,
                   message: 'Please input your email!',
                },
              ]}
            >
             <Input className='input_height' />
           </Form.Item>
       </Col> 
      </Row>
      <Row>
        <Col>
        <Button type="primary" htmlType="submit">Book Now</Button>
        </Col>
      </Row>
      </Form>
      <div>
       
      </div>
    </Container>
  )
}