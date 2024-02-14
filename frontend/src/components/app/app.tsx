import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AppRoute } from '../../const';
import { AddItemPage } from '../../pages/add-item/add-item';
import { EditItemPage } from '../../pages/edit-item/edit-item';
import { LoginPage } from '../../pages/login/login';
import { ProductPage } from '../../pages/product/product';
import { ProductListPage } from '../../pages/product-list/product-list';
import { RegistrationPage } from '../../pages/registration/registration';
import { Error404Page } from '../../pages/error-404/error-404';
import PrivateRoute from '../private-route/private-route';

export const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path={AppRoute.Root} element={<LoginPage/>}/>
      <Route path={AppRoute.Regitration} element={<RegistrationPage/>}/>

      <Route
        path={AppRoute.Add}
        element={
          <PrivateRoute isAuthorazed>
            <AddItemPage/>
          </PrivateRoute>
        }
      />
      <Route
        path={AppRoute.Edit}
        element={
          <PrivateRoute isAuthorazed>
            <EditItemPage/>
          </PrivateRoute>
        }
      />
      <Route
        path={AppRoute.Product}
        element={
          <PrivateRoute isAuthorazed>
            <ProductPage/>
          </PrivateRoute>
        }
      />
      <Route
        path={AppRoute.ProductList}
        element={
          <PrivateRoute isAuthorazed>
            <ProductListPage/>
          </PrivateRoute>
        }
      />

      <Route path='*' element={<Error404Page/>}/>
    </Routes>
  </BrowserRouter>
);
