import { FormEvent, FC } from 'react';
import { Toaster, toast } from 'react-hot-toast';
import css from './SearchBar.module.css';

interface SearchBarProps {
  onSearch: (query: string) => void;
}

const SearchBar: FC<SearchBarProps> = ({ onSearch }) => {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const query = (form.elements.namedItem('search') as HTMLInputElement).value;
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
        <button className={css.search_button} type="submit">
          Search
        </button>
        <Toaster position="top-center" reverseOrder={false} />
      </form>
    </header>
  );
};

export default SearchBar;
