import React, { useState, useEffect, memo } from "react";

function MemoContent() {
    return (
        <>
            <h1>Hello world</h1>
        </>
    )
}

export default memo(MemoContent);