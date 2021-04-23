//implement redirect to the individual article page
import React, {useState} from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'
import {Link} from "react-router-dom";
import {useNavBarContext} from "../../context/NavBarContext";
//https://www.pluralsight.com/guides/how-to-implement-a-read-more-link-in-react

const useStyles = makeStyles({
     card: {
         margin: '2rem 0',
    },
})

const Item = (props) => {
    const {setShowSearch} = useNavBarContext();

    const [readMore,setReadMore] = useState(false);
     const classes = useStyles()

     const createMarkup = html => {
         return { __html: html }
     }

    const extraContent=<div>
        <p className="extra-content">
            {props.content}
        </p>
    </div>
    const linkName=readMore?'Read Less << ':'Read More >> '

    return (
        <Card className={classes.card}>
            <CardContent>
                <Typography
                    variant="h5"
                    gutterBottom
                    dangerouslySetInnerHTML={createMarkup(props.title)}
                />
                {/*<Typography dangerouslySetInnerHTML={createMarkup(props.content)} />*/}
                <a className="read-more-link" onClick={()=>{setReadMore(!readMore)}}><h2>{linkName}</h2></a>
                {readMore && extraContent}
                <Link to={`/article/${props.slug}`}>
                    <a onClick={()=>setShowSearch(false)}><h2>Full article page.</h2></a>
                </Link>
            </CardContent>
        </Card>
    )
}

export default Item

