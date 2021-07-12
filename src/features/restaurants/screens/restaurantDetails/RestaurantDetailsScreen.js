import React, { useState } from 'react';
import { useRoute } from '@react-navigation/native';
import { ScrollView } from 'react-native';
import { List } from 'react-native-paper';
import RestaurantInfoCard from './../../components/restaurantsInfocard/RestaurantInfoCard';
import { SafeArea } from './../../../../components/utility/GlobalStyles';

const RestaurantDetailsScreen = () => {
  const [breakfast, setBreakfast] = useState(false);
  const [lunch, setLunch] = useState(false);
  const [dinner, setDinner] = useState(false);
  const [drinks, setDrinks] = useState(false);
  const route = useRoute();
  const { restaurant } = route.params;
  return (
    <SafeArea>
      <RestaurantInfoCard restaurant={restaurant} />
      <ScrollView>
        <List.Accordion
          title="Breakfast"
          left={(props) => <List.Icon {...props} icon="bread-slice" />}
          expanded={breakfast}
          onPress={() => setBreakfast(!breakfast)}
        >
          <List.Item title="Swedish Breakfast" />
          <List.Item title="Classic Breakfast" />
        </List.Accordion>

        <List.Accordion
          title="Lunch"
          left={(props) => <List.Icon {...props} icon="hamburger" />}
          expanded={lunch}
          onPress={() => setLunch(!lunch)}
        >
          <List.Item title="Burger w/ Fries" />
          <List.Item title="Pasta" />
          <List.Item title="Mushroom Soup" />
        </List.Accordion>

        <List.Accordion
          title="Dinner"
          left={(props) => <List.Icon {...props} icon="food-variant" />}
          expanded={dinner}
          onPress={() => setDinner(!dinner)}
        >
          <List.Item title="Chicken Karai" />
          <List.Item title="Chicken Mushroom Rotini" />
          <List.Item title="Steak potatis and meat" />
        </List.Accordion>

        <List.Accordion
          title="Drinks"
          left={(props) => <List.Icon {...props} icon="glass-cocktail" />}
          expanded={drinks}
          onPress={() => setDrinks(!drinks)}
        >
          <List.Item title="Coffee" />
          <List.Item title="Tea" />
          <List.Item title="Modelo" />
          <List.Item title="Coke" />
          <List.Item title="Fanta" />
        </List.Accordion>
      </ScrollView>
    </SafeArea>
  );
};

export default RestaurantDetailsScreen;
