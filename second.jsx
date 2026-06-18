import React from "react";
import "./first.css";
import Post from "./first.jsx";
const Posts = () => {
    const blogPosts = [
        {
            title: "JAVASCRIPT",
            body: `JavaScript is a well known language, part of web development which is used to
make the website interactive.`,
            author: "Nishant Singh ", imgUrl:
                "https://www.w3schools.com/js/img_javascript_480.jpg",
        },
        {
            title: "Data Structure ",
            body: `Data Structures is an important concept which have various topics to explore like
stack, queue, linked list, trees, heaps and many more`, author:
                "Suresh Kr",
            imgUrl:
                "https://media.geeksforgeeks.org/img-practice/banner/coa-gate-2022-thumbnail.png",
        },
        {
            title: "Algorithm",
            body: `The word Algorithm means a process or set of rules to be followed in calculations 
or other problem-solving operations.`,
            author: "Monu Kr", imgUrl:
                "https://media.geeksforgeeks.org/img-practice/banner/google-test-series-thumbnail.png",
        },
        {
            title: "Computer Network",
            body: `An interconnection of multiple devices, also known as hosts, that are connected using 
multiple paths for the purpose of sending/ receiving data media.`,
            author: "Sonu Kr", imgUrl:
                "https://media.geeksforgeeks.org/img-practice/banner/cp-maths-java-thumbnail.png",
        },
    ];
    return (
        <div className="posts-container">
            {blogPosts.map((post, index) => (
                <Post key={index} index={index} post={post} />
            ))}
        </div>
    );
};
export default Posts;
