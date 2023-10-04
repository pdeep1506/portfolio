import React from 'react'
import './Timeline.css'
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import HeroImg2 from '../../Component/HeroImg2/HeroImg2.js'
import SchoolIcon from '@mui/icons-material/School';
import WorkHistoryIcon from '@mui/icons-material/WorkHistory';
const Timeline = () => {
    const data = [
        {
            date: "June 2018 - April 2022",
            title:"Bachelor of engineering ( Information Technology )",
            subtitle:"Shankersingh vaghela bapu institute of technology - Gandhinager",
            paragraph:"(3.5/4.0 GPA)",
            icon: <SchoolIcon/>

        },
        {
            date: "Jan 2022 – April 2022",
            title:"Software Developer Intern",
            subtitle:"AimDrimz Technology",
            paragraph:"(3.5/4.0 GPA)",
            icon: <WorkHistoryIcon/>
        },
        {
            date: "Sep 2022 – Oct 2022",
            title:"Software Developer Intern",
            subtitle:"InfyU labs",
            paragraph:"(3.5/4.0 GPA)",
            icon: <WorkHistoryIcon/>

        },{
            date: "Jan 2023 – April 2024",
            title:"Post Graduate- Mobile Application Development (co-op)",
            subtitle:"Fanshawe College - London, ON",
            paragraph:"(3.96/4.2 GPA)",
            icon:  <SchoolIcon/>
        }
    ]
  return (
        <div>
           <HeroImg2 heading="TimeLine." text="Lets look at my timeline" />

            <VerticalTimeline>
                {
                    data.reverse().map((each, index)=>{
                        return(
                           
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
    date={each.date}
    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    icon={each.icon}
  >
    <h3 className="vertical-timeline-element-title">{each.title}</h3>
    <h4 className="vertical-timeline-element-subtitle">{each.subtitle}</h4>
    <p>
     {each.paragraph}
    </p>
  </VerticalTimelineElement>
                        )
                    })
                }
            </VerticalTimeline>
        </div>
  )
}

export default Timeline