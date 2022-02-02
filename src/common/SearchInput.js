import React from "react";

function SearchInput() {
  return (
    <div className="w-44 h-10 mx-4 px-2 py-4 border-2 rounded-full flex items-center">
      <i class="fas fa-search opacity-50 m-2"></i>
      <input className="bg-transparent" placeholder="Search" />
    </div>
  );
}

export default SearchInput;
