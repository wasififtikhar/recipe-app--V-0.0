// AddRecipeForm.js
import React, { useState } from 'react';
import { Form, Input, Button } from 'antd';
import './App.css';

const AddRecipeForm = ({ onSave }) => {
  const [form] = Form.useForm();

  const onFinish = (values) => {
    onSave(values);
    form.resetFields();
  };

  return (
    <Form form={form} onFinish={onFinish} layout="vertical">
      <Form.Item label="Recipe Name" name="name" rules={[{ required: true, message: 'Please enter the recipe name!' }]}>
        <Input />
      </Form.Item>
      <Form.Item label="Ingredients" name="ingredients" rules={[{ required: true, message: 'Please enter the ingredients!' }]}>
        <Input.TextArea />
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit">
          Add Recipe
        </Button>
      </Form.Item>
    </Form>
  );
};

export default AddRecipeForm;
