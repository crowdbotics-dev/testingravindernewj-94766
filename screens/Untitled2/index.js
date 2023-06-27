import { useSelector } from "react-redux";
import { loginRequest } from "../../modules/login/auth/index.js";
import { useDispatch } from "react-redux";
import React, { useState } from "react";
import { StyleSheet, View, Text, TextInput, TouchableOpacity } from "react-native";

const LoginScreen = ({
  navigation
}) => {
  const {
    entities: user
  } = useSelector(state => state.user);
  const {
    entities: pass
  } = useSelector(state => state.pass);
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {// TODO: Implement login logic here
    // 1. Validate email and password
    // 2. Make API call to authenticate user
    // 3. Navigate to home screen if successful
    // 4. Display error message if unsuccessful
  };

  const handleSignUp = () => {
    // TODO: Implement sign up logic here
    // 1. Navigate to sign up screen
    navigation.navigate("SignUp");
  };

  return <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
      <TextInput style={styles.input} placeholder="Email" value={email} onChangeText={setEmail} keyboardType="email-address" autoCapitalize="none" />
      <TextInput style={styles.input} placeholder="Password" value={password} onChangeText={setPassword} secureTextEntry />
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={onSubmit}>
        <Text style={styles.forgotPassword}>Forgot Password?</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={handleSignUp}>
        <Text style={styles.signUp}>Don't have an account? Sign up</Text>
      </TouchableOpacity>
      <Text style={styles.instructions}>
        Enter your email and password to login.
      </Text>
    </View>;

  const onSubmit = () => {
    dispatch(loginRequest({
      pass,
      user
    }));
  };
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
    padding: 20
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20
  },
  input: {
    width: "100%",
    height: 50,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 10
  },
  button: {
    backgroundColor: "#007bff",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold"
  },
  instructions: {
    marginTop: 20,
    color: "#999",
    fontSize: 16,
    textAlign: "center"
  },
  forgotPassword: {
    marginTop: 10,
    color: "#007bff",
    fontSize: 16,
    textAlign: "center"
  },
  signUp: {
    marginTop: 20,
    color: "#007bff",
    fontSize: 16,
    textAlign: "center"
  }
});
export default LoginScreen;