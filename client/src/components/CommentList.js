import React from 'react';
import styled from 'styled-components';

// Use Bulma compoenent
const CommnentList = () => {

    return (
        <article className="media">
            <figure className="media-left">
                <p className="image is-64x64">
                    <img src="https://cdn.onlinewebfonts.com/svg/img_289334.png" alt="randomImg" />
                </p>
            </figure>
            <div className="media-content">
                <div className="content">
                        <NameText>Barbara Middleton · 3 hrs ago</NameText>
                        <CommentText>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis porta eros lacus, nec ultricies elit blandit non. Suspendisse pellentesque mauris sit amet dolor blandit rutrum. Nunc in tempus turpis.
                        </CommentText>
                        <NameText>Reply</NameText>
                </div>
            </div>         
        </article>
    )
}

const CommentText = styled.div`
    color: ${props => props.theme.normalText};
    padding-right: 10%;
`;
const NameText = styled.div`
    margin-top: 0px;
    color: ${props => props.theme.commentNameText};
`;

// Use Material UI compoenent
// import { makeStyles } from '@material-ui/core/styles';
// import { ListSubheader, List, ListItem, ListItemText, Collapse, Divider} from '@material-ui/core/ListSubheader';
// import ExpandLess from '@material-ui/icons/ExpandLess';
// import ExpandMore from '@material-ui/icons/ExpandMore';
// const useStyles = makeStyles(theme => ({
//     root: {
//         width: '100%',
//     },
//     nested: {
//         paddingLeft: theme.spacing(4),
//     },
// }));

// const LeftArea = styled.div`
// 	background-color: ${props => props.theme.darkerForeground};
// `;

// const Votes = styled.h5`
// 	color: ${props => props.theme.normalText};
// `;

// const StyledDivider = styled(Divider)`
//     background-color: white;
// `;

// const CommnentList = () => {
//     const classes = useStyles();
//     const [open, setOpen] = React.useState(true);

//     const handleClick = () => {
//         setOpen(!open);
//     };

//     return (
//         <List
//             component="nav"
//             aria-labelledby="nested-list-subheader"
//             subheader={
//                 <ListSubheader component="div" id="nested-list-subheader">
//                     Nested List Items
//                 </ListSubheader>
//             }
//             className={classes.root}
//         >
//             <ListItem button>

//                 <ListItemText>
//                     <strong>Barbara Middleton</strong>
//                     <p>
//                         tjdf d dfsd fdf sda fsd fs f saf sd f sadgawer f wega gaah
//                         tjdf d dfsd fdf sda fsd fs f saf sd f sadgawer f wega gaah
//                         tjdf d dfsd fdf sda fsd fs f saf sd f sadgawer f wega gaah
//                     </p>
//                     <small>Like · Reply · 3 hrs</small>
//                 </ListItemText>

//             </ListItem>
//             <StyledDivider  />

//             <ListItem button>
//                 <ListItemText>
//                     <strong>Barbara Middleton</strong>
//                     <p>
//                         tjdf d dfsd fdf sda fsd fs f saf sd f sadgawer f wega gaah
//                         tjdf d dfsd fdf sda fsd fs f saf sd f sadgawer f wega gaah
//                         tjdf d dfsd fdf sda fsd fs f saf sd f sadgawer f wega gaah
//                     </p>
//                     <small>Like · Reply · 3 hrs</small>
//                 </ListItemText>
//             </ListItem>
//             <Divider variant="inset" component="li" />

//             <ListItem button onClick={handleClick}>
//                 <ListItemText>
//                     <strong>Barbara Middleton</strong>
//                     <p>
//                         tjdf d dfsd fdf sda fsd fs f saf sd f sadgawer f wega gaah
//                         tjdf d dfsd fdf sda fsd fs f saf sd f sadgawer f wega gaah
//                         tjdf d dfsd fdf sda fsd fs f saf sd f sadgawer f wega gaah
//                     </p>
//                     <small>Like · Reply · 3 hrs</small>
//                 </ListItemText>
//                 {open ? <ExpandLess /> : <ExpandMore />}
//             </ListItem>
//             <Collapse in={open} timeout="auto" unmountOnExit>
//                 <List component="div" disablePadding>
//                     <ListItem button className={classes.nested}>
//                         <ListItemText>
//                             <strong>Barbara Middleton</strong>
//                             <p>
//                                 tjdf d dfsd fdf sda fsd fs f saf sd f sadgawer f wega gaah
//                                 tjdf d dfsd fdf sda fsd fs f saf sd f sadgawer f wega gaah
//                                 tjdf d dfsd fdf sda fsd fs f saf sd f sadgawer f wega gaah
//                     </p>
//                             <small>Like · Reply · 3 hrs</small>
//                         </ListItemText>
//                     </ListItem>
//                 </List>
//             </Collapse>
//         </List>
//     )
// }

export default CommnentList;