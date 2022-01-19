import React, { useRef } from "react";
import metadata from "@data/metadata";
import giscus from "@lib/giscus";

const Comments = () => {
    const comment = useRef(null);

    const status = giscus({
        url: metadata.giscus.url,
        repo: metadata.giscus.repo,
        repoId: metadata.giscus.repoId,
        category: metadata.giscus.category,
        categoryId: metadata.giscus.categoryId,
        mapping: "url",
        theme: "dark_dimmed",
        crossorigin: "anonymous",
        ref: comment
    });

    return (
        <div className="w-full mt-[5em]">
            <div ref={comment}></div>
        </div>
    );
};

export default Comments;