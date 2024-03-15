import React from 'react';

const SearchComponent = () => {
  return (
    <>
      <label className="input input-bordered flex items-center gap-2 mt-5">
        <input type="text" className="grow" placeholder="1 Whats your name..." />
        <kbd className="kbd kbd-sm">GPT</kbd>
      </label>
      <label className="input input-bordered flex items-center gap-2 mt-5">
        <input type="text" className="grow" placeholder="2 Whats your name..." />
        <kbd className="kbd kbd-sm">GPT</kbd>
      </label>
      <label className="input input-bordered flex items-center gap-2 mt-5">
        <input type="text" className="grow" placeholder="3 Whats your name..." />
        <kbd className="kbd kbd-sm">GPT</kbd>
      </label>
      <label className="input input-bordered flex items-center gap-2 mt-5">
        <input type="text" className="grow" placeholder="4 Whats your name..." />
        <kbd className="kbd kbd-sm">GPT</kbd>
      </label>
      <label className="input input-bordered flex items-center gap-2 mt-5">
        <input type="text" className="grow" placeholder="5 Whats your name..." />
        <kbd className="kbd kbd-sm">GPT</kbd>
      </label>
    </>
  );
};

export default SearchComponent;
