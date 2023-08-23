import { useRef } from 'react';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';

export default function Search({ onSearch }: { onSearch: (value: string) => void }) {
  const formRef = useRef<HTMLInputElement>(null);
  const search = () => {
    onSearch(formRef.current!.value);
  };
  return (
    <>
      <InputGroup className="w-auto p-3">
        <Form.Control placeholder="Input link here" ref={formRef}></Form.Control>
        <Button onClick={search}>Search</Button>
      </InputGroup>
    </>
  );
}
