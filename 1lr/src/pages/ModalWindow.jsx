import React, {useEffect, useRef} from 'react';
import data from "../data/serviceData.json"

const ModalWindow = ({isModalOpened, toggleModalWindow, serviceIndex, setIndex}) => {
    let json = data[serviceIndex]
    const modalRef = useRef(null)
    const closeModalRef = useRef(null)

    const handleClickOutside = (event) => {
        if (modalRef.current
            && !modalRef.current.contains(event.target)
            && closeModalRef.current
            && !closeModalRef.current.contains(event.target)
        ) {
            toggleModalWindow(false);
        }
    };


    useEffect(() => {
        if (isModalOpened) {
            const padding = window.innerWidth - document.body.clientWidth
            document.body.style.overflow = 'hidden';
            document.body.style.paddingRight = `${padding}px`
            document.addEventListener('mousedown', handleClickOutside);
        } else {
            document.body.style.overflow = '';
            document.body.style.paddingRight = 0
            document.removeEventListener('mousedown', handleClickOutside);
        }

        return () => {
            document.body.style.overflow = '';
            document.body.style.paddingRight = 0
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isModalOpened]);

    const handleClick = (event, func) => {
        event.preventDefault();
        eval(func)();
    };

    const elements = json.content.map((item, index) => {
        if (item.text) {
            return <p key={index}>{item.text}</p>;
        } else if (item.ul) {
            const listItems = item.ul.map((li, liIndex) => {
                if (typeof li === 'object' && li.type === 'link') {
                    return (
                        <li key={liIndex}>
                            <a href="#" onClick={(event) => handleClick(event, li.func)}>
                                {li.text}
                            </a>
                        </li>
                    );
                } else {
                    return <li key={liIndex}>{li}</li>;
                }
            });
            return <ul key={index}>{listItems}</ul>;
        } else if (item.ol) {
            const listItems = item.ol.map((li, liIndex) => {
                if (typeof li === 'object' && li.type === 'link') {
                    return (
                        <li key={liIndex}>
                            <a href="#" onClick={(event) => handleClick(event, li.func)}>
                                {li.text}
                            </a>
                        </li>
                    );
                } else {
                    return <li key={liIndex}>{li}</li>;
                }
            });
            return <ol key={index}>{listItems}</ol>;
        } else if (item.nested_ul) {
            const nestedItems = item.nested_ul.map((li, liIndex) => (
                <li key={liIndex}>{li}</li>
            ));
            return (
                <ul key={index}>
                    <li>{item.nested_ul[0].text}</li>
                    <ul>{nestedItems.slice(1)}</ul>
                </ul>
            );
        }
        return null;
    });


    return (
        <div className={'modal_window'}>
            <div ref={modalRef} className="modal_window_content">
                <h1>{json.title}</h1>
                {elements}
                <button onClick={() => toggleModalWindow(false)} ref={closeModalRef} className={'modal_close'}>x
                </button>
            </div>
        </div>
    );
};

export default ModalWindow;