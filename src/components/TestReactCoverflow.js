import React from 'react';
import Coverflow from 'react-coverflow';
import { StyleRoot } from 'radium';

export default function ReactTestCoverflow(){
    return (
        <StyleRoot>
            <Coverflow
                // width={960}
                // height={480}
                displayQuantityOfSide={2}
                enableScroll={false}
                navigation={true}
                enableHeading={false}
                // clickable={true}
                // active={}
                infiniteScroll
                media={{
                     '@media screen and (max-width: 900px)': {
                         width: '600px',
                         height: '300px'
                     },
                     '@media screen and (min-width: 900px)': {
                         width: '960px',
                         height: '600px'
                     }
                 }}
            >
            <img src='https://firebasestorage.googleapis.com/v0/b/simplelogin-405ec.appspot.com/o/images%2Fphoto-1531525645387-7f14be1bdbbd.jpg?alt=media&token=872b25c4-c4ea-434c-95cd-b73cd9328ab9' alt='Album one' data-action="https://facebook.github.io/react/"/>
            <img src='https://firebasestorage.googleapis.com/v0/b/simplelogin-405ec.appspot.com/o/images%2Fphoto-1531525645387-7f14be1bdbbd.jpg?alt=media&token=872b25c4-c4ea-434c-95cd-b73cd9328ab9' alt='Album two' data-action="http://passer.cc"/>
            <img src='https://firebasestorage.googleapis.com/v0/b/simplelogin-405ec.appspot.com/o/images%2Fphoto-1531525645387-7f14be1bdbbd.jpg?alt=media&token=872b25c4-c4ea-434c-95cd-b73cd9328ab9' alt='Album three' data-action="https://doce.cc/"/>
            <img src='https://firebasestorage.googleapis.com/v0/b/simplelogin-405ec.appspot.com/o/images%2Fphoto-1531525645387-7f14be1bdbbd.jpg?alt=media&token=872b25c4-c4ea-434c-95cd-b73cd9328ab9' alt='Album four' data-action="http://tw.yahoo.com"/>
        </Coverflow>
    </StyleRoot>
);
}