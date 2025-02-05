import { Toaster, toast } from 'react-hot-toast';

const SearchBar = ({ onSearch }) => {
  const handleSubmit = e => {
    e.preventDefault();
    const form = e.target;
    const topic = form.elements.topic.value;
    if (form.elements.topic.value.trim() === '') {
      toast.error('Please enter search term!');
      return;
    }
    onSearch(topic);
    form.reset();
  };
  return (
    <header>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="topic"
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
