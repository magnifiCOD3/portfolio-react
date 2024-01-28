import React from 'react'
import WorkItem from './WorkItem'

const data = [
    {
        year: 'December 2022 - Present',
        title: 'IT Supervisor Central',
        company: 'S&R Membership Shopping',
        details: 'Set up Office 365 (Outlook, teams, word etc.). Upgrade Desktop Specs (From HDD to SSD) make sure all files are properly Backed up. Retrieve files in NAS (Network-attached storage) if needed. Create, Reset password user account in domain server (Active Directory)'
    },
    {
        year: 'December 2021 - December 2022',
        title: 'IT Administrator',
        company: 'S&R Membership Shopping',
        details: 'Provide support on technical issues on Network Infrastructure, POS, Printer & Computer. Ensure that the SOD & EOD process have no errors. Ensure every morning that all POS are open & working. Checking all the EFT Terminals every morning to make sure that the transaction of cards has no errors. Provide support on QSR’s, like technical or connection problem. Configure all the items like (B1T1 & SAVE PROMOS) based on buyers (Employee) lists that will be given to us. Ensure every day that the Weighing Scale are working & the Price of the items are updated. TPLinux Cleanup (to maintain cleanliness of lists of the users or employee in the web app). Maintaining Nodes & Server in Warehouse. Talking and reporting to other 3rd parties of the company such as telco companies and various company regarding i.t equipment through email and phone. Remote assistant to another S&R warehouse with no IT & and assisting newly hired IT'
    },
    {
        year: 'August 2019 - December 2021',
        title: 'Technical Support Representative',
        company: 'Pilipinas Teleserv Inc.',
        details: 'Coordinate to the technical team to get an accurate update regarding to the client concern. Give an update to the client regarding to their concern. Help the client about their concern'
    },
    {
        year: 'December 2018 - April 2019',
        title: 'Intern',
        company: 'Bureau of Customs',
        details: 'Create program that will inventory the material that will in and out of the office. Assist our superior to setup other computer (Hardware and software apps) before deploy to another department. Also, assist our superior for their paper works.'
    },

]
const Work = () => {
  return (
    <div id='work' className='max-w-[1040px] m-auto md:pl-20 p-4 py-16'>
        <h1 className='text-4xl font-bold text-center text-[#001b5e] pb-10'>Experience </h1>
        {data.map((item, idx) => (
            <WorkItem 
                key={idx}
                year={item.year}
                title={item.title}
                company={item.company}
                details={item.details}/>
        ))}
    </div>
  )
}

export default Work