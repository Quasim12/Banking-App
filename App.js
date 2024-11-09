import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import Homee from './src/pages/Homee';
import SignUp from './src/pages/SignUp';
import SignIn from './src/pages/SignIn';
import Notification from './src/pages/Notification';
import CartArea from './src/pages/CartArea';
import DrawerNav from './src/components/DrawerNav';
import AllPages from './src/pages/AllPages';
import AllComponents from './src/pages/AllComponents';
import Saving from './src/pages/Saving';
import Transaction from './src/pages/Transaction';
import TransactionDetails from './src/pages/TransactionDetails';
import BillsDetails from './src/pages/BillsDetails';
import BillPay from './src/pages/BillPay';
import Blog from './src/pages/Blog';
import BlogDetail from './src/pages/BlogDetail';
import About from './src/pages/About';
import Contact from './src/pages/Contact';
import ForgotPassword from './src/pages/ForgotPassword';
import UserVerification from './src/pages/UserVerification';

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

const DrawerNavigator = () => (
  <Drawer.Navigator drawerContent={(props) => <DrawerNav {...props} />} screenOptions={{ headerShown: false }}>
    <Drawer.Screen name="Homee" component={Homee} />
    <Drawer.Screen name="AllPages" component={AllPages} />
    <Drawer.Screen name="Saving" component={Saving} />
    <Drawer.Screen name="Transaction" component={Transaction} />
    <Drawer.Screen name="TransactionDetails" component={TransactionDetails} />
    <Drawer.Screen name="BillsDetails" component={BillsDetails} />
    <Drawer.Screen name="BillPay" component={BillPay} />
    <Drawer.Screen name="Blog" component={Blog} />
    <Drawer.Screen name="BlogDetail" component={BlogDetail} />
    <Drawer.Screen name="About" component={About} />
    <Drawer.Screen name="Contact" component={Contact} />
    <Drawer.Screen name="AllComponents" component={AllComponents} />
    <Drawer.Screen name="CartArea" component={CartArea} />
    <Drawer.Screen name="Notification" component={Notification} />
    <Drawer.Screen name="SignUp" component={SignUp} />
    <Drawer.Screen name="SignIn" component={SignIn} />
    <Drawer.Screen name="ForgotPassword" component={ForgotPassword} />
    <Drawer.Screen name="UserVerification" component={UserVerification} />
  </Drawer.Navigator>
);

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Main" component={DrawerNavigator} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
