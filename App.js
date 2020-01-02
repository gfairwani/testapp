import React,{Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  UIManager,
  LayoutAnimation,
  Text,
  TextInput,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import ExpandableListView from './src/expandable_listview'
import styles from './src/styles'


export default class App extends Component {
 
  constructor() {
    super();

    this.state={
      array:[]
    }
 
    if (Platform.OS === 'android') {
 
      UIManager.setLayoutAnimationEnabledExperimental(true)
 
    }
 
    // const array = [
 
    //   {
    //     expanded: false, category_Name: "Mobiles", sub_Category: [{ id: 1, name: 'Mi' }, { id: 2, name: 'RealMe' }, { id: 3, name: 'Samsung' },
    //     { id: 4, name: 'Infinix' }, { id: 5, name: 'Oppo' }, { id: 6, name: 'Apple' }, { id: 7, name: 'Honor' }]
    //   },
 
    //   {
    //     expanded: false, category_Name: "Laptops", sub_Category: [{ id: 8, name: 'Dell' }, { id: 9, name: 'MAC' }, { id: 10, name: 'HP' },
    //     { id: 11, name: 'ASUS' }]
    //   },
 
    //   {
    //     expanded: false, category_Name: "Computer Accessories", sub_Category: [{ id: 12, name: 'Pendrive' }, { id: 13, name: 'Bag' },
    //     { id: 14, name: 'Mouse' }, { id: 15, name: 'Keyboard' }]
    //   },
 
    //   {
    //     expanded: false, category_Name: "Home Entertainment", sub_Category: [{ id: 16, name: 'Home Audio Speakers' },
    //     { id: 17, name: 'Home Theatres' }, { id: 18, name: 'Bluetooth Speakers' }, { id: 19, name: 'DTH Set Top Box' }]
    //   },
 
    //   {
    //     expanded: false, category_Name: "TVs by brand", sub_Category: [{ id: 20, name: 'Mi' },
    //     { id: 21, name: 'Thomson' }, { id: 22, name: 'LG' }, { id: 23, name: 'SONY' }]
    //   },
 
    //   {
    //     expanded: false, category_Name: "Kitchen Appliances", sub_Category: [{ id: 24, name: 'Microwave Ovens' },
    //     { id: 25, name: 'Oven Toaster Grills (OTG)' }, { id: 26, name: 'Juicer/Mixer/Grinder' }, { id: 27, name: 'Electric Kettle' }]
    //   }
    // ];
    this.state = { AccordionData: [],
    text:'' }

 
  }
 
  update_Layout = (index) => {
 
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
 
    const array = [...this.state.AccordionData];
 
    array[index]['expanded'] = !array[index]['expanded'];
 
    this.setState(() => {
      return {
        AccordionData: this.state.array
      }
    });
  }
 
  componentDidMount(){

    fetch('https://api.myjson.com/bins/mbtzw', {
  method: 'GET',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
  
}).then((response) => response.json())
    .then((responseJson) => {
     // alert(JSON.stringify(responseJson.categories))
      this.setState({
        array:responseJson.categories
      })

      this.setState({
        AccordionData:this.state.array
      })
   //   this.state = { AccordionData: this.state.array }

     // alert('array'+this.state.AccordionData)

      return responseJson;
    })
    .catch((error) => {
      console.error(error);
    });
  }


  SearchFilterFunction(text) {
    //passing the inserted text in textinput
    const newData = this.state.AccordionData.filter(function(item) {
      //applying filter for the inserted text in search bar
     // alert("text"+(item.category.subCategoryname))
      const itemData = item.category.categoryName
      ? item.category.categoryName
      .toUpperCase() : ''.toUpperCase();
      const textData = text.toUpperCase();
      return itemData.indexOf(textData) > -1;
    });
    this.setState({
      //setting the filtered newData on datasource
      //After setting the data it will automatically re-render the view
      AccordionData: newData,
      text: text,
    });
  }

  render() {
    return (
      <View style={styles.MainContainer}>

<TextInput style = {styles.input}
               underlineColorAndroid = "transparent"
               placeholder = "Try Searching Fat,Sauces"
               onChangeText={text => this.SearchFilterFunction(text)}
               placeholderTextColor = "#B9BEC4"
               value={this.state.text}
               autoCapitalize = "none"
              />
 
        <ScrollView contentContainerStyle={{ paddingHorizontal: 10, paddingVertical: 5 }}>
          {
            this.state.AccordionData.map((item, key) =>
              (
                
                <ExpandableListView key={item.category} onClickFunction={this.update_Layout.bind(this, key)} item={item} />
              ))
          }
        </ScrollView>
 
      </View>
    );
  }
}
 
