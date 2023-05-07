import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";
import InputForm from "./components/InputForm";

export default function App() {
  return (
    <View className="flex flex-1 items-center justify-start">
      <View className="py-10 px-5 mt-10">
        <Text className="text-center text-4xl tracking-tighter font-bold mb-3">
          TO DO LIST
        </Text>
        <InputForm />
      </View>
      <StatusBar style="auto" />
    </View>
  );
}
