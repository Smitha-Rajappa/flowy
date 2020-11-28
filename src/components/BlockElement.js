import React from 'react';

const BlockElement = (props) => {
    return (
        props.data && props.data.map(item => {
           return  (
            <div className="blockelem create-flowy noselect">
                <input
                type="hidden"
                name="blockelemtype"
                class="blockelemtype"
                value={item.value}
                />
                <div className="grabme">
                    <img src={item.icon1} />
                </div>
                <div className="blockin">
                    <div className="blockico">
                        <span></span>
                        <img src={item.icon2} />
                    </div>
                    <div className="blocktext">
                        <p className="blocktitle">{item.blocktitle}</p>
                        <p className="blockdesc">
                            {item.blockdescription}
                        </p>
                    </div>
                </div>
            </div>
        )})
    )
}

export default BlockElement;