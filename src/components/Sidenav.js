import React, { useState, useEffect } from 'react';
import BlockElement from './BlockElement';
import CloseLeft from '../assets/closeleft.svg';
import Search from '../assets/search.svg';
import Heart from '../assets/heart.svg';
import {flowy} from '../flowy.min';
import {triggers,actions,loggers} from './Blocks'

const Sidebar = () => {
    const [selectItem, setSelectItem] = useState("triggers");
    const [list, setList] = useState(null);

    useEffect(() => {
        displayBlocks();
    }, [selectItem]);

    useEffect(()=>{
        flowy(document.getElementById("canvas"));
    },[]);

    const displayBlocks = () => {
        if(selectItem === 'triggers') {
            setList(triggers);
        } else if (selectItem === 'actions') {
            setList(actions);
        } else {
            setList(loggers);
        }
    }

    const navigateBlocks = (e) => {
        setSelectItem(e.target.id);
    }

    return (
        <div id="leftcard">
        <div id="closecard">
            <img src={CloseLeft} />
        </div>
        <p id="header">Blocks</p>
        <div id="search">
            <img src={Search} />
            <input type="text" placeholder="Search blocks" />
        </div>
        <div id="subnav" onClick={e => navigateBlocks(e)}>
            <div id="triggers" className="side">Triggers</div>
            <div id="actions" className="side">Actions</div>
            <div id="loggers" className="side">Loggers</div>
        </div>
        <div id="blocklist">
           <BlockElement data={list} />
        </div>
        <div id="footer">
            <a href="https://github.com/alyssaxuu/flowy/" target="_blank">GitHub</a>
            <span>·</span>
            <a href="https://twitter.com/alyssaxuu/status/1199724989353730048" target="_blank">Twitter</a>
            <span>·</span>
            <a href="https://alyssax.com" target="_blank"><p>Made with</p><img src={Heart} /><p>by</p> Alyssa X</a>
        </div>
    </div>
    );
}

export default Sidebar;