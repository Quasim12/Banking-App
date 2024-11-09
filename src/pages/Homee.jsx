import React, { useState, useEffect, useCallback } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, TouchableWithoutFeedback, Animated } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useFocusEffect } from '@react-navigation/native';
import SavingGoals from '../components/SavingGoals';
import History from '../components/History';
import CartAreaa from '../components/My_Cart';
import Transactions from '../components/Transactions';
import SendMoney from '../components/SendMoney';
import PayMonthlyBill from '../components/PayMonthlyBill';
import RecentPosts from '../components/RecentPosts';
import CopyRight from '../components/CopyRight';
import Footer from '../components/Footer';
import CustomBottomSheet from '../pages/CustomBottomSheet';
import Notification from '../components/Notification';

const TopAlert = ({ visible, onClose }) => {
  const [slideAnim] = useState(new Animated.Value(-100)); // Initial position of the alert

  useEffect(() => {
    if (visible) {
      Animated.timing(slideAnim, {
        toValue: 0, // Move the alert to its visible position
        duration: 300,
        useNativeDriver: true,
      }).start();
      setTimeout(() => {
        Animated.timing(slideAnim, {
          toValue: -200, // Move the alert out of view
          duration: 300,
          useNativeDriver: true,
        }).start(onClose);
      }, 1000); // Alert will be visible for 1 seconds
    }
  }, [visible]);

  return (
    <Animated.View style={[styles.alertContainer, { transform: [{ translateY: slideAnim }] }]}>
      <Notification />
    </Animated.View>
  );
};

