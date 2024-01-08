import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import './ServicesTab.css'
import service1 from '../../assets/images/service1.png'
import service2 from '../../assets/images/service2.png'
const ServicesTab = () => {
    return (
        <div className=''>
            <Tabs>
                <TabList className="border border-[#E6E6E6] rounded-md my-8 z-10">
                    <Tab>Cavity Protection</Tab>
                    <Tab>Cosmetic Dentisty</Tab>
                    <Tab>Oral Surgery</Tab>
                </TabList>

                <TabPanel>
                    <div className="space-y-5">
                        <img className='w-full' src={service1} alt="" />
                        <h2 className="text-2xl font-bold text-black">Electro  Gastrology Therapy</h2>
                        <p className="text-base">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inve ntore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Sed ut perspiciatis unde omnis iste natus error</p>
                        <p>Sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inve ntore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
                        </p>
                        <button className="btn border-[#F7A582] border-2 text-[#F7A582] bg-transparent hover:bg-[#F7A582] text-base hover:text-white rounded-lg">More Details</button>
                    </div>
                </TabPanel>
                <TabPanel>
                <div className="space-y-5">
                        <img className='w-full' src={service2} alt="" />
                        <h2 className="text-2xl font-bold text-black">Electro  Gastrology Therapy</h2>
                        <p className="text-base">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inve ntore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Sed ut perspiciatis unde omnis iste natus error</p>
                        <p>Sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inve ntore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
                        </p>
                        <button className="btn border-[#F7A582] border-2 text-[#F7A582] bg-transparent hover:bg-[#F7A582] text-base hover:text-white rounded-lg">More Details</button>
                    </div>
                </TabPanel>
                <TabPanel>
                <div className="space-y-5">
                        <img className='w-full'  src={service1} alt="" />
                        <h2 className="text-2xl font-bold text-black">Electro  Gastrology Therapy</h2>
                        <p className="text-base">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inve ntore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Sed ut perspiciatis unde omnis iste natus error</p>
                        <p>Sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inve ntore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
                        </p>
                        <button className="btn border-[#F7A582] border-2 text-[#F7A582] bg-transparent hover:bg-[#F7A582] text-base hover:text-white rounded-lg">More Details</button>
                    </div>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default ServicesTab;