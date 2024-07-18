import React from "react";

export default function SocialIconLink({ children, url }) {
  return (
    <a className='nav-link' aria-current='page' href={url}>
      {children}
    </a>
  );
}
