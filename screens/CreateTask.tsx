import React from "react";
import * as yup from "yup";
import { Formik } from "formik";
import db from "../db/firestore";
import { StyleSheet, Button, View, Text } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";

type FormProps = {
  name: string;
};

const CreateTask = () => {
  const navigation = useNavigation();

  const validationSchema = yup.object().shape<FormProps>({
    name: yup.string().required(),
  });

  return (
    <View>
      <Formik
        initialValues={{ name: "" }}
        onSubmit={(values) => {
          db.collection("tasks")
            .add({
              name: values.name,
              cratedAt: new Date(),
              completedAt: null,
            })
            .then((result) => navigation.navigate("Tasks"))
            .catch((err) => console.log(err));
        }}
        validationSchema={validationSchema}
      >
        {({ values, errors, handleChange, handleSubmit }) => (
          <View>
            <TextInput
              onChangeText={handleChange("name")}
              placeholder={"DescribeTasks"}
              value={values.name}
              autoFocus={true}
            />
            {errors["name"] ? <Text> {errors["name"]}</Text> : null}
            <Button title={"Create"} onPress={() => handleSubmit()} />
          </View>
        )}
      </Formik>
    </View>
  );
};

export default CreateTask;

const styles = StyleSheet.create({});
