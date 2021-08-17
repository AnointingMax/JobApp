import { Dimensions } from "react-native";
const { width, height } = Dimensions.get("window");

export const COLORS = {
  // base colors
  primary: "#2D6E40", //green
  secondary: "#6E2D38", // brown

  // colors
  black: "#1E1F20",
  white: "#FFFFFF",

  darkGreen: "#1E4A42",
  lightGreen: "#43A494",
  gray: "#808080",
  lightGray: "#e9e9ea",
  transparent: "transparent",
};

export const SIZES = {
  // global sizes
  base: 8,
  font: 14,
  icon: 24,
  radius: 30,
  padding: 10,
  padding2: 12,

  // font sizes
  largeTitle: 50,
  h1: 30,
  h2: 22,
  h3: 20,
  h4: 18,
  body1: 30,
  body2: 20,
  body3: 16,
  body4: 14,
  body5: 12,

  // app dimensions
  width,
  height,
};

export const calendarTheme = {
  backgroundColor: COLORS.lightGray,
  calendarBackground: COLORS.white,
  textSectionTitleColor: "#b6c1cd",
  textSectionTitleDisabledColor: "#d9e1e8",
  selectedDayBackgroundColor: COLORS.primary,
  selectedDayTextColor: COLORS.white,
  todayTextColor: "#00adf5",
  dayTextColor: "#2d4150",
  textDisabledColor: COLORS.lightGray,
  dotColor: COLORS.white,
  selectedDotColor: COLORS.white,
  monthTextColor: COLORS.secondary,
  textDayFontWeight: "300",
  textMonthFontWeight: "bold",
  textDayHeaderFontWeight: "300",
  textDayFontSize: 16,
  textMonthFontSize: 16,
  textDayHeaderFontSize: 16,
  agendaDayTextColor: "black",
  agendaDayNumColor: COLORS.darkGreen,
  agendaTodayColor: COLORS.secondary,
};

const appTheme = { COLORS, SIZES, calendarTheme };

export default appTheme;
