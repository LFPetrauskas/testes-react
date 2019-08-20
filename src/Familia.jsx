import React from 'react';
import { renderChildren } from './util';
// let i = 0;

export default props =>
    <div>
        Membros da família {props.sobrenome}
        {renderChildren({ ...props, keyName: "membro" })}
        {/* {React.Children.map(props.children, c => React.cloneElement(c, { key: `membro${i++}`, sobrenome: props.sobrenome }))} */}
        {/* {props.children.map(c => React.cloneElement(c, { key: `membro${i++}`, sobrenome: props.sobrenome }))} */}
        {/* {React.cloneElement(props.children, { ano: 2019 })} */}
    </div>
