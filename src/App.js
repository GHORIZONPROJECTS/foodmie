import Home from "./pages/home/Home";
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { useContext } from 'react';
import { Login } from "./pages/login/Login";
import { ForgotPwd } from "./pages/forgotPwd/ForgotPwd"
import CustomersList from "./pages/customers/list/List";
import CustomersSingle from "./pages/customers/single/Single";
import CustomersNew from "./pages/customers/new/New"; 
import DishesList from "./pages/dishes/list/List";
import DishesSingle from "./pages/dishes/single/Single";
import DishesNew from "./pages/dishes/new/New"; 
import OrderHistoryList from "./pages/orderHistory/list/List";
import OrderHistorySingle from "./pages/orderHistory/single/Single";
import OrderList from "./pages/orders/list/List";
import OrderSingle from "./pages/orders/single/Single";
import DriversList from "./pages/drivers/list/List";
// import DriverSingle from "./pages/drivers/single/Single";
import NotificationList from "./pages/notifications/list/List";
import NotificationSingle from "./pages/notifications/single/Single";
import NotificationNew from "./pages/notifications/new/New"; 
import ReviewsList from "./pages/reviews/list/List";
import ReviewsSingle from "./pages/reviews/single/Single";
import AnalyticsList from "./pages/analytics/list/List";
import AnalyticsSingle from "./pages/analytics/single/Single";
import SettingsList from "./pages/settings/list/List";
import SettingsSingle from "./pages/settings/single/Single";
import SettingsNew from "./pages/settings/new/New"; 
import { dishInput, customerInput, notificationInput, settingsInput} from "./data/formSource";
import './style/dark.scss'
import { DarkModeContext } from "./context/darkModeContext";
import { AuthContext } from "./context/AuthContext";

function App() {
  
  const { darkMode } = useContext(DarkModeContext)
  const { currentUser } = useContext(AuthContext)

  const RequireAuth = ({children}) => {
    return currentUser ? children : <Navigate to="/login"/>
  }

  return (
    <div className= {darkMode ? "app dark" : "app"}>
       <BrowserRouter>
        <Routes>
          <Route path="/">
          <Route path="login" element={<Login/>}/>
          <Route path="forgotPwd" element={<ForgotPwd/>}/>
            <Route index element={
            <RequireAuth>
                 <Home user={currentUser}/>
            </RequireAuth>
            
           } />

            <Route path="customers">
              <Route index element={
                <RequireAuth>
                 <CustomersList />
              </RequireAuth>
              }/>
              <Route path=":customerId" element={
              <RequireAuth>
                  <CustomersSingle/>
              </RequireAuth>
              
              }/>
              <Route path="new" element={
                <RequireAuth>
                  <CustomersNew inputs={customerInput} title="Add New Customer"/>
                </RequireAuth>
              }/>
            </Route>
            <Route path="dishes">
              <Route index element={
               <RequireAuth>
                <DishesList />
               </RequireAuth>
              }/>
              <Route path=":dishId" element={
                <RequireAuth>
                 <DishesSingle/>
                </RequireAuth>
              }/>
              <Route path="new" element={
                <RequireAuth>
                  <DishesNew inputs={dishInput} title="Add New Dish"/>
                </RequireAuth>
              }/>
              </Route>
            </Route>
            
            <Route path="orders">
              <Route index element={
                <RequireAuth>
                  <OrderList/>
                </RequireAuth>
              }/>
              <Route path=":orderId" element={
              <RequireAuth>
                  <OrderSingle/>
              </RequireAuth>
              }/>
            
            </Route>

            <Route path="orderHistory">
              <Route index element={
                <RequireAuth>
                  <OrderHistoryList/>
                </RequireAuth>
              }/>
              <Route path=":orderHistoryId" element={
              <RequireAuth>
                  <OrderHistorySingle/>
              </RequireAuth>
              }/>
            
            </Route>

            <Route path="drivers">
              <Route index element={
                <RequireAuth>
                  <DriversList/>
                </RequireAuth>
              }/>
              {/* <Route path=":driverId" element={
              <RequireAuth>
                  <DriverSingle/>
              </RequireAuth>
              }/> */}
            
            </Route>
            <Route path="notifications">
              <Route index element={
               <RequireAuth>
                <NotificationList />
               </RequireAuth>
              }/>
              <Route path=":notificationId" element={
                <RequireAuth>
                 <NotificationSingle/>
                </RequireAuth>
              }/>
              <Route path="new" element={
                <RequireAuth>
                  <NotificationNew inputs={notificationInput} title="Add New Dish"/>
                </RequireAuth>
              }/>
              </Route>
            <Route path="reviews">
              <Route index element={
               <RequireAuth>
                <ReviewsList />
               </RequireAuth>
              }/>
              <Route path=":reviewId" element={
                <RequireAuth>
                 <ReviewsSingle/>
                </RequireAuth>
              }/>
            
              </Route>
              <Route path="analytics">
              <Route index element={
               <RequireAuth>
                <AnalyticsList />
               </RequireAuth>
              }/>
              <Route path=":analyticsId" element={
                <RequireAuth>
                 <AnalyticsSingle/>
                </RequireAuth>
              }/>
           
              </Route>

              <Route path="settings">
              <Route index element={
               <RequireAuth>
                <SettingsList />
               </RequireAuth>
              }/>
              <Route path=":settingsId" element={
                <RequireAuth>
                 <SettingsSingle/>
                </RequireAuth>
              }/>
              <Route path="new" element={
                <RequireAuth>
                  <SettingsNew inputs={settingsInput} title="Add Settings"/>
                </RequireAuth>
              }/>
              </Route>
        </Routes>
  </BrowserRouter>
    </div>
  );
}

export default App;
