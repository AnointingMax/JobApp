import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Agenda } from "react-native-calendars";

import { dates, SIZES, calendarTheme } from "../constants";

const Calendar = ({ navigation }) => {
  const renderItem = (item) => {
    return (
      <TouchableOpacity
        style={styles.item}
        onPress={() => navigation.push("JobDetails")}
      >
        <Text>{item.name}</Text>
      </TouchableOpacity>
    );
  };

  const renderEmptyDate = () => {
    return (
      <View style={styles.emptyDate}>
        <Text>This is empty date!</Text>
      </View>
    );
  };

  return (
    <View style={{ flex: 1 }}>
      <Agenda
        // The list of items that have to be displayed in agenda. If you want to render item as empty date
        // the value of date key has to be an empty array []. If there exists no value for date key it is
        // considered that the date in question is not yet loaded
        items={dates}
        theme={calendarTheme}
        // Enable paging on horizontal, default = false
        pagingEnabled={true}
        // Enable or disable scrolling of calendar list
        scrollEnabled={true}
        // Enable or disable vertical scroll indicator. Default = false
        showScrollIndicator={true}
        // Minimum date that can be selected, dates before minDate will be grayed out. Default = undefined
        minDate={new Date().toISOString().split("T")[0]}
        // Max amount of months allowed to scroll to the past. Default = 50
        pastScrollRange={1}
        // Max amount of months allowed to scroll to the future. Default = 50
        futureScrollRange={2}
        // When `true` and `hideKnob` prop is `false`, the knob will always be visible and the user will be able to drag the knob up and close the calendar. Default = false
        showClosingKnob={true}
        // Specify your item comparison function for increased performance
        rowHasChanged={(r1, r2) => {
          return r1.text !== r2.text;
        }}
        // Specify how each item should be rendered in agenda
        renderItem={renderItem}
        // Specify how empty date content with no items should be rendered
        renderEmptyDate={renderEmptyDate}
      />
    </View>
  );
};

export default Calendar;

const styles = StyleSheet.create({
  item: {
    backgroundColor: "white",
    flex: 1,
    borderRadius: SIZES.base,
    padding: SIZES.padding,
    marginRight: SIZES.padding,
    marginTop: 15,
    height: 50,
  },
  emptyDate: {
    height: 15,
    flex: 1,
    paddingTop: 30,
  },
});
