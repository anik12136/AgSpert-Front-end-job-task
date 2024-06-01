
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
import SaleOrder from '../SaleOrder/SaleOrder';

const OrderPage = () => {

    return (
        <div className="mx-20 text-center my-10 ">
            <Tabs size='md' variant='enclosed'>
                <div className="flex justify-between   ">
                    <TabList className="">
                        <Tab>One</Tab>
                        <Tab>Two</Tab>
                    </TabList>
                    <div>
                        <SaleOrder></SaleOrder>
                    </div>
                </div>

                <TabPanels>
                    <TabPanel>
                        <p>one!</p>
                    </TabPanel>
                    <TabPanel>
                        <p>two!</p>
                    </TabPanel>
                </TabPanels>

            </Tabs>
        </div>


    );
};

export default OrderPage;