import React from 'react';

export default function getGridContent(loading, items, Component, key="id") {
  if (loading) return 'Loading...';
  return items?.map((item) => (
    <Component key={item[key]} {...item} />
  ));
}
