import { MuiThemeProvider } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import { useState, useCallback } from 'react';
import { CHAT_ARR } from '../const';
import { MUI_THEME } from '../muiTheme';
import AddCommentTwoToneIcon from '@material-ui/icons/AddCommentTwoTone';
import DvrTwoToneIcon from '@material-ui/icons/DvrTwoTone';

const ChatItem = function chatItem(props) {
    return (
        <ListItem
            button
            selected={props.selected}
            onClick={props.onClick}
        >
            <ListItemIcon>
                <DvrTwoToneIcon />
            </ListItemIcon>
            <ListItemText
                primary={props.chat.name}
                secondary={props.chat.desc}
            />
        </ListItem>
    );
}

export default function ChatList() {
    const [chatArr, setChatArr] = useState(CHAT_ARR);
    const [selectedIndex, setSelectedIndex] = useState(1);

    const handleListItemClick = useCallback((event, index) => {
        setSelectedIndex(index);
    });

    const renderChat = useCallback((chat, idx) => {
        return (
            <>
            <ChatItem
                chat={chat} idx={idx} selected={selectedIndex === idx}
                onClick={(event) => handleListItemClick(event, idx)}
            />
            <Divider variant="inset" component="li"/>
            </>);
    });

    return (
        <div className='chat__list'>
            <span className="chatlist__title">
                CHATS
            </span>
            <MuiThemeProvider theme={MUI_THEME}>
                <List component="nav" aria-label="main mailbox folders">
                    {chatArr.map(renderChat)}
                </List>
                <List component="nav" aria-label="secondary mailbox folder">
                    <ListItem
                        button
                        selected={selectedIndex === chatArr.length}
                        onClick={(event) => handleListItemClick(event, chatArr.length)}
                    >
                        <ListItemIcon>
                            <AddCommentTwoToneIcon />
                        </ListItemIcon>
                        <ListItemText primary="Add chat" />
                    </ListItem>
                </List>
            </MuiThemeProvider>
        </div>
    );
}