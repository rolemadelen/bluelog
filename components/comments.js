import React, { useRef } from "react";

import useScript from "/lib/usescript";

const Comments = () => {
    const comment = useRef(null);

    const status = useScript({
        url: "https://utteranc.es/client.js",
        theme: "dark-blue",
        issueTerm: "url",
        repo: "euisblue/nextjs-blog-comments",
        crossorigin: "anonymous",
        ref: comment
    });

    return (
        <div className="w-full">
            {
                <div ref={comment}></div>
            }
        </div>
    );
};

export default Comments;
