interface NavProps {
  loggedIn: boolean;
}

export default function Nav({ loggedIn }: NavProps) {
  const menus = [
    { name: "Home", href: "/" },
  ];

  const loggedInMenus = [
    { name: "Secret", href: "/auth/secret" },
    { name: "Logout", href: "/logout" },
  ];

  const nonLoggedInMenus = [
    { name: "Login", href: "/login" },
    { name: "SignUp", href: "/signup" },
  ]

  return (
    <div class="bg-white max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
      <div class="text-2xl  ml-1 font-bold">
        Fresh
      </div>
      <ul class="flex gap-6">
        {menus.map((menu) => (
          <li>
            <a
              href={menu.href}
              class="text-gray-500 hover:text-gray-700 py-1 border-gray-500"
            >
              {menu.name}
            </a>
          </li>
        ))}

        {
          loggedIn ? (
            loggedInMenus.map((menu) => (
              <li>
                <a
                  href={menu.href}
                  class="text-gray-500 hover:text-gray-700 py-1 border-gray-500"
                >
                  {menu.name}
                </a>
              </li>
            ))
          ) : (
            nonLoggedInMenus.map((menu) => (
              <li>
                <a
                  href={menu.href}
                  class="text-gray-500 hover:text-gray-700 py-1 border-gray-500"
                >
                  {menu.name}
                </a>
              </li>
            ))
          )
        }
      </ul>
    </div>
  );
}