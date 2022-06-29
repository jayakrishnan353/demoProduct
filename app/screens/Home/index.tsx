import React, { useEffect, useRef, useState } from 'react';

import {
    View,
    Text,
    FlatList,
    Image,
} from 'react-native';

import { useDispatch, useSelector } from 'react-redux';
import * as productActions from 'app/store/actions/productActions';
import commonStyles from 'app/components/CommonStyles';
import { CustomHeader } from 'app/components';
import configureStore from '../../store';
import styles from './styles';

const Home: React.FC = () => {
    const dispatch = useDispatch();

    const productListArray = useSelector((state) => state.productReducer.productList)

    useEffect(() => {



        getProductList()


    }, []);


    const getProductList = async () => {

        console.log("ressss", dispatch(productActions.requestProductList()))

    }


    const productItem = ({ item, index }) => {
   
        return (
            <View style={styles.productView}>

                <View style={{ flexDirection: 'row' }}>

                    <View style={styles.productImageSuperView}>
                        <Image source={{ uri: item.image }} style={styles.productImgView} resizeMode='contain'>

                        </Image>
                    </View>
                    <View style={{ width: '70%', marginBottom: 15 }}>
                        <Text style={styles.cateogryTxt}>{item.category}</Text>
                        <Text style={styles.titleTxt}>{item.title}</Text>
                        <Text style={styles.decrpitonTxt}>{item.description}</Text>
                        <Text style={styles.priceTxt}>{item.price} Rs</Text>
                        <Text style={styles.ratingTxt}>{item.rating.rate} Ratings by {item.rating.count}  </Text>
                    </View>
                </View>
            </View>
        );
    }


    return (
        <View style={commonStyles.container}>

            <Text style={[commonStyles.titleTxt, { textAlign: 'center' }]}>Product List</Text>

            <FlatList
                data={productListArray}
                renderItem={productItem}
                keyExtractor={(item) => item.id}

            />

        </View>
    );
};

export default Home;