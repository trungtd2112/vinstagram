import React, {useState} from 'react';
import ariety from '../images/ariety.jpg';
const Post = () => {
    return (
        <div className="container1"> 
            <div className="header_content">
                <div>
                    <img className="image" src={ariety} alt="ariety" />
                </div>
                <div>
                    <p>Username</p>
                    <p>Time</p>
                </div>
            </div>
            <div className="post_content">
                <p className="text_content">Theo gia đình, Hoa hậu Việt Nam năm 1994 Nguyễn Thu Thuỷ đột ngột qua đời vào 4h30 sáng nay, ở tuổi 45 do đột nguỵ.
                    Mong chị an nghỉ cõi vĩnh hằng!
                    ———
                    Đột quỵ không chừa bất kỳ ai, lứa tuổi nào:(</p>
            </div>
            <div>
                <img className="imagePost" src={ariety} alt="ariety" />
            </div>
        </div>
    )
}
export default Post;