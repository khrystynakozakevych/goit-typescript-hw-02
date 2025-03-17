import { ColorRing } from 'react-loader-spinner';

const Loader = () => {
  return (
    <ColorRing
      visible={true}
      height="80"
      width="80"
      ariaLabel="color-ring-loading"
      wrapperStyle={{}}
      wrapperClass="color-ring-wrapper"
      colors={['#edede9', '#d6ccc2', '#f5ebe0', '#e3d5ca', '#d5bdaf']}
    />
  );
};

export default Loader;
