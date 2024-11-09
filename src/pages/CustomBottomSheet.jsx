import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, TouchableWithoutFeedback } from 'react-native';
import { BottomSheet } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';

const CustomBottomSheet = ({ isVisible, onClose }) => {
  const [selectedAccount, setSelectedAccount] = useState("Investment (*** 7284)");
  const [amount, setAmount] = useState("");
  const [isDropdownVisible, setDropdownVisible] = useState(false);
  const [dropdownTop, setDropdownTop] = useState(0);

  const handleAccountSelect = (account) => {
    setSelectedAccount(account);
    setDropdownVisible(false);
  };

  const toggleDropdown = () => {
    setDropdownVisible(!isDropdownVisible);
    // Calculate dropdown top position based on header dropdown box height
    setDropdownTop(100); // Adjust as per your design
  };

  const handleScreenPress = () => {
    if (isDropdownVisible) {
      setDropdownVisible(false);
    } else {
      onClose();
    }
  };

  return (
    <TouchableWithoutFeedback onPress={handleScreenPress}>
      <BottomSheet
        isVisible={isVisible}
        modalProps={{}}
        containerStyle={{
          backgroundColor: 'transparent',
          paddingHorizontal: 10,
          paddingVertical: 10,
        }}
      >
        <View style={styles.sheetContainer}>
          <Text style={styles.label}>Add Balance</Text>

          <View style={styles.inputContainer}>
            <Text style={styles.subLabel}>From</Text>
            <TouchableOpacity style={styles.dropdown} onPress={toggleDropdown}>
              <Text style={styles.selectedAccountText}>{selectedAccount}</Text>
              <Icon name={isDropdownVisible ? "chevron-up" : "chevron-down"} size={15} />
            </TouchableOpacity>

            {isDropdownVisible && (
              <View style={[styles.dropdownOptions, { top: dropdownTop }]}>
                <TouchableOpacity
                  style={[styles.dropdownOption, { borderBottomWidth: 1, borderBottomColor: '#ddd' }]}
                  onPress={() => handleAccountSelect("Investment (*** 7284)")}
                >
                  <Text style={styles.dropdownOptionText}>Investment (*** 7284)</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.dropdownOption}
                  onPress={() => handleAccountSelect("Savings (*** 5078)")}
                >
                  <Text style={styles.dropdownOptionText}>Savings (*** 5078)</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={[styles.dropdownOption, { borderTopWidth: 1, borderTopColor: '#ddd' }]}
                  onPress={() => handleAccountSelect("Deposit (*** 2349)")}
                >
                  <Text style={styles.dropdownOptionText}>Deposit (*** 2349)</Text>
                </TouchableOpacity>
              </View>
            )}
          </View>

          <View style={styles.inputContainer}>
            <Text style={styles.subLabel}>Enter Amount</Text>
            <View style={styles.amountInput}>
              <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center' }}>
                <View style={{ borderRightWidth: 2, borderRightColor: '#ddd', paddingRight: 10, marginRight: 10 }}>
                  <Text style={styles.currencySymbol}>$</Text>
                </View>
                <TextInput
                  style={{ flex: 1, fontSize: 20 }}
                  keyboardType="numeric"
                  value={amount}
                  onChangeText={setAmount}
                  placeholder="768"
                />
              </View>
            </View>
          </View>

          <TouchableOpacity
            style={styles.depositButton}
            onPress={() => alert(`Deposited $${amount} from ${selectedAccount}`)}
          >
            <Text style={styles.depositButtonText}>Deposit</Text>
          </TouchableOpacity>
        </View>
      </BottomSheet>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  sheetContainer: {
    backgroundColor: 'white',
    padding: 10,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    elevation: 0, // Remove elevation to remove shadow on Android
    shadowOpacity: 0, // Remove shadow on iOS
  },
  label: {
    fontSize: 20,
    marginBottom: 20,
  },
  subLabel: {
    fontSize: 16,
    marginBottom: 10,
  },
  inputContainer: {
    marginBottom: 20,
  },
  dropdown: {
    borderWidth: 1,
    borderColor: '#ddd',
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#f9f9f9',
  },
  selectedAccountText: {
    fontSize: 16,
  },
  dropdownOptions: {
    borderWidth: 1,
    borderColor: '#ddd',
    backgroundColor: '#fff',
    position: 'absolute',
    left: 0,
    width: '100%',
    zIndex: 1,
    borderRadius: 5,
  },
  dropdownOption: {
    padding: 5,
  },
  dropdownOptionText: {
    fontSize: 16,
  },
  amountInput: {
    borderWidth: 1,
    borderColor: '#ddd',
    padding: 15,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f9f9f9',
  },
  currencySymbol: {
    fontSize: 20,
    marginRight: 10,
  },
  depositButton: {
    backgroundColor: '#6A0DAD',
    padding: 15,
    alignItems: 'center',
    borderRadius: 5,
    width: '100%',
  },
  depositButtonText: {
    color: '#fff',
    fontSize: 16,
  },
});

export default CustomBottomSheet;
