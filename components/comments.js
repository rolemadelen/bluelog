import React, { useRef } from "react";

import giscus from "/lib/giscus";

const Comments = () => {
    const comment = useRef(null);

    const status = giscus({
        url: "https://giscus.app/client.js",
        repo: "euisblue/nextjs-blog-comments",
        repoId: "R_kgDOGp6ovg",
        category: "General",
        categoryId: "DIC_kwDOGp6ovs4CAoEv",
        mapping: "url",
        theme: "dark_dimmed",
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