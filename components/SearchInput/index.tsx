'use client'
import Style from "./SearchInput.module.scss";

const SearchInput = () => {
  return (
    <div className={Style.inputSearch + " ml-6"}>
      <div
        data-popover-target="popover-click"
        data-popover-trigger="click"
        className="t-text-field__wrapper !w-[250px] desktop:!w-[350px] t-text-field--rounded t-text-field---lg focus:border-primary"
      >
        <span className="t-text-field__prefix">
          <i className="t-text-field__prefix-icon i-ui-search"></i>
        </span>
        <input
          enterKeyHint="search"
          inputMode="search"
          placeholder="Tên sản phẩm, nhu cầu, hãng"
          type="text"
          value=""
          className="t-text-field"
          onChange={() => console.log('')
          }
        />
      </div>
      <div
        data-popover
        id="popover-click"
        role="tooltip"
        className="absolute z-10 invisible inline-block w-64 text-sm text-gray-500 transition-opacity duration-300 bg-white border border-gray-200 rounded-lg shadow-sm opacity-0 dark:text-gray-400 dark:border-gray-600 dark:bg-gray-800"
      >
        <div className="px-3 py-2 bg-gray-100 border-b border-gray-200 rounded-t-lg dark:border-gray-600 dark:bg-gray-700">
          <h3 className="font-semibold text-gray-900 dark:text-white">
            Popover click
          </h3>
        </div>
        <div className="px-3 py-2">
          <p>And here's some amazing content. It's very engaging. Right?</p>
        </div>
        <div data-popper-arrow></div>
      </div>
    </div>
  );
};

export default SearchInput;
