import { StatusBar } from "expo-status-bar";
import { useFonts } from "expo-font";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Welcome from "./src/screens/Welcome/Welcome";
import Home from "./src/screens/Home/Home";
import NFTDetails from "./src/screens/NFTDetails/NFTDetails";
export default function App() {
  const [fontsLoaded] = useFonts({
    InterBold: require("./src/assets/fonts/Inter-Bold.ttf"),
    InterLight: require("./src/assets/fonts/Inter-Light.ttf"),
    InterMedium: require("./src/assets/fonts/Inter-Medium.ttf"), // Fixed typo here
    InterRegular: require("./src/assets/fonts/Inter-Regular.ttf"),
    InterSemiBold: require("./src/assets/fonts/Inter-SemiBold.ttf"),
  });
  if (!fontsLoaded) return null;
  const Stack = createNativeStackNavigator();
  return (
    <>
      <StatusBar style="light" animated={true} />
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Welcome"
          screenOptions={{
            headerShown: false,
          }}
        >
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Welcome" component={Welcome} />
          <Stack.Screen name="NFT-Details" component={NFTDetails} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}
