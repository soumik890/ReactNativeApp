import React, { useContext, useState } from "react";
import { useWindowDimensions } from "react-native";
import { TabView, SceneMap } from "react-native-tab-view";
import { NewsContext } from "../API/Context";
import Categories from "../Screens/Categories";
import ShortNews from "../Screens/ShortNews";
import TopNav from "./TopNav";

export default function News() {
  const layout = useWindowDimensions();

  const { index, setIndex } = useContext(NewsContext);

  const [routes] = useState([
    { key: "first", title: "Categories"},
    { key: "second", title: "News" },
  ]);

  const renderScene = SceneMap({
    first: Categories,
    second: ShortNews,
  });

  return (
    <TabView
      navigationState={{ index, routes }}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={{ width: layout.width }}
      renderTabBar={() => <TopNav index={index} setIndex={setIndex} />}
    />
  );
}
