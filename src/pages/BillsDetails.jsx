import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, ScrollView } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import Home from '../components/Home';
import CopyRight from '../components/CopyRight';
import Footer from '../components/Footer';
import BackToHome from '../components/BackToHome';
const BillsDetails = () => {
  return (
    <>
    <View style={styles.container}>
      <View style={styles.header}>
      <View style={styles.row}>
        <BackToHome/>
        
        <View style={styles.col6}>
          <Text style={styles.pageName}>Monthly Bill</Text>
        </View>
        <TouchableOpacity
          style={styles.col3}
          onPress={() => console.log("Search")}
        >
          <FontAwesome name="search" size={24} color="white" />
        </TouchableOpacity>
      </View>
      </View>
  
      <View style={styles.pageTitle}>
          <Home />
          <Text style={styles.floatRight}>Bill Pay</Text>
        </View>

      <View style={styles.billPayArea}>
        <View style={styles.sectionTitle}>
          <Text style={styles.title}>Pay Monthly Bill</Text>
          <TouchableOpacity onPress={() => console.log('Notification')}>
            <FontAwesome name="bell" size={24} color="blue" />
          </TouchableOpacity>
        </View>
        <View style={styles.billPayInner}>
          {renderBills()}
        </View>
      </View>
    </View>

    {/* <CopyRight/> */}
    <CopyRight/>
    <Footer/>
    </>
  );
};

const renderBills = () => {
  const bills = [
    { id: 1, name: 'Envato.com', description: 'Standard Elements Services Subscription', amount: '$169', img:require('../../assets/images/envato.jpg') },
    { id: 2, name: 'Apple.com', description:  'Apple Laptop Monthly Pay System            ', amount: '$130', img:require('../../assets/images/apple.jpg') },
    { id: 3, name: 'Amazon.com', description: 'Standard Domain Services Subscription   ', amount: '$130', img:require('../../assets/images/amazon.jpg') },
  ];

  return bills.map(bill => (
    <View key={bill.id} style={styles.baBillPayInner}>
<View>
      <View style={styles.baSingleBillPay}>
        <Image source={bill.img} style={styles.thumb} />
        <View style={styles.details}>
          <Text style={styles.billName}>{bill.name}</Text>
          <Text style={styles.billDescription}>{bill.description}</Text>
        </View>
      </View>
      <View style={styles.amountInner}>
        <Text style={styles.amount}>{bill.amount}</Text>
        <TouchableOpacity style={styles.btnBlue} onPress={() => console.log('Pay Now')}>
          <Text style={styles.btnText}>Pay Now</Text>
        </TouchableOpacity>
      </View>
      </View>
    </View>  
  ));
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f9f9f9',
    
  },
  // header: {
  //   height: 60,
  //   alignItems: 'center',
  //   justifyContent: 'center',
  //   backgroundColor: 'white',
  // },
  row: {
    alignItems: "center",
    flexDirection: "row",
    padding: 5,
    backgroundColor: "blue",
    
  },

  col3: {
    justifyContent: "center",
    alignItems: "center",
    marginRight: 10,
  },
  col6: {
    flex: 4,
    justifyContent: "center",
    alignItems: "center",
  },
  pageName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: "white",
  },
  pageTitle: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    paddingVertical: 20,
    borderBottomWidth: 1,
    borderColor: "lightgrey",
  },
  billPayArea: {
    padding: 20,

  },
  sectionTitle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
    
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    
  },
  billPayInner: {
    flexDirection: "column",
  },
  baBillPayInner: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 15,
    backgroundColor: "white",
    padding: 10,
    borderRadius: 10,
  },
  baSingleBillPay: {
    flexDirection: "row",
    alignItems: "center",
    paddingBottom: 20,
    borderBottomWidth: 1, // This creates the line
    borderBottomColor: "#ddd",
  },
  thumb: {
    width: 50,
    height: 50,
    marginRight: 10,
  },
  details: {
    justifyContent: 'center',
  },
  billName: {
    marginLeft: 10,
    fontSize: 16,
    fontWeight: "bold",
  },
  billDescription: {
    marginLeft: 10,
    fontSize: 14,
    color: "gray",
  },
  amountInner: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  amount: {
    fontSize: 16,
    fontWeight: "bold",
    color: "blue",
    marginLeft: 15,
  },
  btnBlue: {
    marginRight: -10,
    marginTop: 20,
    backgroundColor: "blue",
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  btnText: {
    color: "white",
    fontSize: 16,
  },
});

export default BillsDetails;