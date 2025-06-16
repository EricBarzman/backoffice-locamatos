import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './routes/home/Home';
import Header from './components/header/Header';

import CategoryPage from './routes/category/one';
import CategoriesPage from './routes/category/index';
import CategoryCreateOrEdit from './routes/category/createOrEdit';

import SubCategoryPage from './routes/subcategory/one';
import SubCategoriesPage from './routes/subcategory/index';
import SubCategoryCreateOrEdit from './routes/subcategory/createOrEdit';


function App() {
  return (
    <>
      <BrowserRouter>
        <div className='flex flex-row w-screen'>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/product" element={<Home />} />
            <Route path="/user" element={<Home />} />
            
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
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
