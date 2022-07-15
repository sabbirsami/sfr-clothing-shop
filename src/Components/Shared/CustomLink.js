import React from "react";
import { Link, useMatch, useResolvedPath } from "react-router-dom";

const CustomLink = ({ children, to, ...props }) => {
    let resolved = useResolvedPath(to);
    let match = useMatch({ path: resolved.pathname, end: true });
    return (
        <Link
            className="nav-link px-5 py-2 fw-regular"
            style={{
                color: match ? "#107aea" : "#000000",
                fontWeight: match ? "400" : "400",
            }}
            to={to}
            {...props}
        >
            {children}
        </Link>
    );
};

export default CustomLink;
