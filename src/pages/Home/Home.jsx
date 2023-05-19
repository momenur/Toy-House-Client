import React from 'react';
import Banner from './Banner';
import Gallery from './Gallery/Gallery';
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';

const Home = () => {
    return (
        <div className='bg-neutral text-neutral-content'>
            <Banner></Banner>
            <Gallery></Gallery>
            {/*  tabs */}

            <Tabs>
                <TabList>

                    <div className='flex justify-around'>
                        <Tab>Title 1</Tab>
                        <Tab>Title 2</Tab>
                        <Tab>Title 3</Tab>
                    </div>
                </TabList>

                <TabPanel>
                    <h2>Any content 1</h2>
                </TabPanel>
                <TabPanel>
                    <h2>Any content 2</h2>
                </TabPanel>
                <TabPanel>
                    <h2>Any Contain 3</h2>
                </TabPanel>
            </Tabs>
        </div>

    );
};

export default Home;