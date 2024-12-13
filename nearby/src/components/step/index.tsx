import { Text, View } from "react-native";
import { s } from "./styles";
import { colors } from "@/styles/colors";
import { IconProps } from "@tabler/icons-react-native";

type StepProps = {
  name: string;
  description: string;
  icon: React.ComponentType<IconProps>;
};
export function Step({ name, description, icon: Icon }: StepProps) {
  return (
    <View style={s.container}>
      {Icon && <Icon color={colors.red.base} />}

      <View style={s.details}>
        <Text style={s.title}>{name}</Text>

        <Text style={s.description}>{description}</Text>
      </View>
    </View>
  );
}
