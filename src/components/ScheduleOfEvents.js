import React from 'react';

import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';

const ScheduleOfEvents = () => {
    return (
        <Timeline>
      <TimelineItem>
        <TimelineOppositeContent>
          14:00 pm
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot color="secondary"/>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>Ceremony</TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent>
          16:00 pm
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot color="secondary"/>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>Cocktail Hour</TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent>
          17:00 pm
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot color="secondary"/>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>Dinner</TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent>
          18:00 pm
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot color="secondary"/>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>Speeches</TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent>
          19:00 pm
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot color="secondary"/>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>Dance Party</TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent>
          23:00 pm
        </TimelineOppositeContent>
        <TimelineSeparator >
          <TimelineDot color="secondary"/>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>Party Over</TimelineContent>
      </TimelineItem>
    </Timeline>
        // <div className="schedule-of-events">
        //     <h2>Schedule of Events</h2>
        //     <p>Here's the schedule for our wedding day:</p>
        //     <ul>
        //         <li>
        //             <strong>Ceremony:</strong> [Date and Time]<br />
        //             [Location]
        //         </li>
        //         <li>
        //             <strong>Cocktail Hour:</strong> [Date and Time]<br />
        //             [Location]
        //         </li>
        //         <li>
        //             <strong>Reception:</strong> [Date and Time]<br />
        //             [Location]
        //         </li>
        //         {/* just a framework */}
        //     </ul>
        // </div>
    );
}

export default ScheduleOfEvents;