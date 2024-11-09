import React from 'react';
import { View, Text, StyleSheet, ImageBackground, TouchableOpacity, ScrollView } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import Home from '../components/Home';
import CopyRight from '../components/CopyRight';
import Footer from '../components/Footer';
import BackToHome from '../components/BackToHome';
const Saving = () => {
  return (
   
    <View style={styles.container}>
        <View style={styles.rows}>
          <BackToHome/>
          <View style={[styles.col6, styles.textCenter]}>
            <Text style={styles.pageName}>Carts</Text>
          </View>
          <TouchableOpacity style={[styles.col3, styles.textRight]} onPress={() => console.log('Search Pressed')}>
            <FontAwesome name="search" size={20} color="white" />
          </TouchableOpacity>
        </View>
        <ScrollView style={styles.scrollView}>
      <View style={styles.pageTitle}>
        <TouchableOpacity onPress={() => console.log('Home Pressed')}>
          <Home/>
        </TouchableOpacity>
        <Text style={styles.floatRight}>Carts</Text>
      </View>

      <View style={styles.goalArea}>
        <View style={styles.sectionTitle}>
          <Text style={styles.title}>Saving Goals</Text>
          <TouchableOpacity onPress={() => console.log('Total Pressed')}>
            <Text style={styles.goalTitle}>Total-$ 129898</Text>
          </TouchableOpacity>
        </View>

        {renderGoal("Finance Business", "Business", "  $130", 0.30, "30%")}
        {renderGoal("App Store", "Technology", "$1065", 0.90, "90%")}
        {renderGoal("Gaming Software", "Development", "  $580", 0.60, "60%")}
        {renderGoal("Racing Car", "Playing", "  $980", 0.60, "60%")}
      </View>
      <CopyRight/>
    </ScrollView>
    <View style={styles.footerContainer}>
        <Footer />
      </View> 
    </View>
  );

};

const renderGoal = (title, subtitle, amount, value, percentage) => (
  <View style={styles.singleGoal}>
    <View style={styles.row}>
      <View style={[styles.col7, styles.pr0]}>
        <View style={styles.details}>
          <Text style={styles.goalTitleText}>{title}</Text>
          <Text style={styles.goalSubtitle}>{subtitle}</Text>
        </View>
      </View>
      <View style={[styles.col5, styles.pl0]}>
        <View style={styles.circleInner}>
          <Text style={styles.goalAmount}>{amount}</Text>
          <View style={styles.chartCircle}>
            <Text style={styles.chartCircleValue}>{percentage}</Text>
          </View>
        </View>
      </View>
    </View>
    
  </View>
 
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f8f8',
  },
  headerArea: {
    width: '100%',
    paddingVertical:20,
    justifyContent: 'center',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 6,
  },
  rows: {
    alignItems: "center",
    flexDirection: "row",
    padding: 5,
    backgroundColor:'blue',
  },
  col3: {
    flex: 1,
    marginRight: 15,
  },
  col6: {
    flex: 2,
  },
  textCenter: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  textRight: {
    alignItems: 'flex-end',
  },
  pageName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
    paddingLeft:70,
  },
  pageTitle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 20,
    borderBottomWidth: 1,
    borderColor: "lightgrey",
  },
  floatLeft: {
    color: '#000',
  },
  floatRight: {
    color: '#000',
    fontSize: 16,
  },
  goalArea: {
    paddingVertical: 36,
  },
  sectionTitle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 12,
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  goalTitle: {
    color: '#007bff',
  },
  singleGoal: {
    backgroundColor: "#fff",
    borderRadius: 10,
    marginBottom: 10,
    padding: 10,
    marginHorizontal: 14,
    borderLeftWidth: 2,
    borderColor: "#007bff",
  },
  col7: {
    flex: 13,
  },
  col5: {
    flex: 5,
  },
  pr0: {
    paddingRight: 0,
  },
  pl0: {
    paddingLeft: 0,
  },
  details: {
    paddingHorizontal: 6,
  },
  goalTitleText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  goalSubtitle: {
    color: '#888',
    marginTop: 10,
  },
  circleInner: {
    alignItems: "center",
    flexDirection: "row",
  },
  goalAmount: {
    marginRight: 10,
    fontSize: 16,
    fontWeight: "bold",
    fontSize: 18,
  },
  chartCircle: {
    width: 52,
    height: 52,
    borderRadius: 26,
    borderWidth: 3,
    borderColor: "#007bff",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
    marginBottom: 10,
  },
  chartCircleValue: {
    fontSize: 16,
    fontWeight: "bold",
  },
  scrollView: {
    flex: 1,
    marginBottom:20,
  },
  footerContainer: {
    bottom: 0,
    left: 0,
    right: 0,
    height: 60, // adjust the height to fit your footer content
    backgroundColor: "#fff", // add a background color to make it visible
    padding: 3,
  },
});

export default Saving;
