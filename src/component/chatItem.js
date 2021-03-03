import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { useCallback } from 'react';

export default function chatItem({ chat, idx, selected, onClick, icon }) {

    const handleClick = useCallback((event) => {
        onClick(event, idx);
    }, [onClick, idx]);

    return (
        <ListItem
            button
            selected={selected}
            onClick={handleClick}
        >
            <ListItemIcon>
                {icon}
            </ListItemIcon>
            <ListItemText
                primary={chat.name}
                secondary={chat.desc}
            />
        </ListItem>
    );
}