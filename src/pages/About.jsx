import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, Image } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import Home from '../components/Home';
import CopyRight from '../components/CopyRight';
import Footer from '../components/Footer';
import BackToHome from '../components/BackToHome';

const About = () => {
  return (
    <View style={styles.container}>
      <View style={styles.scrollViewContent}>
        {/* Header */}
        <View style={styles.row}>
          <BackToHome/>
          <View style={styles.col6}>
            <Text style={styles.pageName}>About</Text>
          </View>
          <TouchableOpacity style={styles.col3} onPress={() => console.log('Search')}>
            <FontAwesome name="search" size={24} color="white" />
          </TouchableOpacity>
        </View>
        <ScrollView>
          {/* Page Title */}
          <View style={styles.pageTitle}>
            <Home />
            <Text style={styles.floatRight}>About</Text>
          </View>

          {/* Transaction Area */}
          <View style={styles.transactionArea}>
            <View style={styles.sectionTitle}>
              <Text style={styles.title}>About The Bankapp</Text>
              <Image source={require("../../assets/images/aboutBank.jpg")} style={styles.logo} />
            </View>
            <View style={styles.aboutContentInner}>
              <Text style={styles.heading}>Received Money By Aron Fince</Text>
              <Text style={styles.paragraph}>You have received a payment from Aron Fince.</Text>
              <Text style={styles.paragraph}>
                Lpsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
              </Text>
            </View>
            <View style={styles.aboutContentInner}>
              <Text style={styles.heading}>Received Money By Aron Fince</Text>
              <Text style={styles.paragraph}>You have received a payment from Aron Fince.</Text>
              <Text style={styles.paragraph}>
                Lpsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
              </Text>
            </View>
            <View style={styles.baBillPayInner}>
              <View>
                <View style={styles.baSingleBillPay}>
                  <FontAwesome name="envelope" size={24} color="black" style={styles.icon} />
                  <View style={styles.details}>
                    <Text style={styles.heading}>Contact Us</Text>
                    <Text style={styles.paragraph}>Your account logged in by another device. If it was not you, please contact us.</Text>
                  </View>
                </View>
                <TouchableOpacity style={styles.contactButton} onPress={() => console.log('Contact Us')}>
                  <Text style={styles.contactButtonText}>Contact Us</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
          <CopyRight />
        </ScrollView>
      </View>
      <View style={styles.footerContainer}>
        <Footer />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
  },
  scrollViewContent: {
    flex: 1,
    marginBottom:15,
  },
  row: {
    alignItems: "center",
    flexDirection: "row",
    padding: 5,
    backgroundColor: 'blue',
    paddingRight:15,
  },
  col3: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  col6: {
    flex: 4,
    justifyContent: "center",
    alignItems: "center",
  },
  pageName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
  },
  pageTitle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    marginTop: 20,
  },
  floatRight: {
    fontSize: 16,
  },
  transactionArea: {
    paddingTop: 26,
    paddingHorizontal: 10,
  },
  logo: {
    width: 390,
  },
  sectionTitle: {
    marginBottom: 20,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  aboutContentInner: {
    marginBottom: 20,
  },
  heading: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  paragraph: {
    fontSize: 14,
    color: 'gray',
    marginBottom: 5,
  },
  baBillPayInner: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 5,
    backgroundColor: '#f9f9f9',
    padding: 3,
    borderRadius: 10,
    marginRight: 8,
  },
  baSingleBillPay: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  details: {
    justifyContent: 'center',
  },
  contactButton: {
    backgroundColor: 'red',
    paddingVertical: 5,
    paddingHorizontal: 15,
    borderRadius: 5,
    width: 110,
  },
  contactButtonText: {
    color: 'white',
    fontSize: 16,
  },
  icon: {
    marginRight: 10,
    color: 'red',
  },
  footerContainer: {
    bottom: 0,
    left: 0,
    right: 0,
    height: 70, // adjust the height to fit your footer content
    backgroundColor: "#fff", // add a background color to make it visible
    padding: 3,
  },
});

export default About;
