// Ranglar (colors)
export const colors = {
  primary: "#4CAF50", // Yashil rang
  secondary: "#FF5722", // To'q qizil
  background: "#F0F0F0", // Yengil fon rangi
  text: "#333333", // Matn rangi
  white: "#FFFFFF",
  lightGreen: "#A5D6A7", // Yengil yashil
};

// Shriftlar (fonts)
export const fonts = {
  regular: "Montserrat-Regular", // Oddiy shrift
  bold: "Montserrat-Bold", // Qalin shrift
};

export const styles = {
  container: {
    flex: 1,
    backgroundColor: colors.background, // Fon rangi
    padding: 20,
    marginTop: 30,
  },
  text: {
    fontSize: 18,
    color: colors.text, // Matn rangi
    fontFamily: fonts.regular, // Oddiy shrift
  },
  button: {
    backgroundColor: "#4CAF50",
    padding: 12,
    marginTop: 10,
    borderRadius: 8,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
};
