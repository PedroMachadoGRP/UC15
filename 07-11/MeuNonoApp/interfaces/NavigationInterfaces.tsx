import { BottomTabNavigationProp } from "@react-navigation/bottom-tabs";
import { ParamListBase } from "@react-navigation/native";

export interface BottomTabParamList extends ParamListBase {
  Home: undefined;
  Soma: undefined; 
}

export interface HomeBottonProps {
  navigation: BottomTabNavigationProp<BottomTabParamList, "Home">;
}

export interface SumBottonProps {
  navigation: BottomTabNavigationProp<BottomTabParamList, "Soma">;
}

export interface SubBottonProps {
  navigation: BottomTabNavigationProp<BottomTabParamList, "Sub">;
}

export interface MulBottonProps {
  navigation: BottomTabNavigationProp<BottomTabParamList, "Mult">;
}
export interface DivBottonProps {
  navigation: BottomTabNavigationProp<BottomTabParamList, "Div">;
}
