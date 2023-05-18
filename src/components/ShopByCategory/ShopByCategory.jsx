import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
const ShopByCategory = () => {
  return (
    <Tabs className="my-12">
      <TabList>
        <Tab>Sports </Tab>
        <Tab>Mini fire truck</Tab>
        <Tab>Mini police car</Tab>
      </TabList>

      <TabPanel>
        <h2>Any content 1</h2>
      </TabPanel>
      <TabPanel>
        <h2>Any content 2</h2>
      </TabPanel>
      <TabPanel>
        <h2>Any content 2</h2>
      </TabPanel>
    </Tabs>
  );
};

export default ShopByCategory;
