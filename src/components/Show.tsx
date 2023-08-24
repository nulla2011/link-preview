import useFetch from '../hooks/useFetch';
import { humanizeSize } from '../utils';
import { ListGroup, Spinner, Badge } from 'react-bootstrap';
import Gallery from './Gallery';
import './Show.scss';

export default function Show({ url }: { url: string }) {
  const { data, isLoading, error } = useFetch(url);
  if (isLoading) {
    return (
      <div className="text-center p-3">
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      </div>
    );
  } else if (error) {
    return <pre>{JSON.stringify(error, null, 2)}</pre>;
  } else if (data) {
    return data.count === 0 ? (
      <ListGroup className="w-auto p-3">
        <ListGroup.Item variant="danger">Invalid Link</ListGroup.Item>
      </ListGroup>
    ) : (
      <>
        <ListGroup className="w-auto p-3">
          <ListGroup.Item variant="secondary" className="fw-semibold">
            Information
          </ListGroup.Item>
          <ListGroup.Item as="li">
            <span className="badge-wrapper">
              <Badge>Name</Badge>
            </span>
            <span className="text ms-2">{data.name}</span>
          </ListGroup.Item>
          {data.file_type && (
            <ListGroup.Item as="li">
              <span className="badge-wrapper">
                <Badge>File Type</Badge>
              </span>
              <span className="text ms-2">{data.file_type}</span>
            </ListGroup.Item>
          )}
          <ListGroup.Item as="li">
            <span className="badge-wrapper">
              {' '}
              <Badge>Number of Files</Badge>
            </span>
            <span className="text ms-2">{data.count}</span>
          </ListGroup.Item>
          {data.size > 0 && (
            <ListGroup.Item as="li">
              <span className="badge-wrapper">
                <Badge>Total Size</Badge>
              </span>
              <span className="text ms-2">{humanizeSize(data.size)}</span>
            </ListGroup.Item>
          )}
        </ListGroup>
        {data.screenshots && (
          <ListGroup className="w-auto p-3">
            <ListGroup.Item variant="secondary" className="fw-semibold">
              Screenshots
            </ListGroup.Item>
            <ListGroup.Item>
              <Gallery images={data.screenshots} />
            </ListGroup.Item>
          </ListGroup>
        )}
      </>
    );
  } else return null;
}
