import React, { Component } from "react";
import { connect } from "react-redux";
import { ResponsivePie } from "@nivo/pie";

class CompareChart extends Component {
  getData = (subs) => {
      console.log("subs" + subs);
    if (!subs) return [];
    return subs.map((sub) => {
        if(sub)
      return sub.price;
    });
  };
  render() {
    return (
      <ResponsivePie
        data={this.getData(this.props.subs)}
        innerRadius={0.5}
        padAngle={0.7}
        cornerRadius={3}
        colors={{ scheme: "reds" }}
        borderWidth={1}
        borderColor={{ from: "color", modifiers: [["darker", 0.2]] }}
        radialLabelsSkipAngle={10}
        radialLabelsTextXOffset={6}
        radialLabelsTextColor="#333333"
        radialLabelsLinkOffset={0}
        radialLabelsLinkDiagonalLength={16}
        radialLabelsLinkHorizontalLength={24}
        radialLabelsLinkStrokeWidth={1}
        radialLabelsLinkColor={{ from: "color" }}
        slicesLabelsSkipAngle={10}
        slicesLabelsTextColor="#333333"
        animate={true}
        motionStiffness={90}
        motionDamping={15}
      />
    );
  }
}

const mapStateToProps = (state) => ({
  subs: state.userState.profile.subscriptions,
});

export default connect(mapStateToProps)(CompareChart);
