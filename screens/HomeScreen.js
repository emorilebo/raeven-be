import { View, Text, SafeAreaView, Image } from "react-native";
import React, { useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";

const HomeScreen = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: true,
    });
  }, []);

  return (
    <SafeAreaView>
      <Text className="text-red-500">
        {/* Header */}
        
        <View className="flex-row pb-3 items-center mx-4 space-x-2">
            <Image
                source={{
                    uri:'https://links.papareact.com/wru'
                }}
                className='h-7 w-7 bg-gray-300mp-4 rounded-full'
            />
            <View>
                <Text>Raeven Market</Text>
                <Text>Current Location</Text>
            </View>
        </View>
      </Text>
    </SafeAreaView>
  );
};

export default HomeScreen;
