import React from 'react'
import { Form } from 'react-router-dom'
import { BsSearch } from 'react-icons/bs'
const Searching = () => {
  return (
    <Form className=" flex flex-row justify-center items-center mt-4">
      <input
        type="search"
        className=" mr-4 w-1/3 h-10 pl-4 border-primary border-2 rounded-full"
        placeholder="What are you looking for?"
      />
      <button type="submit" className="btn btn-primary btn-sm">
        <BsSearch className="text-lg" />
      </button>
    </Form>
  )
}

export default Searching
