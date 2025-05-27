import { Spinner } from 'reactstrap';

const LoadingSpinner = () => {
  return (
    <div className="d-flex justify-content-center align-items-center my-4">
      <Spinner color="primary" />
    </div>
  );
}

export default LoadingSpinner;
