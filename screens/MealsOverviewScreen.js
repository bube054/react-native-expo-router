import React from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";
import { MEALS } from "../data/dummy-data";
import MealItem from "../components/MealItem";
// import { useRoute } from "@react-navigation/native";

export default function MealsOverviewScreen({ route }) {
  // const route1 = useRoute()
  const catId = route.params.categoryId;

  // console.log(catId, route1.params);
  const displayedMeals = MEALS.filter(
    (meal) => meal.categoryIds.indexOf(catId) >= 0
  );

  console.log(displayedMeals);

  function renderMealItem(itemData) {
    return <MealItem />;
  }

  return (
    <View style={styles.container}>
      {/* <Text>MealsOverviewScreen {catId}</Text> */}
      <FlatList
        data={displayedMeals}
        keyExtractor={(item) => item.id}
        renderItem={i}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { padding: 1, flex: 1 },
});
