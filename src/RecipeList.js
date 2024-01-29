// RecipeList.js
import React from 'react';
import { List } from 'antd';
import './App.css';

const RecipeList = ({ recipes }) => {
  return (
    <>
    <h1 style={{ textDecoration: `underline` }}>Recipes</h1>
    <List
      dataSource={recipes}
    //   style={{ height: `auto` }}
      renderItem={(item, index) => (
        <List.Item className={`list-item recipe-item-${index}`} style={{ padding: `20px` }}>
          <List.Item.Meta title={item.name} description={item.ingredients} />
        </List.Item>
      )}
    />
    </>
  );
};

export default RecipeList;
