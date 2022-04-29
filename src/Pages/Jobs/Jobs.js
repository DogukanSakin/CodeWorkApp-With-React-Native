import React,{useState,useEffect} from 'react';;
import { View,FlatList,TouchableWithoutFeedback,Text} from 'react-native';
import JobCard from './Page Components/JobCard';
import useFetch from '../../Hooks/useFetch/useFetch';
import Config from 'react-native-config';
import Icons from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from './JobsPage.style';
import Loading from '../../Components/Loading/Loading';
import Error from '../../Components/Error/Error';
const Jobs=({navigation})=>{
    const [pageNumber,setPageNumber]=useState(1);
    const renderJobs=({item})=><JobCard job={item} onSelect={()=>handleJobCardPress(item.id)}></JobCard>;
    const {data,loading,error}=useFetch( `${Config.API_URL}?page=${pageNumber}`);
    if(loading){
      
        return <Loading/>  
    }
    if(error){
      return <Error/>
    }
    const handleJobCardPress =(id)=>{
        navigation.navigate('JobsDetailScreen',{id});
    }
    return(      
        <View>   
             <View style={styles.topBar}>
                {pageNumber>1 && <TouchableWithoutFeedback onPress={()=>setPageNumber(pageNumber-1)}><Icons name='chevron-left' size={40} color={'#d63333'}></Icons></TouchableWithoutFeedback>}
                <Text style={styles.pageNumberText}>Page : {pageNumber}</Text>
                {pageNumber<50 && <TouchableWithoutFeedback onPress={()=>setPageNumber(pageNumber+1)}><Icons name='chevron-right' size={40} color={'#d63333'}></Icons></TouchableWithoutFeedback>}
            </View> 
            <FlatList 
        
            data={data.results}
            renderItem={renderJobs}
            >
            </FlatList>

        </View>
    )
    
}
export default Jobs;