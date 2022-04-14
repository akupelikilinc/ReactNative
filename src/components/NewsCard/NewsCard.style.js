import {StyleSheet, Dimensions} from 'react-native';

export default StyleSheet.create({
    container:{
        flex :1,
        backgroundColor : '#eceff1',
        margin : 10,
    },
    image:{
        height : Dimensions.get('window').height/4,
        borderTopLeftRadius : 10,
        borderTopRightRadius : 10,
    },
    title :{
        fontSize : 18,
        fontWeight : 'bold',

    },
    author:{
        textAlign : 'right',
        fontStyle : 'italic',
        fontSize : 16,
        fontWeight : 'bold',
        color : 'orange'
    
    }
})