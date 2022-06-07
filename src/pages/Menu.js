import React from "react";
import "../Menu.css";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import Breakfast from "./Breakfast";
import Dinner from "./Dinner";
import Lunch from "./Lunch";
import Snacks from "./Snacks";
import { H11, HR } from "../pagesElements/BreakElement";

const Menu = () => {
  return (
    <div className="Tabs">
      <H11>Menu</H11>
      <HR />
      <Tabs>
        <div>
          <TabList>
            <Tab>
              Breakfast
            </Tab>
            <Tab>
              Lunch
            </Tab>
            <Tab>
              Dinner
            </Tab>
            <Tab>
              Sneaks
            </Tab>
          </TabList>
        </div>

        <TabPanel>
          <div className="panel-content">
            <Breakfast />
          </div>
        </TabPanel>
        <TabPanel>
          <div className="panel-content">
            <Lunch />
          </div>
        </TabPanel>
        <TabPanel>
          <div className="panel-content">
            <Dinner />
          </div>
        </TabPanel>
        <TabPanel>
          <div className="panel-content">
            <Snacks />
          </div>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default Menu;
