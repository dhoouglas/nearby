import { FlatList } from "react-native";

import { s } from "./styles";
import { Category } from "../category";

export type CategoriesProps = {
  id: string;
  name: string;
}[];
type Props = {
  data: CategoriesProps;
  selected: string;
  onSelected: (id: string) => void;
};
export function Categories({ data, selected, onSelected }: Props) {
  return (
    <FlatList
      data={data}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <Category
          name={item.name}
          iconId={item.id}
          onPress={() => onSelected(item.id)}
          isSelected={item.id === selected}
        />
      )}
      horizontal
      contentContainerStyle={s.content}
      style={s.container}
      showsHorizontalScrollIndicator={false}
    />
  );
}
