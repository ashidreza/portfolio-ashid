import React from "react";

function LeftSider() {
  return (
    <div className="fixed left-0 bottom-0 px-10">
      <div className="flex flex-col items-center">
        <div className="flex flex-col gap-3 sm:flex-row">
          <a href="https://leetcode.com/u/AshidReza/">
            <i class="ri-code-box-fill text-gray-400"></i>
          </a>
          <a href="https://www.linkedin.com/in/ashid-reza-suleman/">
            <i class="ri-linkedin-box-fill text-gray-400"></i>
          </a>
          <a href="https://github.com/ashidreza">
            <i class="ri-github-fill text-gray-600"></i>
          </a>
          <a href="https://mail.google.com/mail/u/0/#inbox">
            <i class="ri-mail-fill text-gray-400"></i>
          </a>
          <a href="https://www.facebook.com/ashid.reza.3">
            <i class="ri-facebook-circle-fill text-gray-400"></i>
          </a>
          <a href="https://www.instagram.com/thinking_about_u_so_i/">
            <i class="ri-instagram-fill text-gray-400"></i>
          </a>
        </div>
        <div className="w-[1px] h-52 bg-[gray] sm:hidden"></div>
      </div>
    </div>
  );
}

export default LeftSider;
