import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Post from './Post';
import IdeikoPostList from './IdeikoPostList';
import IdeikoFooter from './IdeikoFooter';
import IdeikoUserList from './IdeikoUserList';

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function IdeikoRoomTabs({posts, likedPosts, followed, followers}) {
    const [value, setValue] = React.useState(0);

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };

    const tabBarStyle = {
        display: 'flex',
        justifyContent: 'center'
    };

    return (
        <Box sx={{ width: '100%' }}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <Tabs value={value} onChange={handleChange} sx={tabBarStyle}>
                <Tab label="Posts" {...a11yProps(0)}  />
                <Tab label="Liked Posts" {...a11yProps(1)} />
                <Tab label="Followers" {...a11yProps(2)} />
                <Tab label="Followed" {...a11yProps(3)} />
                </Tabs>
            </Box>
            <CustomTabPanel value={value} index={0}>
                <IdeikoPostList posts={posts.data}/>
                <IdeikoFooter 
                nextPageURL={posts.nextPageUrl} 
                previousPageURL={posts.previousPageUrl}/>
            </CustomTabPanel>
            <CustomTabPanel value={value} index={1}>
                <IdeikoPostList posts={likedPosts.data}/>
                <IdeikoFooter
                nextPageURL={posts.nextPageUrl}
                previousPageURL={posts.previousPageUrl}/>
            </CustomTabPanel>
            <CustomTabPanel value={value} index={2}>
                <IdeikoUserList users={followers}/>
                <IdeikoFooter
                nextPageURL={posts.nextPageUrl}
                previousPageURL={posts.previousPageUrl}/>
            </CustomTabPanel>
            <CustomTabPanel value={value} index={3}>
                <IdeikoUserList users={followed}/>
                <IdeikoFooter
                nextPageURL={posts.nextPageUrl}
                previousPageURL={posts.previousPageUrl}/>
            </CustomTabPanel>
        </Box>
    );
}
