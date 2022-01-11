import React, { useRef } from "react";

import useScript from "/lib/usescript";

const Comments = () => {
    const comment = useRef(null);

    const status = useScript({
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