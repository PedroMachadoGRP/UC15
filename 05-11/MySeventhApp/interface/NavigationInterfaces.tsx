import { BottomTabNavigationProp } from "@react-navigation/bottom-tabs";
import { ParamListBase, RouteProp } from "@react-navigation/native";
import {NativeStackNavigationProp } from "@react-navigation/native-stack";
import {MaterialTopTabNavigationProp} from "@react-navigation/material-top-tabs"
export interface StackParamList extends ParamListBase {
    Home: undefined;

    Profile: { userId: number };

    About: undefined
}

export interface HomeScreenProps {
    navigation: NativeStackNavigationProp<StackParamList, 'Home'>
}

export interface ProfileScreenProps {
    navigation: NativeStackNavigationProp<StackParamList, 'Profile'>
    route:RouteProp<StackParamList,"Profile">
}



export interface HomeScreenPropsBotton {
    navigation: NativeStackNavigationProp<BottomTabParamList, 'Home'>
}

export interface ProfileScreenProps {
    navigation: NativeStackNavigationProp<StackParamList, 'Profile'>
    route:RouteProp<StackParamList,"Profile">
}

export interface AboutScreenProps{
    navigation:BottomTabNavigationProp<BottomTabParamList,"About">
}

export interface BottomTabParamList extends ParamListBase{

    
    Home:undefined;
    About:undefined
}


export interface HomeScreenPropsBotton {
    navigation: NativeStackNavigationProp<BottomTabParamList, 'Home'>
}

export interface ProfileScreenProps {
    navigation: NativeStackNavigationProp<StackParamList, 'Profile'>
    route:RouteProp<StackParamList,"Profile">
}

export interface AboutScreenPropsBottom{
    navigation:BottomTabNavigationProp<BottomTabParamList,"About">
}

export interface DrawerNavigationProps extends ParamListBase{

    Home:undefined;
    About:undefined
}

export interface HomeScreenPropsDrawer {
    navigation: NativeStackNavigationProp<DrawerNavigationProps, 'Home'>
}

export interface ProfileScreenProps {
    navigation: NativeStackNavigationProp<StackParamList, 'Profile'>
    route:RouteProp<StackParamList,"Profile">
}

export interface AboutScreenPropsDrawer{
    navigation:BottomTabNavigationProp<DrawerNavigationProps,"About">
}

export interface TopNavigationProps extends ParamListBase{

    Home:undefined;
    About:undefined
}

export interface AboutScreenPropsTop{
    navigation:MaterialTopTabNavigationProp<TopNavigationProps,"About">
}

export interface HomeScreenPropsTop{
    navigation: MaterialTopTabNavigationProp<TopNavigationProps, 'Home'>
}