import React from "react";

function AuthorizationFooter() {
  const words = [
    "About",
    "Download the X app",
    "Help Center",
    "Terms of Service",
    "Privacy Policy",
    "Cookie Policy",
    "Accessibility",
    "Ads info",
    "Blog",
    "Careers",
    "Brand Resources",
    "Advertising",
    "Marketing",
    "X for Business",
    "Developers",
    "Directory",
    "Settings",
    "© 2025 X Corp.",
  ];

  return (
    <>
      <div className="w-full flex gap-4  justify-center flex-wrap">
        {words.map((word) => {
          return (
            <div className="" key={word}>
              <p className="text-[13px] text-[#71767b] hover:underline cursor-pointer">
                {word}
              </p>
            </div>
          );
        })}
      </div>
    </>
  );
}
export default AuthorizationFooter;
