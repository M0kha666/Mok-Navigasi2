import * as React from 'react';
import { View, Text, StyleSheet, Button, Image, Linking } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { Title, Card } from 'react-native-paper';
import { color } from 'react-native-reanimated';
// import { MaterialIcon, Entypo } from 'react-native-vector-icons';

const Detail = ({navigation, route}) => {
    const {karyawan} = route.params
    return (
        <View style={{flex:1}}>
            <LinearGradient colors={["#0033ff", "#6bc1ff"]} style={{height:"20%"}} />
            <View style={{alignItems:"center"}}>
                <Image style={{width:120, height:120, borderRadius:120/2, marginTop:-50}}
                source={{uri:karyawan.foto}} />
            </View>

            <View style={{alignItems:"center", margin:15}}>
                <Title>{karyawan.nama}</Title>
                <Text style={{fontSize:14, color:'grey'}}>{karyawan.jabatan}</Text>
            </View>
            <Card style={{margin:3}}
            onPress={()=>{Linking.openURL('mailto:${karyawan.email}')}}>
                <View style={{flexDirection:"row", padding:8}}>
                    {/* <MaterialIcon name="email" size={32} color="#006aff" /> */}
                    <Text style={styles.teks}>{karyawan.email}</Text>
                </View>
            </Card>
            <Card style={{margin:3}}
            onPress={()=>{Linking.openURL('tel:${karyawan.telp}')}}>
                <View style={{flexDirection:"row", padding:8}}>
                    {/* <Entypo name="phone" size={32} color="#006aff" /> */}
                    <Text style={styles.teks}>{karyawan.telp}</Text>
                </View>
            </Card>
            <Card style={{margin:3}} >
                <View style={{flexDirection:"row", padding:8}}>
                    {/* <MaterialIcon name="attach-money" size={32} color="#006aff" /> */}
                    <Text style={styles.teks}>{karyawan.gaji}</Text>
                </View>
            </Card>
            <View style={{padding:10}}>
                <Button title='GO BACK' onPress={()=>navigation.navigate('Home')} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    teks:{
        fontSize:15,
        marginTop:3,
        marginLeft:5,
        color:'black'
    }
});
export default Detail;