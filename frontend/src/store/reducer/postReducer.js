import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    posts: [
        {
            id: 2,
            text: "World Cup 2022 Opening",
            img: "https://static01.nyt.com/images/2022/11/21/sports/21worldcup-onsoccer2/20worldcup-onsoccer2-articleLarge.jpg?quality=75&auto=webp&disable=upscale",
            comment: [
                {id: 1, text: "what's a moment!"}
            ],
            repost: [],
            love: [],
            share: []
        },
        {
            id: 1,
            text: "ChatGPT is an artificial intelligence chatbot developed by OpenAI and launched on November 30, 2022. It is notable for enabling users to refine and steer a conversation towards a desired length, format, style, level of detail, and language used.",
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoSStoqElZ_Bf7OevGKoe4Lcclq35cCp5t4Q&usqp=CAU",
            comment: [
                {id: 1, text: "what's a moment!"},
                {id: 2, text: "what's a moment!"},
            ],
            repost: [],
            love: [],
            share: []
        },
    ]
}
const postSlice = createSlice({
    name: 'post',
    initialState,
    reducers: {
        addPost(state, action) {
            const newPost = action.payload;
            console.log(newPost);
            state.posts = [newPost, ...state.posts];
        }
    }
})

export const postActions = postSlice.actions;
export default postSlice.reducer;