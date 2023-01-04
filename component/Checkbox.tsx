import React, { FC, useState } from "react";
import { Feather } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";

type Props = {
  value: boolean;
};

const Checkbox: FC<Props> = ({ value }: Props) => {
  const [isChecked, setChecked] = useState<Boolean>(value);

  return (
    <TouchableOpacity onPress={() => setChecked(!isChecked)}>
      {isChecked ? (
        <Feather name={"check-square"} size={24} color={"black"} />
      ) : (
        <Feather name={"square"} size={24} color={"black"} />
      )}
    </TouchableOpacity>
  );
};

export default Checkbox;
