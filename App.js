import React from 'react';
import { View, SafeAreaView, Image, FlatList, ScrollView, StyleSheet, Dimensions } from 'react-native';
import NewsCard from './src/components/NewsCard';
import news_data from './src/news_data.json';
import news_banner_data from './src/news_banner_data.json';
import useWindowDimensions from 'react-native/Libraries/Utilities/useWindowDimensions';


function App() {
  const renderNews = ({ item }) => <NewsCard news={item} />;
  const bannerNews = news_banner_data;
  return (
    <SafeAreaView>
        <ScrollView horizontal 
        style={imageStyle.container} >
          {news_banner_data.map(bannerNews => (<Image source={{uri:bannerNews.imageUrl}} />))}
        </ScrollView>
     
      <ScrollView>

        <View>

          <FlatList
            data={news_data}
            renderItem={renderNews}
          />

        </View>
      </ScrollView>
    </SafeAreaView>
  );

}


const imageStyle = StyleSheet.create(
  {
    container:{

        height:Dimensions.get('window').height /4,
        width : Dimensions.get('window').width /2,
    },


  }
)



export default App;