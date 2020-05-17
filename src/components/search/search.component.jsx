import React from 'react';
import './search.styles.css';
import { render } from '@testing-library/react';

export const Search = (props) => {
    return  <input className="search" type="search" placeholder={props.placeholder} onChange={props.onChange}/>

}
