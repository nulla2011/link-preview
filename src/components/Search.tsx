import { useRef } from 'react';
import { InputGroup, Form, Button } from 'react-bootstrap';

export default function Search({ onSearch }: { onSearch: (value: string) => void }) {
  const formRef = useRef<HTMLInputElement>(null);
  const search = () => {
    onSearch(formRef.current!.value);
  };
  return (
    <>
      <InputGroup className="w-auto p-3">
        <Form.Control
          placeholder="Input link here"
          ref={formRef}
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              search();
            }
          }}
        ></Form.Control>
        <Button onClick={search}>Search</Button>
      </InputGroup>
    </>
  );
}
