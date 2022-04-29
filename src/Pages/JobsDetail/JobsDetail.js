import React from 'react';
import { Text,View,ScrollView,Dimensions,TouchableOpacity,Alert } from 'react-native';
import Config from 'react-native-config';
import Error from '../../Components/Error/Error';
import Loading from '../../Components/Loading/Loading';
import useFetch from '../../Hooks/useFetch/useFetch';
import styles from './JobsDetail.style';
import RenderHtml from 'react-native-render-html';
import Icons from 'react-native-vector-icons/MaterialCommunityIcons';
import {useDispatch,useSelector} from 'react-redux';
const JobsDetail=({route})=>{
    const getFavoritedJobsData = useSelector(state => state.favoritedJobs);
    const dispatch = useDispatch();
    const {id} = route.params;
    const{data,loading,error}=useFetch(`${Config.API_URL}/${id}`);
    const source = {
        html: `${data.contents}`,
      };
    if(loading){
        return <Loading/>
    }
    if(error){
        return <Error/>
    }
    function sumbitJob(){
        Alert.alert("CodeWork","Your job application has been sent");
    }
    function addFavoritedTheJob(favoritedJobs){
        
        if(getFavoritedJobsData.indexOf(favoritedJobs)==-1){
            dispatch({type: 'ADD_FAVORITE', payload: {favoritedJobs}});
            Alert.alert("CodeWork","This job is successfuly added your favorited jobs list");
        }
        else{
            Alert.alert("CodeWork","This job is already added to your favorited jobs list");
        }
        
    }
    return(
        <ScrollView>
             <View style={styles.container}>
            <View style={styles.upContainer}>
                <Text style={styles.jobNameText}>{data.name}</Text>
                <View style={styles.jobInfoContainer}>
                    <Text style={styles.infoRightText}>Location : </Text> 
                    <Text style={styles.jobInfoText}>{data.locations[0].name}</Text>
                    <Text style={styles.infoRightText}>Level : </Text> 
                    <Text style={styles.jobInfoText}>{data.levels[0].name}</Text>
                </View>
                <Text style={styles.jobDetailText}>Job Detail</Text>
                <RenderHtml
                    baseStyle={styles.jobDetail}
                    contentWidth={Dimensions.get('window').width}
                    source={source}
                />
                <View style={styles.buttonContainer}>  
                    <TouchableOpacity onPress={sumbitJob} style={styles.buttonBackground}><Icons name='check-all' size={25} color='white'></Icons><Text style={styles.buttonText}> Submit</Text></TouchableOpacity>
                    <TouchableOpacity onPress={()=>addFavoritedTheJob(data)} style={styles.buttonBackground}><Icons name='heart' size={25} color='white'></Icons><Text style={styles.buttonText}> Add Favorites</Text></TouchableOpacity>
                </View>
            </View>
            
        </View>
        </ScrollView>
    )
}
export default JobsDetail;