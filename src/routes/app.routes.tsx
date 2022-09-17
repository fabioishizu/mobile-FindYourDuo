import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Home } from '../screens/Home/Index';
import { Game } from '../screens/Game/Index';

const {Navigator , Screen } = createNativeStackNavigator();

export function AppRoutes(){
    return(
        <Navigator screenOptions={{ headerShown: false }}>
            <Screen
            name="home"
            component={Home}
            />

            <Screen
            name="game"
            component={Game}
            />
        </Navigator>
    )
}