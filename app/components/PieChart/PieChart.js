/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {View, Image, Text} from 'react-native';
import PieChart from 'react-native-pie-chart';

const PieCharts = props => {
  const series = [123, 111];
  const [iconHeight, setIconHeight] = useState(0);
  const [w, swtW] = useState(1);

  const find_dimesions = (layout, width) => {
    swtW(layout.width / 2 - width / 2);
    setIconHeight(layout.height / 2 - width / 2);
  };

  return (
    <View style={{alignItems: 'center'}}>
      <View
        style={{alignItems: 'center'}}
        onLayout={event => {
          find_dimesions(event.nativeEvent.layout, props.iconWidth);
        }}>
        <PieChart
          chart_wh={props.style.width}
          series={series}
          sliceColor={props.sliceColor}
          doughnut
          coverRadius={0.7}
          coverFill="#FFF"
        />
        <Image
          resizeMode="contain"
          source={props.source}
          style={{
            width: props.iconWidth,
            height: props.iconWidth,
            position: 'absolute',
            left: w,
            top: iconHeight,
          }}
        />
      </View>
      <Text style={props.text1Style}>{props.title}</Text>
      <Text style={props.text2style}>{props.text2}</Text>
    </View>
  );
};

export default PieCharts;
