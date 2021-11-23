import React, { useState } from "react";
import * as AiIcons from "react-icons/ai";

const Header = ({ item }) => {
    // state
    const [sort, setSort] = useState(false);

    // isClick
    const [isClick, setIsClick] = useState(false);

    // sorted
    const sorted = (e) => {
        setSort(!sort);
        setIsClick(true);
    };
    return (
        <th scope="col" className="px-0 th-sort" onClick={sorted}>
            <div className="btn w-100 d-flex px-2 align-items-center">
                <span className="col text-start">{item.th}</span>
                {isClick ? (
                    <div className="sort flex-column">
                        <AiIcons.AiFillCaretUp style={sort ? { opacity: "0.3" } : {}} />
                        <AiIcons.AiFillCaretDown style={!sort ? { opacity: "0.3" } : {}} />
                    </div>
                ) : (
                    <div className="sort flex-column">
                        <AiIcons.AiFillCaretUp style={!sort ? { opacity: "0.3" } : {}} />
                        <AiIcons.AiFillCaretDown style={!sort ? { opacity: "0.3" } : {}} />
                    </div>
                )}
            </div>
        </th>
    );
};

export default Header;
