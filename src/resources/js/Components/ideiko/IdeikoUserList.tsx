import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Checkbox from '@mui/material/Checkbox';
import Avatar from '@mui/material/Avatar';

import { Link } from '@inertiajs/react';

export default function IdeikoUserList({users}) {
  const [checked, setChecked] = React.useState([1]);

  const handleToggle = (value: number) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };

  return (
    <List dense sx={{ width: '100%', bgcolor: 'background.paper' }}>
      {users.map((user) => {
        const labelId = `checkbox-list-secondary-label-${user}`;
        return (
            <Link href={`/room?id=${user.id}`}>
                <ListItem key={user.id}>
                    <ListItemButton>
                        <ListItemAvatar>
                            <Avatar
                            alt={user.name}
                            src={`/static/images/avatar/${user.id}.jpg`}
                            />
                        </ListItemAvatar>
                    <ListItemText id={labelId} primary={user.name} />
                    </ListItemButton>
                </ListItem>
            </Link>
        );
      })}
    </List>
  );
}