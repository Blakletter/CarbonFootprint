import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import react from 'react'
import {Link} from 'react-router-dom'

const useStyles = makeStyles((theme) => ({
    root: {
      maxWidth: 345,
    },
    media: {
      height: 0,
      paddingTop: '56.25%', // 16:9
    },
    expand: {
      transform: 'rotate(0deg)',
      marginLeft: 'auto',
      transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
      }),
    },
    expandOpen: {
      transform: 'rotate(0deg)',
    },
    avatar: {
      backgroundColor: red[500],
    },
  }));

export default function CustomCard (props) {
    const classes = useStyles();
    const [expanded, setExpanded] = react.useState(false);
  
    const handleExpandClick = () => {
      setExpanded(!expanded);
    };

    return (
        <Link className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
        })}
        onClick={handleExpandClick}
        aria-expanded={expanded}
        aria-label="show more">
            <Card className={classes.root} >
                <CardMedia className={classes.media} image={props.src} title={props.title}/>
                <CardHeader title={props.header}/>
                <CardContent>
                <Typography className={props.title} color="textSecondary" gutterBottom>
                    {props.body}
                </Typography>
                </CardContent>
                <Collapse in={expanded} timeout="auto" unmountOnExit>
                    <CardContent>
                    <Typography paragraph>
                        {props.bodyExpanded}
                    </Typography>
                    </CardContent>
                </Collapse>
                </Card>
            </Link>
    );


}