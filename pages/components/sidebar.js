import React from 'react'
import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import ClearAllIcon from '@material-ui/icons/ClearAll';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import SyncAltIcon from '@material-ui/icons/SyncAlt';
import LayersIcon from '@material-ui/icons/Layers';
import LockIcon from '@material-ui/icons/Lock';
import PersonIcon from '@material-ui/icons/Person';

const Sidebar = () => {
    return (
        <div className="md:w-3/12 w-6/12 h-screen shadow-2xl">
            <div className=" border-b py-3 mt-1 flex justify-around ">
                <p className="text-xl  font-semibold">Crypto</p>
                <p>|</p>
                <p className="text-gray-400 text-lg">Admin</p>

            </div>
            <div className="p-4 space-y-14">
                <div className="space-y-4" >
                    <h1 >Menu</h1>
                    <div className="">
                        <div className="flex p-3 text-gray-700  space-x-4 0 hover:bg-gray-50 hover:text-blue-600  cursor-pointer  ">
                            <DonutLargeIcon/>
                            <p className=" "  >Dashboard</p>
                        </div>
                    </div>
                    <div className="">
                        <div className="flex p-3 text-gray-700  space-x-4 0 hover:bg-gray-50 hover:text-blue-600  cursor-pointer  ">
                            <ClearAllIcon />
                            <p className="text-gray-600  " >Transaction</p>
                        </div>
                    </div>
                    <div className="">
                        <div className="flex p-3 text-gray-700  space-x-4 0 hover:bg-gray-50 hover:text-blue-600  cursor-pointer  ">
                            <ArrowUpwardIcon />
                            <p className="text-gray-600  " >Send</p>
                        </div>
                    </div>
                    <div className="">
                        <div className="flex p-3 text-gray-700  space-x-4 0 hover:bg-gray-50 hover:text-blue-600  cursor-pointer  ">
                            <ArrowDownwardIcon  />
                            <p className="text-gray-600  " >Receive</p>
                        </div>
                    </div>
                    <div className="">
                        <div className="flex p-3 text-gray-700  space-x-4 0 hover:bg-gray-50 hover:text-blue-600  cursor-pointer  ">
                            <SyncAltIcon />
                            <p className="text-gray-600  " >Buy</p>
                        </div>
                    </div>
                    <div className="">
                        <div className="flex p-3 text-gray-700  space-x-4 0 hover:bg-gray-50 hover:text-blue-600  cursor-pointer  ">
                            <PersonIcon />
                            <p className="text-gray-600  " >Users</p>
                        </div>
                    </div>
                    <div className="">
                        <div className="flex p-3 text-gray-700  space-x-4 0 hover:bg-gray-50 hover:text-blue-600  cursor-pointer  ">
                            <LayersIcon />
                            <p className="text-gray-600  " >Delegation</p>
                        </div>
                    </div>
                    <div className="">
                        <div className="flex p-3 text-gray-700  space-x-4 0 hover:bg-gray-50 hover:text-blue-600  cursor-pointer  ">
                            <LockIcon />
                            <p className="text-gray-600  " >Delegate</p>
                        </div>
                    </div>
                    

                </div>
                
            </div>

        </div>
    )
}

export default Sidebar
