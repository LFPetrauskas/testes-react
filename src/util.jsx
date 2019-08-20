import React from 'react';
let i = 0;


export function renderChildren(props) {
    return React.Children.map(props.children, c => React.cloneElement(c, { key: `${props.keyName}${i++}`, sobrenome: props.sobrenome }))
}
