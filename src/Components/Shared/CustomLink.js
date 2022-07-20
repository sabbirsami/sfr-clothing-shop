import React from "react";
import { Link, useMatch, useResolvedPath } from "react-router-dom";

const CustomLink = ({ children, to, ...props }) => {
    let resolved = useResolvedPath(to);
    let match = useMatch({ path: resolved.pathname, end: true });
    return (
        <Link
            className="nav-link px-5  fw-regular"
            style={{
                color: match ? "#58468c" : "#58468c",
                fontWeight: match ? "400" : "400",
                marginTop: match ? "3px" : "3px",
                letterSpacing: match ? "-1px" : "-1px",
            }}
            to={to}
            {...props}
        >
            {children}
        </Link>
    );
};

export default CustomLink;
