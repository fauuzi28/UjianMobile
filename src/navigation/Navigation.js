import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native'
import Authstack from './Authstack'
import Navigationtab from './Navigationtab'
import { useSelector, useDispatch } from 'react-redux'
import AsyncStorage from '@react-native-community/async-storage'
import { keepLogin } from './../redux/actions/authactions'

const MainNavigations = () => {
    let username = useSelector(state => state.auth.username)
    let dispatch = useDispatch();
    
    useEffect(() => {
        AsyncStorage.getItem('username')
        .then(res => {
            
            dispatch(keepLogin(res))
        })
        .catch(err => {
            console.log(err)
        })
    }, [dispatch])

    return (
        <NavigationContainer>
            {
                username
                ?
                <Navigationtab />
                :
                <Authstack />
            }
        </NavigationContainer>
    );
};

export default MainNavigations;