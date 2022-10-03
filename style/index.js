import { StyleSheet } from "react-native";
import colors from "vuetify/lib/util/colors";

  const styles = StyleSheet.create({
    wrapper: {
      flex: 1,
      display: "flex",
      backgroundColor: '#43a1c9'
    },
    welcomeWrapper: {
      flex: 1,
      display: "flex",
      marginTop: 30,
      padding: 20
    },
    logo: {
      width: 50,
      height: 50,
      marginTop: 50,
      marginBottom: 40
    },
    welcomeText: {
      fontSize: 30,
      color: colors.white,
      fontWeight: "300",
      marginBottom: 40
    }
  });