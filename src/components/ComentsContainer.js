import React from 'react';
import { CommentData } from './ComentsList';

const Comment = ({ data }) => {
    const { name, text, replies } = data;
    return (
        <div className='flex bg-gray-100 rounded-lg p-4 my-2 shadow'>
            <img className='w-10 h-10 rounded-full mr-4' src='https://assets.stickpng.com/images/585e4bcdcb11b227491c3396.png' alt="" />
            <div className='flex flex-col'>
                <p className='font-semibold'>{name}</p>
                <p>{text}</p>
                {replies && replies.length > 0 && (
                    <div className='pl-5 border-l border-gray-200 mt-2'>
                        <CommentsList comments={replies} />
                    </div>
                )}
            </div>
        </div>
    );
};

const CommentsList = ({ comments }) => {
    if (!comments || comments.length === 0) {
        return null;
    }

    return comments.map((comment, index) => (
        <Comment key={index} data={comment} />
    ));
};

const CommentsContainer = () => {
    return (
        <div className='m-5 p-3'>
            <h1 className='text-2xl font-bold mb-5'>Comments:</h1>
            <CommentsList comments={CommentData} />
        </div>
    );
};

export default CommentsContainer;
