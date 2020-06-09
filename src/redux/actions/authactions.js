import Axios from 'axios'
import AsyncStorage from '@react-native-community/async-storage'

export const getData = () => {
    return async dispatch => {
        try {
            let res = await Axios.get('https://api.thecatapi.com/v1/images/search?limit=10',
                { headers:{
                    "X-Api-Key" : "91aca8fd-b41a-4248-9ec7-20def655e4b3"
                }}
            )
            dispatch({
                type: 'KUCING',
                payload: res.data
            })
        } catch (error) {
            
        }
    }
}

export const Login2 = (data) => {
    console.log(data)
    return async dispatch => {
        try {
            dispatch({
                type: 'LOGIN',
                payload: data
            })
            await AsyncStorage.setItem('username', JSON.stringify(data))
        } catch (error) {
            
        }
    }
}

export const keepLogin = () => {
    return async dispatch => {
        try {
            let data = await AsyncStorage.getItem('username')
            data = JSON.parse(data)
            dispatch({
                type: 'LOGIN',
                payload: data
            })
        } catch (error) {
            
        }
    }
}

export const Imageprofile = (data) => {
    return async dispatch => {
        try {
            dispatch({
                type: 'IMAGE',
                payload: data
            })
        } catch (error) {
            
        }
    }
}

export const Logout2 = () => {
    return async dispatch => {
        try {
            dispatch({
                type: 'LOGOUT'
            })
            await AsyncStorage.removeItem('username')
        } catch (error) {
            
        }
    }
}