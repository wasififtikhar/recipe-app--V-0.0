// App.js
import React, { useEffect, useState } from 'react';
import { Layout, Menu } from 'antd';
import AddRecipeForm from './AddRecipeForm';
import RecipeList from './RecipeList';
import './App.css';


const { Header, Content, Footer } = Layout;

const App = () => {
  const [recipes, setRecipes] = useState([]);
  const [changeTab, setChangedTab] = useState(true);

  useEffect(() => {
    // Load recipes from local storage when the component mounts
    const storedRecipes = localStorage.getItem('recipes');
    if (storedRecipes) {
      setRecipes(JSON.parse(storedRecipes));
    }
  }, []); // The empty dependency array ensures this effect runs only once, similar to componentDidMount

  const handleSaveRecipe = (recipe) => {
    const newRecipes = [...recipes, recipe];
    setRecipes(newRecipes);

    // Save updated recipes to local storage
    localStorage.setItem('recipes', JSON.stringify(newRecipes));
  };
  return (
    <Layout className='ant-layout'>
      <Header className='ant-layout-header'>
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']} className='ant-menu'>
          <Menu.Item key="1"  onClick={() => setChangedTab(true)} className='ant-menu-item'>Add Recipe</Menu.Item>
          <Menu.Item key="2" onClick={() => setChangedTab(false)} className='ant-menu-item'>Recipe List</Menu.Item>
        </Menu>
      </Header>
      <Content style={{ padding: '50px', backgroundColor: 'gray', overflowY: `scroll`}} className='ant-layout-content'>
        {/* Use a router to switch between pages */}
        {/* For simplicity, I'm using a conditional rendering */}
        {changeTab ? (
          <AddRecipeForm onSave={handleSaveRecipe} />
        ) : (
          <RecipeList recipes={recipes} />
        )}
      </Content>
      <Footer style={{ textAlign: 'center' }}>Recipe App ©2024 Created by Muhammad Wasif</Footer>
    </Layout>
  );
};

export default App;
