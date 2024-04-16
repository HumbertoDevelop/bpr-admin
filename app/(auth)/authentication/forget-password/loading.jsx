'use client'
import { Spinner } from "react-bootstrap";
export default function Loading() {
  return (
    <div className="postion-relative">
          <Spinner animation="grow" variant="primary-default" className="position-absolute top-50 start-50 translate-middle rotate-full"/>
    </div>
  );
}
