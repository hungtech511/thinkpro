import Link from "next/link";
import SearchInput from "@/components/SearchInput";

const Header = () => {
    return (
        <header className="the-header">
        <div className="container flex items-center">
          <Link href="/">
            <img
              className="h-8"
              src="https://media-api-beta.thinkpro.vn/media/core/site-configs/2023/3/16/logo-thinkpro.svg"
              alt="logo"
            />
          </Link>
          <SearchInput />
          <div className="ml-auto desktop:ml-6 flex items-center space-x-3">
            <Link
              aria-label="Gọi hỗ trợ bằng số điện thoại 1900.63.3579"
              className="flex items-center space-x-2 px-4 py-3 hover:bg-base-100 rounded-md"
              href="/"
            >
              <i className="w-5 h-5 i-semi-user-card-phone text-primary"></i>
              <span className="hidden desktop:block font-semibold text-md">
                1900.63.3579
              </span>
            </Link>
            <div>
              <button
                data-popover-target="popover-address"
                type="button"
                className="flex items-center space-x-2 px-4 py-3 hover:bg-base-100 rounded-md focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium text-sm text-center"
              >
                <i className="i-semi-map-pin w-5 h-5 text-primary"></i>
                <span className="hidden desktop:block text-md font-semibold">
                  Địa chỉ cửa hàng
                </span>
              </button>
              <div
                data-popover
                id="popover-address"
                role="tooltip"
                className="absolute z-10 invisible inline-block text-sm transition-opacity duration-300 bg-white opacity-0"
              >
                <div className="p-3 min-w-[325px] flex flex-col space-y-2 bg-base">
                  <div>
                    <span className="text-md font-semibold">
                      Thành phố Hồ Chí Minh
                    </span>
                    <ul className="list-disc list-inside px-3">
                      <li className="text-md">
                        Số 5 - 7 Nguyễn Huy Tưởng, F6, Q. Bình Thạnh
                      </li>
                    </ul>
                    <ul className="list-disc list-inside px-3">
                      <li className="text-md">95 Trần Thiện Chánh, Q10</li>
                    </ul>
                  </div>
                  <div>
                    <span className="text-md font-semibold">Hà Nội</span>{" "}
                    <ul className="list-disc list-inside px-3">
                      <li className="text-md">53 Thái Hà, Đống Đa</li>
                    </ul>
                  </div>
                </div>
                <div data-popper-arrow></div>
              </div>
            </div>
            <Link
              aria-label="Chăm sóc khách hàng"
              href="https://onwardtogether.one/listen"
              rel="noopener"
              target="_blank"
              className="flex items-center space-x-2 px-4 py-3 hover:bg-base-100 rounded-md"
            >
              <i className="w-5 h-5 i-semi-customer-support text-primary"></i>
              <span className="hidden desktop:block font-semibold text-md">
                Khiếu nại
              </span>
            </Link>
            <Link
              href="/tin-tuc"
              aria-label="Tin công nghệ"
              className="flex items-center space-x-2 px-4 py-3 hover:bg-base-100 rounded-md"
            >
              <i className="i-semi-article w-5 h-5 text-primary"></i>
              <span className="hidden desktop:block text-md font-semibold">
                Tin công nghệ
              </span>
            </Link>
          </div>
          <div className="ml-0 desktop:ml-auto">
            <Link
              className="t-button  btn-cart t-button--icon t-button--md t-button--solid"
              href="/gio-hang"
            >
              <i className="i-semi-cart"></i>
            </Link>
          </div>
        </div>
      </header>
    );
};

export default Header;