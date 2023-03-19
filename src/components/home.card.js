import React from 'react';
import { Link } from 'react-router-dom';

export default function Card(props)
{
  const linkTo = `/project/${props.name.toLowerCase().replace(/\s/g, '-')}`;

  return(
    <Link to={linkTo} onClick={() => {props.onClickProp(props.name)}} className="project-card">
      <p className="project-card-name">
        <span className="project-card-name-dec">{props.name}</span>
      </p>
      <img src={props.featuredImage} alt={props.name} className="project-card-image"/>
    </Link>
  )
}