const Homee = ({ navigation }) => {
  const [isBottomSheetVisible, setBottomSheetVisible] = useState(false);
  const [alertVisible, setAlertVisible] = useState(false);

  const openBottomSheet = () => {
    setBottomSheetVisible(true);
  };

  const closeBottomSheet = () => {
    setBottomSheetVisible(false);
  };

  const handlePress = () => {
    if (isBottomSheetVisible) {
      closeBottomSheet();
    }
  };

  const openDrawer = () => {
    navigation.openDrawer();
  };

  const showAlert = useCallback(() => {
    setAlertVisible(true);
  }, []);

  useFocusEffect(
    useCallback(() => {
      showAlert();
    }, [showAlert])
  );

  return (
    <TouchableWithoutFeedback onPress={handlePress}>
      <View style={styles.container}>
        <TopAlert
          visible={alertVisible}
          onClose={() => setAlertVisible(false)}
        />
        <View style={styles.header}>
          <TouchableOpacity onPress={openDrawer}>
            <Icon name="bars" size={24} color="#fff" style={styles.icon} />
          </TouchableOpacity>
          <Text style={styles.headerText}>Bankapp</Text>
          <View style={styles.headerRight}>
            <TouchableOpacity>
              <Icon name="envelope" size={24} color="#fff" style={styles.icon} />
            </TouchableOpacity>
            <TouchableOpacity onPress={showAlert}>
              <Icon name="bell" size={24} color="#fff" style={styles.icon}  onPress={() => navigation.navigate('Notification')} />
            </TouchableOpacity>
            <TouchableOpacity>
              <Icon name="user-circle" size={24} color="#fff" style={styles.icon} />
            </TouchableOpacity>
          </View>
        </View>
        <ScrollView contentContainerStyle={styles.scrollViewContent}>
          <View style={styles.balanceContainer}>
            <Text style={styles.welcomeText}>Welcome!</Text>
            <Text style={styles.nameText}>Dear Mr Suvro - Bankapp Wallet</Text>
            <View style={styles.totalBalanceContainer}>
              <Icon name="university" size={48} color="#fff" style={styles.bankIcon} />
              <Text style={styles.balanceText}>Total Balance</Text>
              <Text style={styles.amountText}>$56,985.00</Text>
            </View>
          </View>

          <View style={styles.addBalanceContainer}>
            <Text style={styles.addBalanceText}>Add Balance</Text>
            <TouchableOpacity onPress={openBottomSheet}>
              <Icon name="plus" size={20} color="#5624d0" style={styles.addIcon} />
            </TouchableOpacity>
          </View>

          <View style={styles.buttonRow}>
            <TouchableOpacity style={styles.button} onPress={openBottomSheet}>
              <Text style={styles.buttonText}>Withdraw</Text>
              <Icon name="arrow-down" size={20} color="#fff" style={styles.buttonIcon} />
            </TouchableOpacity>
            <TouchableOpacity style={[styles.button, styles.sendButton]} onPress={openBottomSheet}>
              <Text style={styles.buttonText}>Send</Text>
              <Icon name="arrow-right" size={20} color="#fff" style={styles.buttonIcon} />
            </TouchableOpacity>
          </View>

          <View style={styles.buttonRow}>
            <TouchableOpacity style={styles.button} onPress={openBottomSheet}>
              <Text style={styles.buttonText}>Cards</Text>
              <Icon name="credit-card" size={20} color="#fff" style={styles.buttonIcon} />
            </TouchableOpacity>
            <TouchableOpacity style={[styles.button, styles.exchangeButton]} onPress={openBottomSheet}>
              <Text style={styles.buttonText}>Exchange</Text>
              <Icon name="arrow-down" size={20} color="#fff" style={styles.buttonIcon} />
            </TouchableOpacity>
          </View>

          <SavingGoals />
          <History />
          <CartAreaa />
          <Transactions />
          <SendMoney />
          <PayMonthlyBill />
          <RecentPosts />
          <CopyRight />
        </ScrollView>
        <View style={styles.footerContainer}>
          <Footer />
        </View>
        <CustomBottomSheet isVisible={isBottomSheetVisible} onClose={closeBottomSheet} />
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f2f2f2",
  },
  alertContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 1000, // Ensure the alert appears above other elements
  },
  header: {
    backgroundColor: "blue",
    padding: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  headerText: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
    marginLeft: 75,
  },
  headerRight: {
    flexDirection: "row",
  },
  icon: {
    marginLeft: 15,
  },
  scrollViewContent: {
    flexGrow: 1,
    paddingBottom: 80, 
  },
  balanceContainer: {
    marginTop: 20,
    marginLeft: 24,
    width: "90%",
    height: 130,
    marginBottom: 20,
    borderRadius: 10,
    backgroundColor: "#5624d0",
    padding: 30,
    alignItems: "center",
  },
  welcomeText: {
    marginTop: -20,
    color: "#fff",
    fontSize: 18,
  },
  nameText: {
    color: "#fff",
    fontSize: 16,
    marginBottom: 10,
  },
  totalBalanceContainer: {
    alignItems: "center",
    padding: 6,
    backgroundColor: "lightgrey",
    borderRadius: 10,
    width: "100%",
  },
  bankIcon: {
    marginVertical: 4,
    color: "#5624d0",
  },
  balanceText: {
    color: "black",
    fontSize: 24,
    marginTop: 5,
  },
  amountText: {
    marginBottom: 10,
    color: "blue",
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 5,
  },
  addBalanceContainer: {
    marginTop: 80,
    marginBottom: 10,
    padding: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#fff",
    marginHorizontal: 20,
    borderRadius: 5,
    elevation: 3,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    borderRightWidth: 3,
    borderLeftWidth: 3,
    borderColor: "#5624d0",
  },
  addBalanceText: {
    color: "#5624d0",
    fontSize: 16,
    fontWeight: "bold",
  },
  addIcon: {
    marginLeft: 10,
  },
  buttonRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 20,
    marginVertical: 10,
  },
  button: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#5624d0",
    paddingVertical: 20,
    paddingHorizontal: 30,
    borderRadius: 10,
    flex: 1,
    marginHorizontal: 5,
    justifyContent: "center",
  },
  sendButton: {
    backgroundColor: "#ff4d4d",
  },
  exchangeButton: {
    backgroundColor: "#4dbd74",
  },
  buttonIcon: {
    marginLeft: 10,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
  },
  footerContainer: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    height: 70, // adjust the height to fit your footer content
    backgroundColor: "#fff", // add a background color to make it visible
    padding: 3,
  },
});

export default Homee;
