import React from 'react';
import { Text,View,TouchableWithoutFeedback,TouchableOpacity } from 'react-native';
import styles from './JobCard.style';
const JobCard = ({job,onSelect}) =>{
    return(
        <TouchableWithoutFeedback onPress={onSelect}>
        <View style={styles.container}>
            <Text style={styles.title}>{job.name}</Text>
            <Text style={styles.companyName}>{job.company.name}</Text>
            <View style={styles.cityTextContainer}>
                <Text style={styles.cityText}>{job.locations[0].name}</Text>
            </View>
            <Text style={styles.jobLevelText}>{job.levels[0].name}</Text>
        </View>
        </TouchableWithoutFeedback>
    )
}
export default JobCard;