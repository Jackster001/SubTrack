import React, { Component } from "react";
import { connect } from "react-redux";
import { ResponsivePie } from "@nivo/pie";

class CompareChart extends Component {
  getData = (subs) => {
    if (!subs) return [];
    let data = [];
    subs.map((sub) => {
      if (sub && sub.title)
        data.push({
          id: sub.title,
          label: sub.title,
          value: parseFloat(sub.price),
        });
    });
    return data;
  };

  render() {
    return (
      <ResponsivePie
        data={this.getData(this.props.subs)}
        innerRadius={0.5}
        padAngle={0.7}
        cornerRadius={3}
        margin={{
            bottom: 20
          }}
        colors={{ scheme: "reds" }}
        borderWidth={1}
        borderColor={{ from: "color", modifiers: [["darker", 0.2]] }}
        radialLabelsSkipAngle={10}
        radialLabelsTextXOffset={1}
        radialLabelsTextColor="#333333"
        radialLabelsLinkOffset={1}
        radialLabelsLinkDiagonalLength={1}
        radialLabelsLinkHorizontalLength={24}
        radialLabelsLinkStrokeWidth={1}
        radialLabelsLinkColor={{ from: "color" }}
        slicesLabelsSkipAngle={10}
        slicesLabelsTextColor="#333333"
        animate={true}
        motionStiffness={90}
        motionDamping={15}
        legends={[
          {
            anchor: "bottom",
            direction: "row",
            translateY: 56,
            itemWidth: 100,
            itemHeight: 18,
            itemTextColor: "#999",
            symbolSize: 18,
            symbolShape: "circle",
            effects: [
              {
                on: "hover",
                style: {
                  itemTextColor: "#000",
                },
              },
            ],
          },
        ]}
      />
    );
  }
}

const mapStateToProps = (state) => ({
  subs: state.userState.profile.subscriptions,
});

export default connect(mapStateToProps)(CompareChart);
