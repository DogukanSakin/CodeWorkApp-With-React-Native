import { StyleSheet,Dimensions} from 'react-native';
export default StyleSheet.create({
    container:{
        padding:10
    },
    upContainer:{
        alignItems:'center',
        justifyContent:'center',
       
        
    },
    jobNameText:{
        fontSize:18,
        marginBottom:5
        
    },
    jobInfoContainer:{
        flexDirection:'row',
        
       
    },
    infoRightText:{
        color:'#d63333',
        fontSize:15,
    },
    jobInfoText:{
        fontSize:15,
        fontWeight:'bold',
        marginRight:10
    },
    jobDetailText:{
        paddingTop:10,
        fontSize:16
    },
    jobDetail:{
        padding:10,
        textAlign:'center',
        
    },
    buttonContainer:{
        flexDirection: 'row',
        justifyContent: 'center',
        
    },
    buttonBackground:{
        backgroundColor: '#d63333',
        padding: 10,
        flexDirection: 'row',
        marginHorizontal: 5,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent:'center',
        flex:1,
       
        
    },
    buttonText:{
        color:'white',
        fontSize:15,
      
    }

})