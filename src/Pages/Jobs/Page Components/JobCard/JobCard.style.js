import { StyleSheet } from 'react-native';
export default StyleSheet.create({
    container:{
        backgroundColor:'white',
        padding:10,
        margin: 10,
        borderRadius:10
    },
  
    title:{
        color:'black',
        fontSize:22,
        fontWeight:'bold',
        paddingBottom:3,
    },
    companyName:{
        fontSize:15,
        paddingBottom:3,
    },
    cityTextContainer:{
        borderRadius:20,
        flexWrap: 'wrap',   
    },
    cityText:{
        backgroundColor:'#d63333',
        color:'white',
        fontWeight: 'bold',
        paddingVertical: 5,
        paddingHorizontal: 10,
        borderRadius: 10,
        marginVertical: 2,
        fontSize:15
       
        
    },
    jobLevelText:{
        fontSize:15,
        textAlign:'right',
        color:'#d63333',
    }

    
})