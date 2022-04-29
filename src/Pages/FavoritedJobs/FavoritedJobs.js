import React from 'react';
import { Text,View,FlatList,TouchableOpacity,Alert } from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import JobCard from '../Jobs/Page Components/JobCard';
import styles from './FavoritedJobs.style';
const FavoritedJobs=({navigation})=>{
    const getFavoritedJobsData = useSelector(state => state.favoritedJobs);
    const dispatch = useDispatch();
    function handleRemoveButtonPress(job){
        dispatch({type: 'REMOVE_FAVORITE', payload: {removedJob:job}});
        Alert.alert("CodeWork","This job is successfuly removed in your favorited jobs list");
    }
    const renderFavoritedJobs=({item})=>(
        <View style={styles.container}>
                <JobCard job={item} onSelect={()=>handleJobCardPress(item.id)}></JobCard>
                <TouchableOpacity onPress={()=>handleRemoveButtonPress(item)} style={styles.buttonBackground}><Text style={styles.buttonText}>REMOVE</Text></TouchableOpacity>
        </View>
    );
    const handleJobCardPress =(id)=>{
        navigation.navigate('JobsDetailScreen',{id});
    }
    return(
        <View>
            <FlatList
            data={getFavoritedJobsData}
            renderItem={renderFavoritedJobs}
            ></FlatList>
           
        </View>
    )
}
export default FavoritedJobs;