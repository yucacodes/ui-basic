import { Tab, TabList, TabPanel, TabPanelList, TabsManager } from '@yucacodes/ui-qwik'; // __EXCLUDE__
// __EXCLUDE__
export default ( // __EXCLUDE__
  <div style={{ display: 'flex', gap: '1rem', alignItems: "center", justifyContent: "center", flexDirection: "column" }}> {/*__EXCLUDE__*/}
<TabsManager>
  <TabList>
    <Tab>Tab 1</Tab>
    <Tab>Tab 2</Tab>
  </TabList>
  <TabPanelList>
    <TabPanel>
      <div
        style={{
          background: "green",
          width: "14rem",
          height: "5rem"
        }}
      />
    </TabPanel>
    <TabPanel>
      <div
        style={{
          background: "orange",
          width: "14rem",
          height: "5rem"
        }}
      />
    </TabPanel>
  </TabPanelList>
</TabsManager>
  </div> // __EXCLUDE__
) // __EXCLUDE__
