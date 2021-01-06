import React from 'react'
import Head from 'next/head'
import { useState } from 'react'
import Modal from './modal'

const Sidemenu = (props) => {
  const {categories} = props
  return (
    <div className="col-lg-3">
      <Modal/>
    <h1 className="my-4">{props.appName}</h1>
      <div className="list-group">
        {
          categories.map(c => (
            <a 
            key={c.id}
            href="#" 
            className="list-group-item">{c.name}</a>
          ))
        }
      </div>
    </div>
  )
}

export default Sidemenu;