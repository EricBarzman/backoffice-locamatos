import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './routes/home/Home';
import Header from './components/header/Header';

import CategoryPage from './routes/category/one';
import CategoriesPage from './routes/category/index';
import CategoryCreateOrEdit from './routes/category/createOrEdit';

import SubCategoryPage from './routes/subcategory/one';
import SubCategoriesPage from './routes/subcategory/index';
import SubCategoryCreateOrEdit from './routes/subcategory/createOrEdit';

import ProductsList from './routes/product';
import ProductPage from './routes/product/oneProduct';
import ProductCreateOrEdit from './routes/product/createOrEdit';
import UsersList from './routes/user';
import UserCreateOrEdit from './routes/user/createOrEdit';
import UserPage from './routes/user/oneProduct';


function App() {
  return (
    <>
      <BrowserRouter>
        <div className='flex flex-row w-screen'>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            
            <Route path="/user" element={<UsersList />} />
            <Route path="/user/add" element={
              <>
                <UsersList />
                <UserCreateOrEdit />
              </>
            } />
            <Route path="/user/:id" element={
              <>
                <UsersList />
                <UserPage />
              </>
            } />
            <Route path="/user/:id/edit" element={
              <>
                <UsersList />
                <UserCreateOrEdit />
              </>
            } />

            <Route path="/product" element={<ProductsList />} />
            <Route path="/product/add" element={
              <>
                <ProductsList />
                <ProductCreateOrEdit />
              </>
            } />
            <Route path="/product/:id" element={
              <>
                <ProductsList />
                <ProductPage />
              </>
            } />
            <Route path="/product/:id/edit" element={
              <>
                <ProductsList />
                <ProductCreateOrEdit />
              </>
            } />

            <Route path="/category" element={<CategoriesPage />} />
            <Route path="/category/add" element={
              <>
                <CategoriesPage />
                <CategoryCreateOrEdit />
              </>
            } />
            <Route path="/category/:id" element={
              <>
                <CategoriesPage />
                <CategoryPage />
              </>
            } />
            <Route path="/category/:id/edit" element={
              <>
                <CategoriesPage />
                <CategoryCreateOrEdit />
              </>
            } />

            <Route path="/subcategory" element={<SubCategoriesPage />} />
            <Route path="/subcategory/add" element={
              <>
                <SubCategoriesPage />
                <SubCategoryCreateOrEdit />
              </>
            } />
            <Route path="/subcategory/:id" element={
              <>
                <SubCategoriesPage />
                <SubCategoryPage />
              </>
            } />
            <Route path="/subcategory/:id/edit" element={
              <>
                <SubCategoriesPage />
                <SubCategoryCreateOrEdit />
              </>
            } />

            <Route />

            <Route path="/user" element={<SubCategoriesPage />} />
            <Route path="/user/add" element={
              <>
                <SubCategoriesPage />
                <SubCategoryCreateOrEdit />
              </>
            } />
            <Route path="/user/:id" element={
              <>
                <SubCategoriesPage />
                <SubCategoryPage />
              </>
            } />
            <Route path="/user/:id/edit" element={
              <>
                <SubCategoriesPage />
                <SubCategoryCreateOrEdit />
              </>
            } />

            <Route />

          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
