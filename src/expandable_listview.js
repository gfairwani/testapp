import React, { Component } from 'react';

import { Alert, LayoutAnimation, StyleSheet, View, Text, ScrollView, UIManager, TouchableOpacity, Platform, Image } from 'react-native';

import styles from './styles'

export default class expandable_listView extends Component {

    constructor(props) {
  
      super(props);
  
      this.state = {
  
        layout_Height: 0
  
      }
    }
  
    componentWillReceiveProps(nextProps) {
      if (nextProps.item.expanded) {
        this.setState(() => {
          return {
            layout_Height: null
          }
        });
      }
      else {
        this.setState(() => {
          return {
            layout_Height: 0
          }
        });
      }
    }
  
    shouldComponentUpdate(nextProps, nextState) {
      if (this.state.layout_Height !== nextState.layout_Height) {
        return true;
      }
      return false;
    }
  
    show_Selected_Category = (item) => {
  
      // Write your code here which you want to execute on sub category selection.
     // Alert.alert(item);
  
    }
  
    render() {
       // alert("data"+JSON.stringify(this.props.item.category.subcategories))
      return (
        <View style={styles.Panel_Holder}>

            
  
          <TouchableOpacity activeOpacity={0.8} onPress={this.props.onClickFunction} style={styles.category_View}>
  
            <Text style={styles.category_Text}>{this.props.item.category.categoryName
} </Text>
  
            <Image
              source={{ uri: 'https://reactnativecode.com/wp-content/uploads/2019/02/arrow_right_icon.png' }}
              style={styles.iconStyle} />
  
          </TouchableOpacity>
  
          <View style={{ height: this.state.layout_Height, overflow: 'hidden' }}>

  
            {
              this.props.item.category.subcategories.map((item, key) => (
  
                <TouchableOpacity key={key} style={styles.sub_Category_Text} onPress={this.show_Selected_Category.bind(this, item.name)}>
  
                  <Text style={styles.subcategory}> {item.subCategoryname} </Text>
  
                  <View style={{ width: '100%', height: 1, backgroundColor: '#f6f6f6' }} />
  
                </TouchableOpacity>
  
              ))
            }
  
          </View>
  
        </View>
  
      );
    }
  }