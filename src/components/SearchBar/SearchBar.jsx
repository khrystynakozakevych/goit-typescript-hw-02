import { Toaster, toast } from 'react-hot-toast';
import css from './SearchBar.module.css';

const SearchBar = ({ onSearch }) => {
  const handleSubmit = e => {
    e.preventDefault();
    const form = e.target;
    const query = form.elements.search.value;
    if (query.trim() === '') {
      toast.error('Please enter search term!');
      return;
    }
    onSearch(query);
    form.reset();
  };
  return (
    <header className={css.header}>
      <form onSubmit={handleSubmit}>
        <input
          className={css.search_input}
          type="text"
          name="search"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
        <button type="submit">Search</button>
        <Toaster position="top-center" reverseOrder={false} />
      </form>
    </header>
  );
};

export default SearchBar;
