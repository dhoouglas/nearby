import { View, Alert } from "react-native";

import { api } from "@/services/api";
import { useEffect, useState } from "react";
import { Categories, CategoriesProps } from "@/components/categories";
import { PlaceProps } from "@/components/place";
import { Places } from "@/components/places";

type MarketsProps = PlaceProps & {};

export default function Home() {
  const [categories, setCategories] = useState<CategoriesProps>([]);
  const [category, setCaterogy] = useState("");
  const [markets, setMarkets] = useState<MarketsProps[]>();
  async function fetchCategories() {
    try {
      const { data } = await api.get("/categories");
      setCategories(data);
      setCaterogy(data[0].id);
    } catch (error) {
      console.log(error);
      Alert.alert("Categorias", "Não foi possivel carregar as categorias");
    }
  }

  async function fetchMarkets() {
    try {
      if (!category) {
        return;
      }

      const { data } = await api.get("/markets/category/" + category);
      setMarkets(data);
    } catch (error) {
      console.log(error);
      Alert.alert("Locais", "Não foi possivel carregar os locais.");
    }
  }

  useEffect(() => {
    fetchCategories();
  }, []);

  useEffect(() => {
    fetchMarkets();
  }, [category]);
  return (
    <View style={{ flex: 1, backgroundColor: "#CECECE" }}>
      <Categories
        data={categories}
        onSelected={setCaterogy}
        selected={category}
      />
      <Places data={markets} />
    </View>
  );
}
